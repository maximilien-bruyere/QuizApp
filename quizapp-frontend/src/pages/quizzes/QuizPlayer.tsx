import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import LoadingSpinner from "./../components/others/LoadingSpinner";
import Timer from "./../components/others/Timer";
import TimeAlertModal from "./../components/others/TimeAlertModal";
import { useAuthContext } from "../components/contexts/AuthContext";
import { useTimerAlerts } from "../components/hooks/useTimerAlerts";
import { Button } from "./../components/buttons";

// Interfaces représentant les données des options de réponse
interface Option {
  option_id?: number;
  text: string;
  is_correct: boolean;
}

// Interface représentant les données d'une question de type "matching"
interface MatchingPair {
  left: string;
  right: string;
}

// Interface représentant les données que doit contenir une question de quiz
interface Question {
  question_id?: number;
  content: string;
  type: "SINGLE" | "MULTIPLE" | "MATCHING";
  image_url?: string;
  explanation?: string;
  options: Option[];
  pairs?: MatchingPair[];
  points?: number;
}

// Interface pour le quiz
interface Quiz {
  quiz_id: number;
  title: string;
  description?: string;
  difficulty?: 'FACILE' | 'MOYEN' | 'DIFFICILE';
  time_limit?: number;
  is_exam_mode?: boolean;
  questions: Question[];
}

/**
 * Shuffle
 * -------
 * Fonction utilitaire pour mélanger un tableau de manière aléatoire.
 *
 * - Utilise l'algorithme de Fisher-Yates pour mélanger les éléments du tableau.
 * - Retourne un nouveau tableau avec les éléments dans un ordre aléatoire.
 *
 * Utilisation :
 * const shuffledArray = shuffle(originalArray);
 */

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * QuizPlayer
 * -----------
 * Composant principal d'affichage et de gestion d'un quiz interactif.
 *
 * - Récupère et affiche les questions d'un quiz depuis l'API, avec prise en charge des types SINGLE, MULTIPLE et MATCHING.
 * - Permet à l'utilisateur de répondre aux questions, de valider ses réponses et de voir la correction.
 * - Gère la progression, l'affichage du score final et la navigation entre les questions.
 * - Pour les questions de type "matching", propose une interface d'association avec correction visuelle.
 * - Utilise Tailwind CSS pour un affichage moderne et responsive.
 *
 * Utilisation :
 * <QuizPlayer />
 */

