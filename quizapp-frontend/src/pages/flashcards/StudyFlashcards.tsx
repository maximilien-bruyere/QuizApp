import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../api/api';
import '../../App.css';
import Button from '../components/buttons/Button';

interface Flashcard {
  flashcard_id: number;
  front: string;
  back: string;
  difficulty: 'NOUVEAU' | 'DIFFICILE' | 'MOYEN' | 'FACILE' | 'ACQUISE';
  category_id: number;
  category?: {
    name: string;
    subject?: {
      name: string;
    };
  };
}

const StudyFlashcards = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [loading, setLoading] = useState(true);
  const [studyMode, setStudyMode] = useState<'normal' | 'random'>('normal');
  const [shuffledIndices, setShuffledIndices] = useState<number[]>([]);

  useEffect(() => {
    if (categoryId) {
      loadFlashcards();
    }
  }, [categoryId]);

  const loadFlashcards = async () => {
    try {
      const response = await api.get(`/flashcards/category/${categoryId}`);
      const cards = response.data;
      setFlashcards(cards);
      
      // Créer un tableau d'indices mélangés pour le mode aléatoire
      const indices = Array.from({ length: cards.length }, (_, i) => i);
      setShuffledIndices(shuffleArray([...indices]));
    } catch (error) {
      console.error('Erreur lors du chargement des flashcards:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTextSize = (text: string) => {
    if (text.length > 300) return 'text-xs sm:text-sm lg:text-base';
    if (text.length > 200) return 'text-sm sm:text-base lg:text-lg';
    if (text.length > 100) return 'text-base sm:text-lg lg:text-xl';
    return 'text-lg sm:text-xl lg:text-2xl';
  };

  const shuffleArray = (array: number[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const getCurrentCardIndex = () => {
    return studyMode === 'random' ? shuffledIndices[currentIndex] : currentIndex;
  };

  const nextCard = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const flipCard = () => {
    console.log('Flip card clicked! Current isFlipped:', isFlipped, '-> New isFlipped:', !isFlipped);
    setIsFlipped(!isFlipped);
  };

  const resetStudy = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    if (studyMode === 'random') {
      setShuffledIndices(shuffleArray([...shuffledIndices]));
    }  
  };

  const toggleStudyMode = () => {
    const newMode = studyMode === 'normal' ? 'random' : 'normal';
    setStudyMode(newMode);
    setCurrentIndex(0);
    setIsFlipped(false);
    
    if (newMode === 'random') {
      const indices = Array.from({ length: flashcards.length }, (_, i) => i);
      setShuffledIndices(shuffleArray(indices));
    }
  };

  const updateDifficulty = async (difficulty: 'NOUVEAU' | 'DIFFICILE' | 'MOYEN' | 'FACILE' | 'ACQUISE') => {
    try {
      const currentCard = flashcards[getCurrentCardIndex()];
      await api.patch(`/flashcards/${currentCard.flashcard_id}/difficulty`, { difficulty });
      
      // Mettre à jour la carte dans le state local
      setFlashcards(prevCards => 
        prevCards.map(card => 
          card.flashcard_id === currentCard.flashcard_id 
            ? { ...card, difficulty } 
            : card
        )
      );
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la difficulté:', error);
    }
  };

  const getDifficultyStyle = (difficulty: string) => {
    switch (difficulty) {
      case 'NOUVEAU':
        return { bg: 'bg-blue-600', text: 'text-white', label: '🆕 Nouveau', color: 'blue' };
      case 'DIFFICILE':
        return { bg: 'bg-red-600', text: 'text-white', label: '🔴 Difficile', color: 'red' };
      case 'MOYEN':
        return { bg: 'bg-orange-600', text: 'text-white', label: '🟡 Moyen', color: 'orange' };
      case 'FACILE':
        return { bg: 'bg-green-600', text: 'text-white', label: '🟢 Facile', color: 'green' };
      case 'ACQUISE':
        return { bg: 'bg-emerald-600', text: 'text-white', label: '✅ Acquise', color: 'emerald' };
      default:
        return { bg: 'bg-blue-600', text: 'text-white', label: '🆕 Nouveau', color: 'blue' };
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case ' ': // Espace
          event.preventDefault();
          flipCard();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          prevCard();
          break;
        case 'ArrowRight':
          event.preventDefault();
          nextCard();
          break;
        case 'r':
        case 'R':
          event.preventDefault();
          resetStudy();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, flashcards.length, isFlipped]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (flashcards.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h2 className="text-2xl font-bold text-white mb-4">Aucune flashcard disponible</h2>
            <p className="text-gray-400 mb-6">Il n'y a pas encore de flashcards dans cette catégorie.</p>
            <Button
              onClick={() => navigate('/flashcards')}
              variant="primary"
              className="px-6 py-3 rounded-lg"
            >
              ← Retour aux catégories
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const currentCard = flashcards[getCurrentCardIndex()];
  const progress = ((currentIndex + 1) / flashcards.length) * 100;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-6">
          {/* Header - Responsive */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <button
              onClick={() => navigate('/flashcards')}
              className="px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-700 
                         transition-all duration-200 active:bg-gray-800
                         text-sm sm:text-base order-1 sm:order-1"
            >
              ← Retour
            </button>
            
            <div className="text-center flex-1 order-2 sm:order-2">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                {currentCard?.category?.name}
              </h1>
              <p className="text-gray-400 text-sm sm:text-base">
                {currentCard?.category?.subject?.name}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center sm:justify-end order-3 sm:order-3">
              <button
                onClick={toggleStudyMode}
                className={`px-3 sm:px-4 py-2 rounded-lg transition-all duration-200 active:scale-95
                           text-sm sm:text-base ${
                  studyMode === 'random' 
                    ? 'bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800' 
                    : 'bg-gray-600 hover:bg-gray-700 active:bg-gray-800'
                } text-white`}
              >
                {studyMode === 'random' ? '🔀 Aléatoire' : '📋 Ordre'}
              </button>
              <Button
                onClick={resetStudy}
                variant="primary"
                className="px-3 sm:px-4 py-2 rounded-lg active:scale-95 text-sm sm:text-base"
              >
                🔄 Recommencer
              </Button>
            </div>
          </div>

          {/* Barre de progression - Responsive */}
          <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3">
            <div
              className="bg-gradient-to-r from-purple-600 to-blue-500 h-2 sm:h-3 rounded-full 
                         transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="text-center text-gray-400 text-sm sm:text-base">
            Carte {currentIndex + 1} sur {flashcards.length}
          </div>

          {/* Indicateur de difficulté - Responsive */}
          <div className="text-center">
            <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-200
                             ${getDifficultyStyle(currentCard.difficulty).bg}`}>
              {getDifficultyStyle(currentCard.difficulty).label}
            </span>
          </div>

          {/* Flashcard - Responsive */}
          <div className="flex justify-center px-2 sm:px-4">
            <div 
              className="flashcard-container cursor-pointer w-full transition-all duration-300 group"
              onClick={flipCard}
            >
              <div className={`flashcard rounded-xl ${isFlipped ? 'flipped' : ''}`}>
                <div className="flashcard-front">
                  <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white 
                                  p-4 sm:p-6 lg:p-8 rounded-xl shadow-2xl min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] 
                                  flex items-center justify-center">
                    <div className="text-center w-full">
                      <div className="text-sm sm:text-lg mb-2 sm:mb-4 text-purple-200">Question</div>
                      <div className={`${getTextSize(currentCard?.front || '')} font-medium leading-relaxed 
                                      break-words overflow-hidden text-center px-2`}>
                        {currentCard?.front}
                      </div>
                      <div className="text-xs sm:text-sm text-purple-200 mt-4 sm:mt-6 group-hover:text-white transition-colors duration-300">
                        Cliquez pour voir la réponse
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flashcard-back">
                  <div className="bg-gradient-to-br from-green-600 to-teal-600 text-white 
                                  p-4 sm:p-6 lg:p-8 rounded-xl shadow-2xl min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] 
                                  flex items-center justify-center">
                    <div className="text-center w-full">
                      <div className="text-sm sm:text-lg mb-2 sm:mb-4 text-green-200">Réponse</div>
                      <div className={`${getTextSize(currentCard?.back || '')} font-medium leading-relaxed 
                                      break-words overflow-hidden text-center px-2`}>
                        {currentCard?.back}
                      </div>
                      <div className="text-xs sm:text-sm text-green-200 mt-4 sm:mt-6 group-hover:text-white transition-colors duration-300">
                        Cliquez pour voir la question
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contrôles de navigation - Responsive */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 mt-10 sm:mt-8">
            <button
              onClick={prevCard}
              disabled={currentIndex === 0}
              className={`w-full sm:w-auto px-4 sm:px-6 py-3 rounded-lg transition-all duration-200 
                         text-sm sm:text-base font-medium ${
                currentIndex === 0
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-600 hover:bg-gray-500 text-white cursor-pointer active:bg-gray-400'
              }`}
            >
              ← Précédente
            </button>
            
            <button
              onClick={flipCard}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg bg-purple-600 text-white 
                         hover:bg-purple-700 transition-all duration-200 cursor-pointer active:bg-purple-800
                         font-medium text-sm sm:text-base"
            >
              {isFlipped ? 'Voir Question' : 'Voir Réponse'}
            </button>
            
            <button
              onClick={nextCard}
              disabled={currentIndex === flashcards.length - 1}
              className={`w-full sm:w-auto px-4 sm:px-6 py-3 rounded-lg transition-all duration-200 
                         text-sm sm:text-base font-medium ${
                currentIndex === flashcards.length - 1
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-600 hover:bg-gray-500 text-white cursor-pointer active:bg-gray-400'
              }`}
            >
              Suivante →
            </button>
          </div>

          {/* Boutons de difficulté - Responsive */}
          <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
            <h3 className="text-white text-center mb-3 sm:mb-4 font-medium text-sm sm:text-base">
              Comment évaluez-vous cette carte ?
            </h3>
            <div className="grid grid-cols-2 sm:flex sm:justify-center gap-2 sm:gap-3">
              <button
                onClick={() => updateDifficulty('DIFFICILE')}
                className="px-2 sm:px-3 py-2 rounded-lg bg-red-700 text-white hover:bg-red-800 cursor-pointer
                           transition-all duration-200 active:bg-red-900
                           text-xs sm:text-sm font-medium"
              >
                🔴 Difficile
              </button>
              <button
                onClick={() => updateDifficulty('MOYEN')}
                className="px-2 sm:px-3 py-2 rounded-lg bg-orange-600 text-white hover:bg-orange-700 cursor-pointer
                           transition-all duration-200 active:bg-orange-800
                           text-xs sm:text-sm font-medium"
              >
                🟡 Moyen
              </button>
              <button
                onClick={() => updateDifficulty('FACILE')}
                className="px-2 sm:px-3 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 cursor-pointer
                           transition-all duration-200 active:bg-green-800
                           text-xs sm:text-sm font-medium"
              >
                🟢 Facile
              </button>
              <button
                onClick={() => updateDifficulty('ACQUISE')}
                className="px-2 sm:px-3 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 cursor-pointer
                           transition-all duration-200 active:bg-emerald-800
                           text-xs sm:text-sm font-medium"
              >
                ✅ Acquise
              </button>
              <button
                onClick={() => updateDifficulty('NOUVEAU')}
                className="px-2 sm:px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 cursor-pointer
                           transition-all duration-200 active:bg-blue-800
                           text-xs sm:text-sm font-medium"
              >
                🆕 Nouveau
              </button>
            </div>
          </div>

          {/* Raccourcis clavier - Responsive */}
          <div className="text-center text-gray-400 text-xs sm:text-sm space-y-1 hidden sm:block">
            <p>Raccourcis clavier:</p>
            <p>Espace: Retourner la carte | ← →: Navigation | R: Recommencer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyFlashcards;
