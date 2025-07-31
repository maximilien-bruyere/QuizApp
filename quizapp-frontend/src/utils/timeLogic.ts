/**
 * Logique pour calculer le temps d'un quiz selon le mode et les paramètres
 */

export interface QuizTimeConfig {
  time_limit?: number;
  is_exam_mode?: boolean;
}

/**
 * Calcule le temps effectif d'un quiz en secondes
 * En mode examen : toujours 1h (3600 secondes) - priorité absolue
 * En mode normal : time_limit si défini, sinon 30 minutes par défaut
 */
export function calculateQuizTime(config: QuizTimeConfig): number {
  if (config.is_exam_mode) {
    // Mode examen : 1h strictement (prioritaire sur time_limit)
    return 60 * 60; // 1 heure en secondes
  } else if (config.time_limit && config.time_limit > 0) {
    // Mode normal avec limite de temps
    return config.time_limit * 60; // conversion minutes → secondes
  } else {
    // Quiz non-exam sans limite de temps : utiliser 30 minutes par défaut
    return 30 * 60; // 30 minutes par défaut
  }
}

/**
 * Calcule le temps effectif d'un quiz en minutes pour affichage
 * En mode examen : toujours 60 minutes - priorité absolue
 * En mode normal : time_limit si défini, sinon null
 */
export function calculateQuizTimeForDisplay(config: QuizTimeConfig): number | null {
  if (config.is_exam_mode) {
    // Mode examen : 60 minutes strictement (prioritaire sur time_limit)
    return 60;
  } else if (config.time_limit && config.time_limit > 0) {
    // Mode normal avec limite de temps
    return config.time_limit;
  } else {
    // Pas de limite de temps
    return null;
  }
}

/**
 * Formate le temps en minutes pour l'affichage
 */
export function formatTimeLimit(minutes: number | null): string {
  if (!minutes || minutes <= 0) return 'Pas de limite';
  if (minutes < 60) return `${minutes}min`;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return remainingMinutes > 0 ? `${hours}h${remainingMinutes}min` : `${hours}h`;
}
