import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/web/pdf_viewer.css";

// Configuration du worker PDF.js - utiliser le worker depuis le dossier public
pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

interface PDFViewerProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  filename: string;
}
const PDFViewer = ({ isOpen, onClose, pdfUrl, filename }: PDFViewerProps) => {
  {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [pdfDoc, setPdfDoc] = useState<any>(null);
    const [pageNum, setPageNum] = useState(1);
    const [pageIsRendering, setPageIsRendering] = useState(false);
    const [pageNumPending, setPageNumPending] = useState<number | null>(null);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [showInstructions, setShowInstructions] = useState(true);

    // États pour le swipe amélioré
    const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
    const [isScrolling, setIsScrolling] = useState(false);

    // Charger le PDF
    useEffect(() => {
      if (!isOpen || !pdfUrl) return;

      setLoading(true);
      setError(null);
      setShowInstructions(true); // Réinitialiser les instructions

      const loadingTask = pdfjsLib.getDocument(pdfUrl);

      loadingTask.promise
        .then((pdf) => {
          setPdfDoc(pdf);
          setTotalPages(pdf.numPages);
          setPageNum(1);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Erreur lors du chargement du PDF:", err);
          setError("Erreur lors du chargement du PDF");
          setLoading(false);
        });
    }, [isOpen, pdfUrl]);

    // Rendre une page
    const renderPage = (num: number) => {
      if (!pdfDoc || !canvasRef.current) return;

      setPageIsRendering(true);

      pdfDoc.getPage(num).then((page: any) => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;

        // Calculer la taille pour s'adapter à la fenêtre
        const containerWidth = canvas.parentElement!.clientWidth - 40; // 40px pour les marges
        const viewport = page.getViewport({ scale: 1 });
        const scale = Math.min(containerWidth / viewport.width, 1.5);
        const scaledViewport = page.getViewport({ scale });

        canvas.height = scaledViewport.height;
        canvas.width = scaledViewport.width;

        const renderContext = {
          canvasContext: ctx,
          viewport: scaledViewport,
        };

        page.render(renderContext).promise.then(() => {
          setPageIsRendering(false);

          if (pageNumPending !== null) {
            renderPage(pageNumPending);
            setPageNumPending(null);
          }
        });
      });
    };

    // Rendre la page quand le PDF est chargé
    useEffect(() => {
      if (pdfDoc && !loading) {
        renderPage(pageNum);
      }
    }, [pdfDoc, pageNum, loading]);

    // Navigation simple
    const goToPrevPage = () => {
      if (pageNum <= 1 || pageIsRendering) return;

      const newPageNum = pageNum - 1;
      setPageNum(newPageNum);

      if (pageIsRendering) {
        setPageNumPending(newPageNum);
      } else {
        renderPage(newPageNum);
      }
    };

    const goToNextPage = () => {
      if (pageNum >= totalPages || pageIsRendering) return;

      const newPageNum = pageNum + 1;
      setPageNum(newPageNum);

      if (pageIsRendering) {
        setPageNumPending(newPageNum);
      } else {
        renderPage(newPageNum);
      }
    };

    const goToPage = (page: number) => {
      if (page >= 1 && page <= totalPages && !pageIsRendering) {
        setPageNum(page);
        renderPage(page);
      }
    };

    // Gestion simple du swipe tactile (optionnel)
    const handleTouchStart = (e: React.TouchEvent) => {
      if (pageIsRendering) return;

      const touch = e.touches[0];
      setTouchStart({ x: touch.clientX, y: touch.clientY });
      setIsScrolling(false);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
      if (!touchStart.x || !touchStart.y) return;

      const touch = e.touches[0];
      const deltaY = Math.abs(touch.clientY - touchStart.y);

      // Permettre le scroll normal
      if (deltaY > 15) {
        setIsScrolling(true);
      }
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
      if (!touchStart.x || !touchStart.y || pageIsRendering || isScrolling)
        return;

      const touch = e.changedTouches[0];

      const deltaX = touchStart.x - touch.clientX;

      // Seuil pour swipe horizontal uniquement
      const minSwipeDistance = 100;

      if (Math.abs(deltaX) > minSwipeDistance) {
        setShowInstructions(false);

        if (deltaX > 0) {
          // Swipe vers la gauche = page suivante
          goToNextPage();
        } else {
          // Swipe vers la droite = page précédente
          goToPrevPage();
        }
      }

      // Reset
      setTouchStart({ x: 0, y: 0 });
      setIsScrolling(false);
    };

    // Gestion simple du clavier uniquement
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowUp":
        case "ArrowLeft":
          e.preventDefault();
          goToPrevPage();
          break;
        case "ArrowDown":
        case "ArrowRight":
        case " ": // Espace
          e.preventDefault();
          goToNextPage();
          break;
        case "Escape":
          e.preventDefault();
          onClose();
          break;
      }
    };

    // Empêcher le zoom/rétrécissement sur scroll
    const handleWheel = (e: WheelEvent) => {
      // Permettre le scroll normal de la page, mais empêcher le zoom
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        return;
      }

      // Si on est en bout de scroll, naviguer entre les pages
      const container = containerRef.current;
      if (!container) return;

      const atTop = container.scrollTop === 0;
      const atBottom =
        container.scrollTop + container.clientHeight >=
        container.scrollHeight - 1;

      if (e.deltaY < 0 && atTop) {
        // Scroll vers le haut en étant déjà en haut = page précédente
        e.preventDefault();
        goToPrevPage();
      } else if (e.deltaY > 0 && atBottom) {
        // Scroll vers le bas en étant déjà en bas = page suivante
        e.preventDefault();
        goToNextPage();
      }
    };

    // Ajouter les événements clavier et wheel
    useEffect(() => {
      if (isOpen) {
        document.addEventListener("keydown", handleKeyPress);
        const container = containerRef.current;
        if (container) {
          container.addEventListener("wheel", handleWheel, { passive: false });
        }

        return () => {
          document.removeEventListener("keydown", handleKeyPress);
          if (container) {
            container.removeEventListener("wheel", handleWheel);
          }
        };
      }
    }, [isOpen, pageNum, totalPages]);

    // Masquer les instructions après 5 secondes
    useEffect(() => {
      if (isOpen && !loading && !error && totalPages > 1) {
        const timer = setTimeout(() => {
          setShowInstructions(false);
        }, 5000);
        return () => clearTimeout(timer);
      }
    }, [isOpen, loading, error, totalPages]);

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-gray-800 border border-gray-700 rounded-2xl w-full max-w-4xl h-full max-h-[90vh] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400">
                📄
              </div>
              <h2 className="text-lg font-semibold text-white">{filename}</h2>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
            >
              ✕
            </button>
          </div>

          {/* Controls améliorés */}
          {!loading && !error && (
            <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-800/50">
              <div className="flex items-center gap-3">
                <button
                  onClick={goToPrevPage}
                  disabled={pageNum <= 1}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed text-gray-300 hover:text-white transition-all duration-300 text-sm"
                >
                  <span>←</span>
                  <span>Précédent</span>
                </button>

                <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg">
                  <span className="text-sm text-gray-300">Page</span>
                  <input
                    type="number"
                    min="1"
                    max={totalPages}
                    value={pageNum}
                    onChange={(e) => {
                      const newPage = parseInt(e.target.value);
                      if (newPage >= 1 && newPage <= totalPages) {
                        goToPage(newPage);
                      }
                    }}
                    className="w-16 px-2 py-1 text-sm bg-gray-600 border border-gray-500 rounded text-white text-center"
                  />
                  <span className="text-sm text-gray-400">/ {totalPages}</span>
                </div>

                <button
                  onClick={goToNextPage}
                  disabled={pageNum >= totalPages}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed text-gray-300 hover:text-white transition-all duration-300 text-sm"
                >
                  <span>Suivant</span>
                  <span>→</span>
                </button>
              </div>

              {/* Barre de scroll pour les pages */}
              {totalPages > 1 && (
                <div className="flex items-center gap-4 flex-1 max-w-md mx-4">
                  <span className="text-xs text-gray-400">1</span>
                  <div className="flex-1">
                    <input
                      type="range"
                      min="1"
                      max={totalPages}
                      value={pageNum}
                      onChange={(e) => goToPage(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
                          (pageNum / totalPages) * 100
                        }%, #374151 ${
                          (pageNum / totalPages) * 100
                        }%, #374151 100%)`,
                        WebkitAppearance: "none",
                        MozAppearance: "none",
                      }}
                    />
                  </div>
                  <span className="text-xs text-gray-400">{totalPages}</span>
                </div>
              )}

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowInstructions(!showInstructions)}
                  className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-all duration-300"
                  title="Aide navigation"
                >
                  ❓
                </button>
                <a
                  href={pdfUrl}
                  download={filename}
                  className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-all duration-300"
                >
                  💾 Télécharger
                </a>
              </div>
            </div>
          )}

          {/* Content */}
          <div
            ref={containerRef}
            className="flex-1 overflow-auto p-4 bg-gray-900 select-none relative pdf-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              scrollBehavior: "smooth",
              overscrollBehavior: "contain", // Empêche le scroll parent
              touchAction: "pan-y", // Permet seulement le scroll vertical tactile
              userSelect: "none",
              WebkitUserSelect: "none",
              MozUserSelect: "none",
              msUserSelect: "none",
            }}
          >
            {/* Barre de progression */}
            {!loading && !error && totalPages > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800/90 backdrop-blur-sm rounded-full px-4 py-2 z-10 border border-gray-600">
                <div className="flex items-center gap-3">
                  <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
                      style={{ width: `${(pageNum / totalPages) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-300 font-medium">
                    {pageNum}/{totalPages}
                  </span>
                </div>
              </div>
            )}

            {/* Instructions d'aide améliorées */}
            {!loading && !error && totalPages > 1 && showInstructions && (
              <div className="absolute top-4 right-4 bg-gray-800/95 backdrop-blur-sm rounded-xl p-4 text-sm text-gray-200 z-10 border border-gray-600 shadow-xl max-w-xs">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-white">🎯 Navigation</h4>
                  <button
                    onClick={() => setShowInstructions(false)}
                    className="text-gray-400 hover:text-white text-xs"
                  >
                    ✕
                  </button>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 p-2 bg-gray-700/50 rounded-lg">
                    <span className="text-lg">📱</span>
                    <span>Swipe horizontal pour naviguer</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-gray-700/50 rounded-lg">
                    <span className="text-lg">🖱️</span>
                    <span>Scroll en bout de page</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-gray-700/50 rounded-lg">
                    <span className="text-lg">⌨️</span>
                    <span>Flèches, Espace, Échap</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-gray-700/50 rounded-lg">
                    <span className="text-lg">🎚️</span>
                    <span>Barre de défilement des pages</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-gray-700/50 rounded-lg">
                    <span className="text-lg">🔢</span>
                    <span>Saisie directe du numéro</span>
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-gray-600 text-xs text-gray-400 text-center">
                  Se masque automatiquement
                </div>
              </div>
            )}
            {loading && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-400">Chargement du PDF...</p>
                </div>
              </div>
            )}

            {error && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-4xl mb-4">❌</div>
                  <p className="text-red-400 mb-4">{error}</p>
                  <button
                    onClick={onClose}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            )}

            {!loading && !error && (
              <div className="flex justify-center">
                <div className="relative">
                  <canvas
                    ref={canvasRef}
                    className="border border-gray-700 rounded-lg shadow-lg max-w-full pdf-canvas"
                    style={{
                      display: "block",
                      userSelect: "none",
                      WebkitUserSelect: "none",
                      MozUserSelect: "none",
                      msUserSelect: "none",
                      touchAction: "none",
                      pointerEvents: "none",
                    }}
                  />
                  {pageIsRendering && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 rounded-lg">
                      <div className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-600">
                        <span className="text-sm text-gray-300">
                          Chargement page {pageNumPending || pageNum}...
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default PDFViewer;
