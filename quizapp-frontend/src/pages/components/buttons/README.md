/**
 * HARMONISATION DES COULEURS DES BOUTONS
 * =====================================
 * 
 * Ce fichier documente le système de couleurs harmonisé pour tous les boutons de l'application.
 * 
 * SCHÉMA DE COULEURS :
 * 
 * 🔴 ROUGE (variant="danger", "logout", "back")
 * - Utilisé pour : boutons de déconnexion, retour à la page précédente, suppression
 * - Composants : LogoutBackButton, BackButton, DangerButton
 * - Exemples : "Se déconnecter", "Retour", "Supprimer"
 * 
 * 🔵 BLEU (variant="primary")
 * - Utilisé pour : boutons de création, connexion, actions principales
 * - Composants : CreateButton, Button (primary)
 * - Exemples : "Créer", "Se connecter", "Commencer le quiz"
 * 
 * 🟣 MAUVE (variant="modification")
 * - Utilisé pour : boutons de modification, enregistrement, édition
 * - Composants : ModificationButton, EditButton, Button (modification)
 * - Exemples : "Modifier", "Enregistrer", "Sauvegarder"
 * 
 * ⚫ GRIS (variant="secondary", "ghost")
 * - Utilisé pour : boutons d'actions secondaires, navigation, UI
 * - Composants : Button (secondary/ghost), CardActionButton (autres)
 * - Exemples : boutons de navigation, onglets, actions secondaires
 * 
 * COMPOSANTS DISPONIBLES :
 * - Button : composant principal avec tous les variants
 * - LogoutBackButton : spécialisé pour déconnexion/retour (rouge)
 * - ModificationButton : spécialisé pour modification (mauve)
 * - CreateButton : pour création (bleu)
 * - EditButton : pour édition (mauve)
 * - DangerButton : pour suppression (rouge)
 * - CardActionButton : pour actions dans les cartes
 * 
 * UTILISATION :
 * import { Button, LogoutBackButton, ModificationButton } from "../components/buttons";
 * 
 * <Button variant="primary">Créer</Button>
 * <Button variant="modification">Modifier</Button>
 * <Button variant="danger">Supprimer</Button>
 * <Button variant="back">Retour</Button>
 * <Button variant="secondary">Action secondaire</Button>
 */
