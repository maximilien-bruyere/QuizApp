import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

/**
 * Footer
 * -------
 * Composant d'affichage du pied de page de l'application.
 *
 * - Affiche le copyright dynamique avec l'année en cours.
 * - Propose des liens rapides vers les pages principales : conditions d'utilisation, accueil, connexion.
 * - Utilise un style responsive et moderne avec Tailwind CSS.
 *
 * Utilisation :
 * <Footer />
 */

const Footer = () => {
  const { t } = useTranslation();

  // Retourne le pied de page avec les conditions d'utilisation, l'accueil et la connexion
  return (
    <footer className="bg-[#0f172a] text-gray-400 py-6 mt-auto border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left text-sm">
          © {new Date().getFullYear()} {t("footer_copyright")}
        </div>

        <div className="flex gap-6 text-sm">
          <NavLink
            to="/terms"
            className="hover:text-white transition active:text-purple-500"
          >
            {t("footer_conditions")}
          </NavLink>
          <NavLink
            to="/"
            className="hover:text-white transition active:text-purple-500"
          >
            {t("footer_home")}
          </NavLink>
          <NavLink
            to="/login"
            className="hover:text-white transition active:text-purple-500"
          >
            {t("footer_connexion")}
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
