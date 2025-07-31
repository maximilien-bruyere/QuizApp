/**
 * EXEMPLES D'UTILISATION DES BOUTONS HARMONISÉS
 * =============================================
 * 
 * Ce fichier montre comment utiliser les boutons avec le nouveau système de couleurs harmonisé.
 */

import { Button, LogoutBackButton, ModificationButton, CreateButton, EditButton, DangerButton } from './index';

export default function ButtonExamples() {
  return (
    <div className="p-8 space-y-8 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold text-center mb-8">Exemples de Boutons Harmonisés</h1>
      
      {/* Section Rouge - Déconnexion/Retour */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-red-400">🔴 Boutons Rouges - Déconnexion/Retour</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="danger">Supprimer</Button>
          <Button variant="logout">Se déconnecter</Button>
          <Button variant="back">Retour</Button>
          <LogoutBackButton>Retour à l'accueil</LogoutBackButton>
          <DangerButton>Supprimer définitivement</DangerButton>
        </div>
      </div>

      {/* Section Bleue - Création/Connexion */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-400">🔵 Boutons Bleus - Création/Connexion</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Se connecter</Button>
          <Button variant="primary" leftIcon="✨">Créer un compte</Button>
          <CreateButton icon="+">Nouveau quiz</CreateButton>
          <CreateButton icon="📝">Créer théorie</CreateButton>
          <Button variant="primary">Commencer le quiz</Button>
        </div>
      </div>

      {/* Section Mauve - Modification */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-purple-400">🟣 Boutons Mauves - Modification</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="modification">Modifier</Button>
          <Button variant="modification" leftIcon="💾">Enregistrer</Button>
          <ModificationButton icon="✏️">Éditer</ModificationButton>
          <EditButton icon="🔧">Modifier paramètres</EditButton>
          <Button variant="modification">S'enregistrer</Button>
        </div>
      </div>

      {/* Section Grise - Actions secondaires */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-400">⚫ Boutons Gris - Actions Secondaires</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="secondary">Annuler</Button>
          <Button variant="ghost">Voir détails</Button>
          <Button variant="secondary" leftIcon="👁️">Prévisualiser</Button>
          <Button variant="secondary">Navigation</Button>
          <Button variant="ghost">Action secondaire</Button>
        </div>
      </div>

      {/* Exemples de tailles */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-300">📏 Tailles disponibles</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary" size="sm">Petit</Button>
          <Button variant="primary" size="md">Moyen</Button>
          <Button variant="primary" size="lg">Grand</Button>
        </div>
      </div>

      {/* Exemples avec icônes */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-300">🎨 Avec icônes</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" leftIcon="🚀">Lancer</Button>
          <Button variant="modification" rightIcon="💾">Sauvegarder</Button>
          <Button variant="danger" leftIcon="🗑️">Supprimer</Button>
          <Button variant="secondary" leftIcon="👁️" rightIcon="→">Voir plus</Button>
        </div>
      </div>

      {/* Boutons pleine largeur */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-300">↔️ Pleine largeur</h2>
        <div className="space-y-2">
          <Button variant="primary" fullWidth>Bouton pleine largeur</Button>
          <Button variant="modification" fullWidth leftIcon="💾">Enregistrer les modifications</Button>
        </div>
      </div>
    </div>
  );
}
