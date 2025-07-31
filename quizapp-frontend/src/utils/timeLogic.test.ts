/**
 * Tests pour vérifier la priorisation du temps d'examen
 */

import { 
  calculateQuizTime, 
  calculateQuizTimeForDisplay, 
  formatTimeLimit,
  QuizTimeConfig 
} from '../utils/timeLogic';

// Test de la logique de calcul du temps
console.log('=== Tests de la logique de temps d\'examen ===');

// Test 1: Mode examen sans time_limit
const config1: QuizTimeConfig = {
  is_exam_mode: true
};
console.log('Test 1 - Mode examen sans time_limit:');
console.log('- Temps en secondes:', calculateQuizTime(config1), '(attendu: 3600)');
console.log('- Temps d\'affichage:', calculateQuizTimeForDisplay(config1), '(attendu: 60)');
console.log('- Formaté:', formatTimeLimit(calculateQuizTimeForDisplay(config1)), '(attendu: 1h)');
console.log('');

// Test 2: Mode examen avec time_limit défini (doit être ignoré)
const config2: QuizTimeConfig = {
  is_exam_mode: true,
  time_limit: 30 // 30 minutes - doit être ignoré
};
console.log('Test 2 - Mode examen avec time_limit=30min (doit être ignoré):');
console.log('- Temps en secondes:', calculateQuizTime(config2), '(attendu: 3600)');
console.log('- Temps d\'affichage:', calculateQuizTimeForDisplay(config2), '(attendu: 60)');
console.log('- Formaté:', formatTimeLimit(calculateQuizTimeForDisplay(config2)), '(attendu: 1h)');
console.log('');

// Test 3: Mode examen avec time_limit supérieur (doit être ignoré)
const config3: QuizTimeConfig = {
  is_exam_mode: true,
  time_limit: 120 // 2 heures - doit être ignoré
};
console.log('Test 3 - Mode examen avec time_limit=2h (doit être ignoré):');
console.log('- Temps en secondes:', calculateQuizTime(config3), '(attendu: 3600)');
console.log('- Temps d\'affichage:', calculateQuizTimeForDisplay(config3), '(attendu: 60)');
console.log('- Formaté:', formatTimeLimit(calculateQuizTimeForDisplay(config3)), '(attendu: 1h)');
console.log('');

// Test 4: Mode normal avec time_limit
const config4: QuizTimeConfig = {
  is_exam_mode: false,
  time_limit: 45
};
console.log('Test 4 - Mode normal avec time_limit=45min:');
console.log('- Temps en secondes:', calculateQuizTime(config4), '(attendu: 2700)');
console.log('- Temps d\'affichage:', calculateQuizTimeForDisplay(config4), '(attendu: 45)');
console.log('- Formaté:', formatTimeLimit(calculateQuizTimeForDisplay(config4)), '(attendu: 45min)');
console.log('');

// Test 5: Mode normal sans time_limit
const config5: QuizTimeConfig = {
  is_exam_mode: false
};
console.log('Test 5 - Mode normal sans time_limit:');
console.log('- Temps en secondes:', calculateQuizTime(config5), '(attendu: 86400)');
console.log('- Temps d\'affichage:', calculateQuizTimeForDisplay(config5), '(attendu: null)');
console.log('- Formaté:', formatTimeLimit(calculateQuizTimeForDisplay(config5)), '(attendu: Pas de limite)');
console.log('');

// Test 6: Mode normal avec time_limit=0
const config6: QuizTimeConfig = {
  is_exam_mode: false,
  time_limit: 0
};
console.log('Test 6 - Mode normal avec time_limit=0:');
console.log('- Temps en secondes:', calculateQuizTime(config6), '(attendu: 86400)');
console.log('- Temps d\'affichage:', calculateQuizTimeForDisplay(config6), '(attendu: null)');
console.log('- Formaté:', formatTimeLimit(calculateQuizTimeForDisplay(config6)), '(attendu: Pas de limite)');
console.log('');

// Test de validation
console.log('=== Validation des tests ===');
let allTestsPassed = true;

// Vérifications
if (calculateQuizTime(config1) !== 3600) {
  console.error('❌ Test 1 échoué: Mode examen doit donner 3600 secondes');
  allTestsPassed = false;
}

if (calculateQuizTime(config2) !== 3600) {
  console.error('❌ Test 2 échoué: Mode examen doit ignorer time_limit');
  allTestsPassed = false;
}

if (calculateQuizTime(config3) !== 3600) {
  console.error('❌ Test 3 échoué: Mode examen doit ignorer time_limit même supérieur');
  allTestsPassed = false;
}

if (calculateQuizTime(config4) !== 2700) {
  console.error('❌ Test 4 échoué: Mode normal doit utiliser time_limit');
  allTestsPassed = false;
}

if (calculateQuizTime(config5) !== 86400) {
  console.error('❌ Test 5 échoué: Mode normal sans limite doit donner 86400 secondes');
  allTestsPassed = false;
}

if (calculateQuizTimeForDisplay(config1) !== 60) {
  console.error('❌ Test affichage 1 échoué: Mode examen doit donner 60 minutes');
  allTestsPassed = false;
}

if (calculateQuizTimeForDisplay(config2) !== 60) {
  console.error('❌ Test affichage 2 échoué: Mode examen doit ignorer time_limit');
  allTestsPassed = false;
}

if (allTestsPassed) {
  console.log('✅ Tous les tests sont passés !');
  console.log('✅ La priorité du temps d\'examen est correctement implémentée');
} else {
  console.log('❌ Certains tests ont échoué');
}