const QuizPlayer = () => {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [questionId: number]: number[] }>(
    {}
  );
  const [matchingAnswers, setMatchingAnswers] = useState<{
    [questionId: number]: { [idx: number]: string };
  }>({});
  const [finished, setFinished] = useState(false);
  const [showCorrection, setShowCorrection] = useState(false);
  const [error, setError] = useState("");
  const [rightOptions, setRightOptions] = useState<string[]>([]);
  const { id } = useParams();
  const [timeLeft, setTimeLeft] = useState(600); // Sera mis à jour avec la vraie limite
  const [originalTimeLimit, setOriginalTimeLimit] = useState(600); // Pour garder la limite originale
  const [quizAttemptId, setQuizAttemptId] = useState<number | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const [scoreSaved, setScoreSaved] = useState(false);
  
  // Hook pour les alertes de temps
  const { showAlert, closeAlert } = useTimerAlerts({
    timeLeft,
    isActive: !finished && !showCorrection,
    onTimeUp: () => setFinished(true)
  });
  
  useEffect(() => {
  if (finished) return; // Ne rien faire si le quiz est fini

  if (timeLeft <= 0) {
    setFinished(true);
    setShowCorrection(false);
    return;
  }

  // Pour les quiz non-exam, mettre en pause le timer quand on montre la correction
  const shouldPauseTimer = !quiz?.is_exam_mode && showCorrection;
  
  if (shouldPauseTimer) {
    return; // Ne pas démarrer le timer
  }

  const timer = setInterval(() => {
    setTimeLeft((prev) => prev - 1);
  }, 1000);

  return () => clearInterval(timer);
}, [timeLeft, finished, showCorrection, quiz?.is_exam_mode]);

  // Récupère le quiz depuis l'API au chargement du composant et crée une tentative
  useEffect(() => {
  api.get(`/quizzes/${id}`).then((res) => {
    const quizData = res.data as Quiz;
    
    // Limite les questions selon le mode (30 pour normal, 50 pour examen)
    const maxQuestions = quizData.is_exam_mode ? 50 : 30;
    let questions = (quizData.questions as Question[]).slice(0, maxQuestions);

    // Mélange les options de chaque question
    questions = questions.map(q => ({
      ...q,
      options: q.options ? shuffle(q.options) : [],
    }));

    setQuiz(quizData);
    setShuffledQuestions(shuffle(questions));
    console.log('Quiz loaded:', {
      originalQuestions: quizData.questions.length,
      shuffledQuestions: questions.length,
      questions: questions,
      timeLimit: quizData.time_limit,
      isExamMode: quizData.is_exam_mode,
      maxQuestions
    });
    
    // Utiliser la vraie limite de temps du quiz (en minutes -> secondes)
    // Mode examen : 1h toujours prioritaire
    if (quizData.is_exam_mode) {
      // Mode examen : 1h strictement (prioritaire sur time_limit)
      const examTime = 60 * 60; // 1 heure
      setTimeLeft(examTime);
      setOriginalTimeLimit(examTime);
    } else if (quizData.time_limit && quizData.time_limit > 0) {
      const timeInSeconds = quizData.time_limit * 60;
      setTimeLeft(timeInSeconds);
      setOriginalTimeLimit(timeInSeconds);
    } else {
      // Quiz non-exam sans limite de temps : utiliser 30 minutes par défaut
      const defaultTime = 30 * 60; // 30 minutes par défaut pour les quiz normaux
      setTimeLeft(defaultTime);
      setOriginalTimeLimit(defaultTime);
    }
    
    setCurrentIndex(0);
    setAnswers({});
    setMatchingAnswers({});
    setFinished(false);
    setShowCorrection(false);
    setError("");
    setStartTime(new Date());

    // Créer une tentative de quiz
    if (user) {
      api.post('/quiz-attempt', {
        user_id: user.sub,
        quiz_id: parseInt(id!)
      }).then((attemptRes) => {
        setQuizAttemptId(attemptRes.data.qa_id);
      }).catch((err) => {
        console.error('Erreur lors de la création de la tentative:', err);
      });
    }
  });
}, [id]);

  // Met à jour les options de droite pour les questions de type "MATCHING"
  useEffect(() => {
    if (
      shuffledQuestions.length > 0 &&
      shuffledQuestions[currentIndex]?.type === "MATCHING" &&
      shuffledQuestions[currentIndex]?.pairs
    ) {
      setRightOptions(
        shuffle(shuffledQuestions[currentIndex].pairs.map((p) => p.right))
      );
    }
  }, [currentIndex, shuffledQuestions]);

  // Effet pour sauvegarder le score quand le quiz se termine
  useEffect(() => {
    console.log('Save score effect triggered:', {
      finished,
      scoreSaved,
      quizAttemptId,
      startTime: !!startTime,
      questionsLength: shuffledQuestions.length
    });
    
    if (finished && !scoreSaved && quizAttemptId && startTime && shuffledQuestions.length > 0) {
      let score = 0;
      shuffledQuestions.forEach((q: Question) => {
        if (q.type === "MATCHING") {
          const userMatching = matchingAnswers[q.question_id!] || {};
          if (
            q.pairs &&
            q.pairs.every((pair, idx) => userMatching[idx] === pair.right)
          ) {
            score++;
          }
        } else {
          const correctIds = q.options
            .filter((o) => o.is_correct)
            .map((o) => o.option_id)
            .sort();
          const userIds = (answers[q.question_id!] || []).sort();
          if (JSON.stringify(correctIds) === JSON.stringify(userIds)) score++;
        }
      });

      const timeSpent = Math.floor((new Date().getTime() - startTime.getTime()) / 1000);
      
      setScoreSaved(true); // Marquer comme sauvegardé pour éviter les doublons
      
      api.patch(`/quiz-attempt/${quizAttemptId}/complete`, {
        score: score,
        total_questions: shuffledQuestions.length,
        time_spent: timeSpent
      }).then(() => {
        console.log('Score sauvegardé avec succès');
        setTimeout(() => {
          navigate(`/quiz-result/${quizAttemptId}?score=${score}`);
        }, 500); // Petit délai pour s'assurer que la sauvegarde est complète
      }).catch((err) => {
        console.error('Erreur lors de la sauvegarde du score:', err);
        setTimeout(() => {
          navigate(`/quiz-result/${quizAttemptId}?score=${score}`);
        }, 500);
      });
    }
  }, [finished, scoreSaved, quizAttemptId, startTime, shuffledQuestions]);

  // Si le quiz n'est pas chargé ou s'il n'y a pas de questions, affiche un spinner de chargement
  if (!quiz || shuffledQuestions.length === 0) return <LoadingSpinner />;

  const currentQuestion = shuffledQuestions[currentIndex];

  // Si le quiz est terminé, affiche un écran de chargement pendant la sauvegarde
  if (finished) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
        <div className="text-center">
          <LoadingSpinner />
          <p className="mt-4 text-lg">Sauvegarde de votre score...</p>
        </div>
      </div>
    );
  }

  // Fonction pour vérifier si la réponse actuelle est correcte
  const isCurrentAnswerCorrect = () => {
    if (currentQuestion.type === "MATCHING") {
      if (!currentQuestion.pairs) return false;
      return currentQuestion.pairs.every(
        (pair, idx) => userMatching[idx] === pair.right
      );
    } else {
      const correctIds = currentQuestion.options
        .filter((o) => o.is_correct)
        .map((o) => o.option_id)
        .sort();
      const userIds = (answers[currentQuestion.question_id!] || []).sort();
      return JSON.stringify(correctIds) === JSON.stringify(userIds);
    }
  };

  const isMultiple = currentQuestion.type === "MULTIPLE";
  const userAnswer = answers[currentQuestion.question_id!] || [];
  const userMatching = matchingAnswers[currentQuestion.question_id!] || {};

  // Si les questions sont de type "MATCHING", on affiche deux colonnes
  // avec les options de gauche et de droite pour faire des associations
  if (currentQuestion.type === "MATCHING") {
    // Fonction pour gérer la sélection d'une association
    const handleSelect = (idx: number, right: string) => {
      setMatchingAnswers((prev) => ({
        ...prev,
        [currentQuestion.question_id!]: {
          ...userMatching,
          [idx]: right,
        },
      }));
    };

    // Fonction pour valider les associations
    const handleValidateMatching = () => {
      if (
        !currentQuestion.pairs ||
        Object.keys(userMatching).length !== currentQuestion.pairs.length
      ) {
        setError("Veuillez faire toutes les associations.");
        return;
      }
      setError("");
      
      // En mode examen, passer directement à la question suivante sans afficher la correction
      if (quiz?.is_exam_mode) {
        handleNextMatching();
      } else {
        setShowCorrection(true);
      }
    };

    // Fonction pour passer à la question suivante
    const handleNextMatching = () => {
      console.log('handleNextMatching called', {
        currentIndex,
        totalQuestions: shuffledQuestions.length,
        isLastQuestion: currentIndex + 1 >= shuffledQuestions.length
      });
      
      if (currentIndex + 1 >= shuffledQuestions.length) {
        console.log('Setting finished to true');
        setFinished(true);
        return;
      }
      setCurrentIndex(currentIndex + 1);
      setShowCorrection(false);
      setError("");
    };

    const progressPercent =
      ((currentIndex + 1) / shuffledQuestions.length) * 100;

    // Retourne l'affichage pour les questions de type "MATCHING"
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-4xl">
          {/* En-tête avec titre et timer */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-6 gap-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-500">
              {quiz.title}
            </h2>
            <Timer 
              timeLeft={timeLeft} 
              totalTime={originalTimeLimit} 
              isActive={!finished && (!showCorrection || Boolean(quiz.is_exam_mode))} 
            />
          </div>
          <div className="relative overflow-hidden mb-4 sm:mb-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg shadow-purple-500/10">
            <div className="relative z-10 mb-3 sm:mb-4 font-semibold text-sm sm:text-base lg:text-lg">
              {currentQuestion.content}
            </div>
            <div className="relative z-10 overflow-x-auto">
              <div className="w-full">
                <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
                  {/* Affichage des paires de gauche et droite pour les questions de type "MATCHING" */}
                  {currentQuestion.pairs?.map((pair, idx) => {
                    const selectedRights = Object.entries(userMatching)
                      .filter(([left]) => left !== pair.left)
                      .map(([, right]) => right);

                    // Vérifie si l'association de l'utilisateur est correcte
                    const isCorrect = userMatching[idx] === pair.right;

                    // Affiche l'état de la correction si l'utilisateur a fait une association
                    const showState = showCorrection && userMatching[idx];

                    // Retourne l'affichage pour chaque paire de gauche et droite
                    return (
                      <div
                        key={idx}
                        className={`flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg shadow p-3 sm:p-4 transition-all border ${
                          // Vérifie si la correction doit être affichée ou non
                          showCorrection
                            ? isCorrect
                              ? "border-green-500 bg-green-900/30"
                              : "border-red-500 bg-red-900/30"
                            : "border-gray-700 bg-gray-900/40"
                        }`}
                      >
                        <div className="flex-1 text-left font-semibold text-purple-200 text-sm sm:text-base break-words mb-2 sm:mb-0 sm:pr-4 w-full sm:w-auto">
                          {pair.left}
                        </div>
                        <div className="flex-1 w-full sm:w-auto flex items-center justify-start sm:justify-end gap-2">
                          {/* Sélecteur pour choisir l'association de droite */}
                          <select
                            className="p-2 sm:p-3 rounded bg-gray-700 text-white border border-purple-700 outline-none transition w-full sm:w-48 lg:w-56 hover:cursor-pointer text-sm sm:text-base"
                            value={userMatching[idx] || ""}
                            onChange={(e) => handleSelect(idx, e.target.value)}
                            disabled={showCorrection}
                          >
                            <option value="">Choisir...</option>
                            {rightOptions
                              .filter(
                                (right) =>
                                  !selectedRights.includes(right) ||
                                  userMatching[idx] === right
                              )
                              .map((right, i) => (
                                <option key={i} value={right}>
                                  {right}
                                </option>
                              ))}
                          </select>

                          {/* Affiche l'état de la correction si l'utilisateur a fait une association */}
                          {showState && (
                            <span
                              className={`ml-1 sm:ml-2 text-lg sm:text-xl font-bold flex items-center gap-1 ${
                                isCorrect ? "text-green-400" : "text-red-400"
                              }`}
                            >
                              {isCorrect ? (
                                <>
                                  <span className="text-sm w-10">OK</span>
                                </>
                              ) : (
                                <>
                                  <span className="text-sm w-10">NON</span>
                                </>
                              )}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* Affiche un message d'erreur si nécessaire */}
            {error && (
              <div className="text-red-500 font-semibold mt-2">{error}</div>
            )}

            {showCorrection && (
              <div className="text-sm text-purple-300 mb-2">
                Points pour cette question :{" "}
                <span className="font-bold">{currentQuestion.points ?? 1}</span>
              </div>
            )}

            {/* Affiche les réponses correctes si la correction est demandée */}
            {showCorrection && currentQuestion.type === "MATCHING" && (
              <div className="mt-4 rounded text-purple-200">
                <span className="font-semibold text-purple-400 mb-6">
                  Réponses :
                </span>
                <br />
                {currentQuestion.pairs?.map((pair, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 mt-2 p-4 justify-between rounded border border-purple-500 bg-purple-900/30 "
                  >
                    <span className="font-semibold text-white break-words w-48">
                      {pair.left}
                    </span>
                    <span className="font-semibold mx-2 text-purple-200">
                      →
                    </span>
                    <span className="font-semibold text-white w-48 break-words">
                      {pair.right}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Affichage des boutons pour valider ou passer à la question suivante */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            {!showCorrection ? (
              <Button
                onClick={handleValidateMatching}
                variant="primary"
                className="w-full sm:w-auto"
              >
                Valider ma réponse
              </Button>
            ) : (
              <Button
                onClick={handleNextMatching}
                variant="modification"
                className="w-full sm:w-auto"
              >
                {currentIndex + 1 >= shuffledQuestions.length ? "Terminer le quiz" : "Question suivante"}
              </Button>
            )}
          </div>

          {/* Affiche le numéro de la question actuelle */}
          <div className="text-center text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
            Question {currentIndex + 1} / {shuffledQuestions.length}
          </div>

          {/* Barre de progression responsive */}
          <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3 mb-4 sm:mb-6">
            <div
              className="bg-purple-500 h-2 sm:h-3 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          
          {/* Modal d'alerte pour le temps */}
          <TimeAlertModal 
            show={showAlert} 
            timeLeft={timeLeft} 
            onClose={closeAlert} 
          />
        </div>
      </div>
    );
  }

  // Fonction pour gérer la sélection d'une réponse
  const handleAnswer = (optionId: number) => {
    if (isMultiple) {
      setAnswers((prev) => {
        const prevArr = prev[currentQuestion.question_id!] || [];
        if (prevArr.includes(optionId)) {
          return {
            ...prev,
            [currentQuestion.question_id!]: prevArr.filter(
              (id) => id !== optionId
            ),
          };
        } else {
          return {
            ...prev,
            [currentQuestion.question_id!]: [...prevArr, optionId],
          };
        }
      });
    } else {
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.question_id!]: [optionId],
      }));
    }
  };

  // Fonction pour valider la réponse de l'utilisateur
  const handleValidate = () => {
    if (
      (isMultiple &&
        (answers[currentQuestion.question_id!] || []).length === 0) ||
      (!isMultiple &&
        !(
          answers[currentQuestion.question_id!] &&
          answers[currentQuestion.question_id!][0]
        ))
    ) {
      setError("Veuillez sélectionner une réponse.");
      return;
    }
    setError("");
    
    // En mode examen, passer directement à la question suivante sans afficher la correction
    if (quiz?.is_exam_mode) {
      handleNext();
    } else {
      setShowCorrection(true);
    }
  };

  // Fonction pour passer à la question suivante
  const handleNext = () => {
    console.log('handleNext called', {
      currentIndex,
      totalQuestions: shuffledQuestions.length,
      isLastQuestion: currentIndex + 1 >= shuffledQuestions.length
    });
    
    if (currentIndex + 1 >= shuffledQuestions.length) {
      console.log('Setting finished to true');
      setFinished(true);
      return;
    }
    setCurrentIndex(currentIndex + 1);
    setShowCorrection(false);
    setError("");
  };

  const progressPercent = ((currentIndex + 1) / shuffledQuestions.length) * 100;

  // Retourne l'affichage de la question de type "SINGLE" ou "MULTIPLE"
  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex justify-center items-start px-4">
      {/* Bloc principal, toujours centré */}
      <div className="max-w-2xl w-full p-6 mx-auto">
        {/* En-tête avec titre et timer */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
          <h2 className="text-xl sm:text-2xl font-bold text-purple-500">
            {quiz.title}
          </h2>
          <Timer 
            timeLeft={timeLeft} 
            totalTime={originalTimeLimit} 
            isActive={!finished && (!showCorrection || Boolean(quiz.is_exam_mode))} 
          />
        </div>
        <div className="relative overflow-hidden mb-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-4 shadow-lg shadow-purple-500/10">
          <div className="mb-6 font-semibold">{currentQuestion.content}</div>
          {/* Affiche l'image associée à la question si elle existe */}
          {currentQuestion.image_url && (
            <img
              src={`http://localhost:3000${currentQuestion.image_url}`}
              alt={"Illustration de la question " + currentQuestion.question_id}
              className="mb-4 max-w-md rounded"
            />
          )}
          <div className="flex flex-col gap-3 mb-6">
            {/* Affiche les options de réponse pour les questions de type "SINGLE" ou "MULTIPLE" */}
            {/* + les corrections si l'utilisateur a validé sa réponse */}
            {currentQuestion.options.map((opt) => (
              <button
                key={opt.option_id}
                className={`text-left p-3 rounded border hover:cursor-pointer transition-all duration-200 flex items-center justify-between
              ${
                showCorrection
                  ? opt.is_correct
                    ? "bg-green-900 border-green-700"
                    : userAnswer.includes(opt.option_id!)
                    ? "bg-red-900 border-red-700"
                    : "bg-gray-600 border-gray-700"
                  : userAnswer.includes(opt.option_id!)
                  ? "bg-purple-900 border-purple-700"
                  : "bg-gray-600 border-gray-700 hover:bg-gray-700"
              }
            `}
                disabled={showCorrection}
                onClick={() => handleAnswer(opt.option_id!)}
              >
                <span>{opt.text}</span>
                {showCorrection && currentQuestion.type === "MULTIPLE" && (
                  <span
                    className={`ml-4 min-w-[80px] text-center py-1 px-2 rounded text-xs font-bold shadow
                    ${
                      userAnswer.includes(opt.option_id!)
                        ? "bg-gray-300 text-gray-700"
                        : "bg-gray-300 text-gray-700"
                    }
                  `}
                  >
                    {userAnswer.includes(opt.option_id!)
                      ? "Coché"
                      : "Non coché"}
                  </span>
                )}
              </button>
            ))}
          </div>
          {/* Affichage de l'erreur */}
          {error && <div className="text-red-500 mb-2">{error}</div>}
          {showCorrection && (
            <div className="text-sm text-purple-300 mb-2 font-bold">
              Points pour cette question :{" "}
              <span>
                {isCurrentAnswerCorrect() ? 1 : 0}/1
              </span>
            </div>
          )}
        </div>
        {/* Affiche les boutons de validation ou de passage à la question suivante */}
        {!showCorrection ? (
          <Button
            onClick={handleValidate}
            variant="primary"
          >
            {quiz?.is_exam_mode ? "Question suivante" : "Valider ma réponse"}
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            variant="modification"
          >
            {currentIndex + 1 >= shuffledQuestions.length ? "Terminer le quiz" : "Question suivante"}
          </Button>
        )}
        {/* Affiche le numéro de la question actuelle */}
        <div className="mt-4 text-sm text-gray-400">
          Question {currentIndex + 1} / {shuffledQuestions.length}
        </div>

        <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
          <div
            className="bg-purple-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>
      {/* Explication positionnée absolument à droite du bloc principal */}
      {showCorrection && currentQuestion.explanation && (
        <aside className="hidden lg:block absolute top-0 left-1/2 translate-x-[calc(100%+2rem)] w-80 max-w-xs bg-purple-900 border-l-4 border-purple-700 rounded-xl shadow-lg p-6 mt-6 translate-y-14">
          <h3 className="text-lg font-bold text-purple-200 mb-2">
            Explication
          </h3>
          <div className="text-purple-100 whitespace-pre-line text-justify">
            {currentQuestion.explanation}
          </div>
        </aside>
      )}
      
      {/* Modal d'alerte pour le temps */}
      <TimeAlertModal 
        show={showAlert} 
        timeLeft={timeLeft} 
        onClose={closeAlert} 
      />
    </div>
  );
};

export default QuizPlayer;


