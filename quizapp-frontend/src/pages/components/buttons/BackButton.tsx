import { useNavigate } from "react-router-dom";
import { LogoutBackButton } from "./../buttons";

/**
 * BackButton
 * -----------
 * Bouton de navigation permettant à l'utilisateur de revenir à la page précédente dans l'historique.
 *
 * - Utilise le hook `useNavigate` de React Router pour naviguer d'une page en arrière.
 * - Affiche un bouton stylisé "Retour".
 * - Peut être utilisé sur n'importe quelle page pour offrir une navigation rapide vers la page précédente.
 *
 * Utilisation :
 * <BackButton />
 */

const BackButton = () => {
  const navigate = useNavigate();

  // Retourne un bouton qui, lorsqu'il est cliqué, navigue d'une page en arrière dans l'historique
  return (
    <LogoutBackButton
      onClick={() => navigate(-1)}
      size="md"
      icon="←"
    >
      Retour
    </LogoutBackButton>
  );
};

export default BackButton;
