/**
 * LoadingSpinner
 * ---------------
 * Composant d'affichage d'un indicateur de chargement animé.
 *
 * - Affiche trois points animés pour indiquer un chargement en cours.
 * - Utilise Tailwind CSS pour le style et l'animation.
 * - Centré verticalement et horizontalement sur la page.
 *
 * Utilisation :
 * <LoadingSpinner />
 */

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="flex max-w-xl w-full p-6 justify-center rounded -translate-y-10">
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
        <div className="w-4 h-4 rounded-full bg-purple-700 animate-bounce [animation-delay:.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
