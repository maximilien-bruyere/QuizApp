import { Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../components/contexts/AuthContext";
import { LogoutBackButton, Button } from "../components/buttons";
import { useTranslation } from "react-i18next";

/**
 * AlreadyLoggedInRoute
 * ---------------------
 * Routeur de protection pour les pages accessibles uniquement aux utilisateurs non connectés.
 *
 * - Si l'utilisateur n'est pas authentifié, il accède normalement à la route enfant via <Outlet />.
 * - Si l'utilisateur est déjà connecté, une interface lui propose de se déconnecter ou d'aller à l'accueil.
 * - Permet d'éviter que les utilisateurs connectés accèdent aux pages de connexion ou d'inscription.
 *
 * Utilisation :
 * <Route element={<AlreadyLoggedInRoute />}>
 *   <Route path="/login" element={<Login />} />
 *   <Route path="/register" element={<Register />} />
 * </Route>
 */

const AlreadyLoggedInRoute = () => {
  const { t } = useTranslation();
  const { isAuthenticated, logout } = useAuthContext();
  const navigate = useNavigate();

  // Si l'utilisateur n'est pas authentifié, on affiche la route enfant.
  if (!isAuthenticated) {
    return <Outlet />;
  }

  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    logout();
    navigate("/logout-success", { replace: true });
  };

  // Fonction pour rediriger vers la page d'accueil
  const goHome = () => {
    navigate("/");
  };

  // Retourne l'interface pour les utilisateurs déjà connectés
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="relative overflow-hidden p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 shadow-lg shadow-purple-500/10 rounded-2xl w-full max-w-md text-center">
        {/* Decorative curved element */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full"></div>
        
        <div className="relative">
          <h1 className="text-3xl font-bold text-blue-400 font-medium mb-6">
            {t("already_logged_message_1")} {" "}
            <span className="font-bold underline-offset-5 underline">
              {t("already_logged_message_2")}
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">{t("already_logged_question")}</p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <LogoutBackButton
              onClick={handleLogout}
            >
              {t("already_logged_button_logout")}
            </LogoutBackButton>

            <Button
              onClick={goHome}
              variant="modification"
            >
              {t("already_logged_button_home")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlreadyLoggedInRoute;
