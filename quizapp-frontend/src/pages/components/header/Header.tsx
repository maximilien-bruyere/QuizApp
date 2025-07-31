import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { useState } from "react";
import { useTranslation } from "react-i18next";

/**
 * Header
 * -------
 * Composant d'affichage de l'en-tête principal de l'application.
 *
 * - Affiche le titre animé de l'application avec un lien vers l'accueil.
 * - Affiche la navigation adaptée selon l'état de connexion de l'utilisateur :
 *   - Si non connecté : liens vers Accueil, Connexion, Inscription.
 *   - Si connecté : liens vers Accueil, Mes formations, Quiz, (Administration si admin), Déconnexion.
 * - Utilise le contexte d'authentification pour gérer l'affichage et la déconnexion.
 * - Utilise un style responsive et moderne avec Tailwind CSS.
 *
 * Utilisation :
 * <Header />
 */

const Header = () => {
  const { isAuthenticated, user, logout } = useAuthContext();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    logout();
    navigate("/logout-success", { replace: true });
  };

  // Fonction pour fermer le menu mobile lors du clic sur un lien
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const { t } = useTranslation();

  // Retourne l'en-tête avec les liens de navigation responsive
  return (
    <header className="bg-[#0f172a] px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-[length:200%_auto] bg-clip-text text-transparent hover:animate-gradient-move transition duration-500"
          >
            QuizApp
          </NavLink>

          {/* Menu Desktop - caché sur mobile */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-white text-sm font-medium">
            {!isAuthenticated && (
              <>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "underline-animate py-1 transition-colors duration-300" +
                    (isActive ? " active font-bold text-purple-500" : " text-white hover:text-purple-500")
                  }
                >
                  🏠 {t("header_home")}
                </NavLink>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    "underline-animate py-1 transition-colors duration-300" +
                    (isActive ? " active font-bold text-purple-500" : " text-white hover:text-purple-500")
                  }
                >
                  🔐 {t("header_login")}
                </NavLink>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    "underline-animate py-1 transition-colors duration-300" +
                    (isActive ? " active font-bold text-purple-500" : " text-white hover:text-purple-500")
                  }
                >
                  📝 {t("header_register")}
                </NavLink>
              </>
            )}

            {isAuthenticated && (
              <>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "underline-animate py-1 transition-colors duration-300" +
                    (isActive ? " active font-bold text-purple-500" : " text-white hover:text-purple-500")
                  }
                >
                  🏠 {t("header_home")}
                </NavLink>
                <NavLink
                  to="/flashcards"
                  className={({ isActive }) =>
                    "underline-animate py-1 transition-colors duration-300" +
                    (isActive ? " active font-bold text-purple-500" : " text-white hover:text-purple-500")
                  }
                >
                  🃏 {t("header_flashcards")}
                </NavLink>
                <NavLink
                  to="/quizzes"
                  className={({ isActive }) =>
                    "underline-animate py-1 transition-colors duration-300" +
                    (isActive ? " active font-bold text-purple-500" : " text-white hover:text-purple-500")
                  }
                >
                  🎯 {t("header_quizzes")}
                </NavLink>
                <NavLink
                  to="/leaderboard"
                  className={({ isActive }) =>
                    "underline-animate py-1 transition-colors duration-300" +
                    (isActive ? " active font-bold text-purple-500" : " text-white hover:text-purple-500")
                  }
                >
                  🏆 {t("header_leaderboard")}
                </NavLink>
                {user?.role === "ADMIN" && (
                  <>
                    <NavLink
                      to="/admin/dashboard"
                      className={({ isActive }) =>
                        "underline-animate py-1 transition-colors duration-300" +
                        (isActive ? " active font-bold text-purple-500" : " text-white hover:text-purple-500")
                      }
                    >
                      ⚙️ {t("header_admin")}
                    </NavLink>
                    <NavLink
                      to="http://localhost:3000/docs/"
                      target="_blank"
                      className={({ isActive }) =>
                        "underline-animate py-1 transition-colors duration-300" +
                        (isActive ? " active font-bold text-purple-500" : " text-white hover:text-purple-500")
                      }
                    >
                      📖 {t("header_documentation")}
                    </NavLink>
                  </>
                )}
                <button
                  onClick={handleLogout}
                  className="hover:text-red-400 cursor-pointer transition duration-200 active:text-gray-500"
                >
                  🚪 {t("header_logout")}
                </button>
              </>
            )}
          </nav>

          {/* Bouton Menu Hamburger - visible sur mobile et tablette */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 text-white hover:text-purple-400 transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-out ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-current mt-1 transition-all duration-300 ease-out ${isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-current mt-1 transition-all duration-300 ease-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Menu Mobile - affiché quand le hamburger est cliqué */}
        <div className={`lg:hidden mt-4 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-120 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <nav className="flex flex-col space-y-3 py-4 border-t border-white/10">
            {!isAuthenticated && (
              <>
                <NavLink
                  to="/"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    "py-2 px-3 rounded transition-colors duration-300" +
                    (isActive ? " active font-bold text-purple-400 bg-purple-900/20" : " text-white hover:text-purple-400 hover:bg-purple-900/10")
                  }
                >
                  🏠 {t("header_home")}
                </NavLink>
                <NavLink
                  to="/login"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    "py-2 px-3 rounded transition-colors duration-300" +
                    (isActive ? " active font-bold text-purple-400 bg-purple-900/20" : " text-white hover:text-purple-400 hover:bg-purple-900/10")
                  }
                >
                  🔐 {t("header_login")}
                </NavLink>
                <NavLink
                  to="/register"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    "py-2 px-3 rounded transition-colors duration-300" +
                    (isActive ? " active font-bold text-purple-400 bg-purple-900/20" : " text-white hover:text-purple-400 hover:bg-purple-900/10")
                  }
                >
                  📝 {t("header_register")}
                </NavLink>
              </>
            )}

            {isAuthenticated && (
              <>
                <NavLink
                  to="/"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    "py-2 px-3 rounded transition-colors duration-300" +
                    (isActive ? " active font-bold text-purple-400 bg-purple-900/20" : " text-white hover:text-purple-400 hover:bg-purple-900/10")
                  }
                >
                  🏠 {t("header_home")}
                </NavLink>
                <NavLink
                  to="/flashcards"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    "py-2 px-3 rounded transition-colors duration-300" +
                    (isActive ? " active font-bold text-purple-400 bg-purple-900/20" : " text-white hover:text-purple-400 hover:bg-purple-900/10")
                  }
                >
                  🃏 {t("header_flashcards")}
                </NavLink>
                <NavLink
                  to="/quizzes"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    "py-2 px-3 rounded transition-colors duration-300" +
                    (isActive ? " active font-bold text-purple-400 bg-purple-900/20" : " text-white hover:text-purple-400 hover:bg-purple-900/10")
                  }
                >
                  🎯 {t("header_quizzes")}
                </NavLink>
                <NavLink
                  to="/leaderboard"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    "py-2 px-3 rounded transition-colors duration-300" +
                    (isActive ? " active font-bold text-purple-400 bg-purple-900/20" : " text-white hover:text-purple-400 hover:bg-purple-900/10")
                  }
                >
                  🏆 {t("header_leaderboard")}
                </NavLink>
                {user?.role === "ADMIN" && (
                  <>
                    <NavLink
                      to="/admin/dashboard"
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        "py-2 px-3 rounded transition-colors duration-300" +
                        (isActive ? " active font-bold text-purple-400 bg-purple-900/20" : " text-white hover:text-purple-400 hover:bg-purple-900/10")
                      }
                    >
                      ⚙️ {t("header_admin")}
                    </NavLink>
                    <NavLink
                      to="http://localhost:3000/docs/"
                      target="_blank"
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        "py-2 px-3 rounded transition-colors duration-300" +
                        (isActive ? " active font-bold text-purple-400 bg-purple-900/20" : " text-white hover:text-purple-400 hover:bg-purple-900/10")
                      }
                    >
                      📖 {t("header_documentation")}
                    </NavLink>
                  </>
                )}
                <button
                  onClick={() => {
                    handleLogout();
                    closeMobileMenu();
                  }}
                  className="py-2 px-3 rounded text-left text-red-400 hover:text-red-300 hover:bg-red-900/10 transition-colors duration-300"
                >
                  🚪 {t("header_logout")}
                </button>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
