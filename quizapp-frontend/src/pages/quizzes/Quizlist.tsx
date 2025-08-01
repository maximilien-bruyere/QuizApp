import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/api";
import { Button } from "./../components/buttons";
import { useTranslation } from "react-i18next";
interface Quiz {
  quiz_id: number;
  title: string;
  description: string;
  difficulty: "FACILE" | "MOYEN" | "DIFFICILE";
  time_limit: number;
  questions_count: number;
  is_exam_mode?: boolean;
  subject: {
    subject_id: number;
    name: string;
  };
  category: {
    category_id: number;
    name: string;
  };
  created_at: string;
  updated_at: string;
}

interface Subject {
  subject_id: number;
  name: string;
}

interface Category {
  category_id: number;
  name: string;
  subject_id: number;
}

interface QuizListProps {
  title?: string;
  showFilters?: boolean;
  limit?: number;
  subjectId?: number;
  categoryId?: number;
}

const QuizList: React.FC<QuizListProps> = ({
  showFilters = true,
  limit,
  subjectId,
  categoryId,
}) => {
  const { t } = useTranslation();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubject, setSelectedSubject] = useState<number | string>(
    subjectId || ""
  );
  const [selectedCategory, setSelectedCategory] = useState<number | string>(
    categoryId || ""
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<
    "created_at" | "title" | "difficulty" | "category"
  >("created_at");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [groupByCategory, setGroupByCategory] = useState(false);
  const [questionsCount, setQuestionsCount] = useState<{
    [key: number]: number;
  }>({});

  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  const getDifficultyLabel = (difficulty: string) => {
  switch (difficulty?.toUpperCase()) {
    case "FACILE":
      return t("quizlist_difficulty_easy");
    case "MOYEN":
      return t("quizlist_difficulty_medium");
    case "DIFFICILE":
      return t("quizlist_difficulty_hard");
    default:
      return t("quizlist_difficulty_unknown");
  }
};

  const loadQuizzes = async (showLoading = true) => {
    if (showLoading) {
      setLoading(true);
    }
    try {
      let url = "/quizzes";
      const params = new URLSearchParams();

      if (selectedSubject && selectedSubject !== "")
        params.append("subject_id", selectedSubject.toString());
      if (selectedCategory && selectedCategory !== "")
        params.append("category_id", selectedCategory.toString());
      if (limit) params.append("limit", limit.toString());

      if (params.toString()) {
        url += "?" + params.toString();
      }
      const response = await api.get(url);
      setQuizzes(response.data);

      loadQuestionsCount(response.data);
    } catch (error) {
      console.error(t("quizlist_error_loading"), error);
      setQuizzes([]);
    } finally {
      if (showLoading) {
        setLoading(false);
      }
    }
  };

  const loadQuestionsCount = async (quizList: Quiz[]) => {
    for (const quiz of quizList) {
      try {
        const response = await api.get(`/quizzes/${quiz.quiz_id}`);
        if (response.data && response.data.questions) {
          setQuestionsCount((prev) => ({
            ...prev,
            [quiz.quiz_id]: response.data.questions.length,
          }));
        }
      } catch (error) {
        console.error(
          t("quizlist_error_details_loading", { quizId: quiz.quiz_id }),
          error
        );
        setQuestionsCount((prev) => ({
          ...prev,
          [quiz.quiz_id]: quiz.questions_count || 0,
        }));
      }
    }
  };

  useEffect(() => {
    const initializeData = async () => {
      try {
        const [subjectsRes] = await Promise.all([api.get("/subjects")]);
        setSubjects(subjectsRes.data);
      } catch (error) {
        console.error(t("quizlist_error_loading"), error);
      }

      await loadQuizzes();
    };

    initializeData();
  }, []);

  useEffect(() => {
    if (subjects.length > 0) {
      loadQuizzes(false);
    }
  }, [selectedSubject, selectedCategory, subjects.length]);

  useEffect(() => {
    if (
      selectedSubject &&
      selectedSubject !== "" &&
      selectedSubject !== "all"
    ) {
      loadCategories(Number(selectedSubject));
    } else {
      setCategories([]);
      setSelectedCategory("");
    }
  }, [selectedSubject]);

  const loadCategories = async (subjectId: number) => {
    try {
      const response = await api.get(`/categories/subject/${subjectId}`);
      setCategories(response.data);
      if (selectedCategory && selectedCategory !== "") {
        const categoryExists = response.data.some(
          (cat: Category) =>
            cat.category_id.toString() === selectedCategory.toString()
        );
        if (!categoryExists) {
          setSelectedCategory("");
        }
      }
    } catch (error) {
      console.error(t("quizlist_error_categories_loading"), error);
      setCategories([]);
      setSelectedCategory("");
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    if (!difficulty) return "bg-gray-700/20 text-gray-400 border-gray-500/30";

    switch (difficulty.toUpperCase()) {
      case "FACILE":
        return "bg-green-900/20 text-green-400 border-green-500/30";
      case "MOYEN":
        return "bg-yellow-900/20 text-yellow-400 border-yellow-500/30";
      case "DIFFICILE":
        return "bg-red-900/20 text-red-400 border-red-500/30";
      default:
        return "bg-gray-700/20 text-gray-400 border-gray-500/30";
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    if (!difficulty) return "⚪";

    switch (difficulty.toUpperCase()) {
      case "FACILE":
        return "🟢";
      case "MOYEN":
        return "🟡";
      case "DIFFICILE":
        return "🔴";
      default:
        return "⚪";
    }
  };

  const formatTimeLimit = (minutes: number) => {
    // Vérifier que minutes est un nombre valide
    if (!minutes || isNaN(minutes) || minutes <= 0) {
      return t("quizlist_no_limit_time");
    }

    if (minutes < 60) return `${minutes}min`;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return remainingMinutes > 0
      ? `${hours}h${remainingMinutes}min`
      : `${hours}h`;
  };

  // Filtrage et tri côté client
  const filteredQuizzes = quizzes
    .filter((quiz) => {
      if (!quiz || !quiz.quiz_id || !quiz.title) return false;

      // Filtrage par catégorie
      if (selectedCategory && selectedCategory !== "") {
        if (
          !quiz.category ||
          quiz.category.category_id.toString() !== selectedCategory.toString()
        ) {
          return false;
        }
      }

      // Filtrage par recherche
      if (debouncedSearchTerm && debouncedSearchTerm.trim() !== "") {
        const searchLower = debouncedSearchTerm.toLowerCase();
        const titleMatch = quiz.title.toLowerCase().includes(searchLower);
        const descriptionMatch =
          quiz.description &&
          quiz.description.toLowerCase().includes(searchLower);
        const subjectMatch =
          quiz.subject && quiz.subject.name.toLowerCase().includes(searchLower);
        const categoryMatch =
          quiz.category &&
          quiz.category.name.toLowerCase().includes(searchLower);

        if (
          !titleMatch &&
          !descriptionMatch &&
          !subjectMatch &&
          !categoryMatch
        ) {
          return false;
        }
      }

      return true;
    })
    .sort((a, b) => {
      let aValue, bValue;

      switch (sortBy) {
        case "title":
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        case "difficulty":
          const difficultyOrder = { FACILE: 1, MOYEN: 2, DIFFICILE: 3 };
          aValue = difficultyOrder[a.difficulty] || 0;
          bValue = difficultyOrder[b.difficulty] || 0;
          break;
        case "category":
          aValue = a.category?.name?.toLowerCase() || "";
          bValue = b.category?.name?.toLowerCase() || "";
          break;
        case "created_at":
        default:
          aValue = new Date(a.created_at).getTime();
          bValue = new Date(b.created_at).getTime();
          break;
      }

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
      } else {
        return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
      }
    });

  // Groupement des quiz par catégorie si demandé
  const groupedQuizzes = groupByCategory
    ? filteredQuizzes.reduce((groups, quiz) => {
        const categoryName =
          quiz.category?.name || t("quizlist_without_category");
        if (!groups[categoryName]) {
          groups[categoryName] = [];
        }
        groups[categoryName].push(quiz);
        return groups;
      }, {} as Record<string, Quiz[]>)
    : null;

  // Fonction pour rendre une carte de quiz
  const renderQuizCard = (quiz: Quiz) => (
    <div
      key={quiz.quiz_id}
      className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-purple-500/50 hover:bg-gray-800/70 transition-all duration-500 ease-out overflow-hidden group flex flex-col cursor-pointer"
    >
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        {/* En-tête de la carte */}
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2 line-clamp-2 group-hover:text-purple-400 transition-colors duration-300">
              {quiz.title}
            </h3>
            <div className="flex flex-wrap gap-1 sm:gap-2 text-xs sm:text-sm">
              <span className="inline-flex items-center px-2 py-1 rounded-full bg-purple-900/30 text-purple-300 border border-purple-500/20 group-hover:bg-purple-900/40 group-hover:border-purple-500/30 transition-all duration-300">
                📚 {quiz.subject.name}
              </span>
              {!groupByCategory && (
                <span className="inline-flex items-center px-2 py-1 rounded-full bg-purple-900/30 text-purple-300 border border-purple-500/20 group-hover:bg-purple-900/40 group-hover:border-purple-500/30 transition-all duration-300">
                  🏷️ {quiz.category.name}
                </span>
              )}
              {quiz.is_exam_mode && (
                <span className="inline-flex items-center px-2 py-1 rounded-full bg-orange-900/30 text-orange-300 border border-orange-500/20 group-hover:bg-orange-900/40 group-hover:border-orange-500/30 transition-all duration-300">
                  📝 {t("quizlist_exam_mode")}
                </span>
              )}
              <span className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-900/30 text-yellow-300 border border-yellow-500/20 group-hover:bg-yellow-900/40 group-hover:border-yellow-500/30 transition-all duration-300">
                ⚠️{" "}
                {(() => {
                  const availableQuestions =
                    questionsCount[quiz.quiz_id] !== undefined
                      ? questionsCount[quiz.quiz_id]
                      : quiz.questions_count &&
                        quiz.questions_count > 0 &&
                        !isNaN(quiz.questions_count)
                      ? quiz.questions_count
                      : 0;

                  if (quiz.is_exam_mode) {
                    const maxQuestions = Math.min(availableQuestions, 50);
                    return t("quizlist_max_questions_one", {
                      count: maxQuestions,
                    });
                  } else {
                    const maxQuestions = Math.min(availableQuestions, 30);
                    return t("quizlist_max_questions_other", {
                      count: maxQuestions,
                    });
                  }
                })()}
              </span>
            </div>
          </div>
          <div
            className={`ml-3 inline-flex items-center px-2 py-1 rounded-full text-xs sm:text-sm font-medium border ${getDifficultyColor(
              quiz.difficulty
            )} transition-all duration-300`}
          >
            {getDifficultyIcon(quiz.difficulty)} {getDifficultyLabel(quiz.difficulty)}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 line-clamp-3 flex-1 group-hover:text-gray-200 transition-colors duration-300">
          {quiz.description}
        </p>

        {/* Statistiques */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 group-hover:text-gray-300 transition-colors duration-300">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="flex items-center space-x-1">
              <svg
                className="h-3 w-3 sm:h-4 sm:w-4 group-hover:text-purple-400 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                {questionsCount[quiz.quiz_id] !== undefined
                  ? t("quizlist_questions_possible", {
                      count: questionsCount[quiz.quiz_id],
                    })
                  : quiz.questions_count &&
                    quiz.questions_count > 0 &&
                    !isNaN(quiz.questions_count)
                  ? t("quizlist_questions_possible", {
                      count: quiz.questions_count,
                    })
                  : t("quizlist_questions_possible_none")}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <svg
                className="h-3 w-3 sm:h-4 sm:w-4 group-hover:text-purple-400 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                {quiz.is_exam_mode ? "1h" : formatTimeLimit(quiz.time_limit)}
              </span>
            </div>
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-col space-y-3 mt-auto">
          <Link to={`/quiz/${quiz.quiz_id}/preview`} className="w-full">
            <Button variant="primary" size="md" fullWidth>
              {t("quizlist_button_see_quiz")}
            </Button>
          </Link>
          <Link to={`/quiz/${quiz.quiz_id}`} className="w-full">
            <Button variant="secondary" size="sm" fullWidth>
              {t("quizlist_button_start_quiz")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-300">{t("quizlist_loading")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* En-tête */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
            📚 {t("quizlist_title")}
          </h1>
          <p className="text-gray-300 text-sm sm:text-base">
            {t("quizlist_description")}
          </p>
        </div>

        {/* Filtres et recherche */}
        {showFilters && (
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
              {/* Recherche */}
              <div className="sm:col-span-2 lg:col-span-1">
                <label
                  htmlFor="search"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {t("quizlist_search_title")}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={t("quizlist_search_placeholder")}
                    className="w-full px-3 py-2 sm:py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg s:border-purple-400 text-white placeholder-gray-400 text-sm sm:text-base"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <svg
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Matière */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {t("quizlist_subject_title")}
                </label>
                <select
                  id="subject"
                  value={selectedSubject || ""}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full px-3 py-2 sm:py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg s:border-purple-400 text-white text-sm sm:text-base"
                >
                  <option value="">{t("quizlist_subject_value_label")}</option>
                  {subjects.map((subject) => (
                    <option key={subject.subject_id} value={subject.subject_id}>
                      {subject.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Catégorie */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {t("quizlist_category_title")}
                </label>
                <select
                  id="category"
                  value={selectedCategory || ""}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  disabled={!selectedSubject || selectedSubject === ""}
                  className="w-full px-3 py-2 sm:py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg s:border-purple-400 disabled:bg-gray-800/50 disabled:cursor-not-allowed text-white text-sm sm:text-base"
                >
                  <option value="">{t("quizlist_category_value_label")}</option>
                  {categories.map((category) => (
                    <option
                      key={category.category_id}
                      value={category.category_id}
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tri */}
              <div>
                <label
                  htmlFor="sort"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {t("quizlist_sort")}
                </label>
                <div className="flex space-x-2">
                  <select
                    id="sort"
                    value={sortBy}
                    onChange={(e) =>
                      setSortBy(
                        e.target.value as
                          | "created_at"
                          | "title"
                          | "difficulty"
                          | "category"
                      )
                    }
                    className="flex-1 px-3 py-2 sm:py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg s:border-purple-400 text-white text-sm sm:text-base"
                  >
                    <option value="created_at">
                      {t("quizlist_sort_date")}
                    </option>
                    <option value="title">{t("quizlist_sort_title")}</option>
                    <option value="difficulty">
                      {t("quizlist_sort_difficulty")}
                    </option>
                    <option value="category">
                      {t("quizlist_sort_category")}
                    </option>
                  </select>
                  <button
                    onClick={() =>
                      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                    }
                    className="px-3 py-2 sm:py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg hover:bg-gray-600/50 s:border-purple-400 text-white transition-colors"
                    title={
                      sortOrder === "asc"
                        ? t("quizlist_sort_asc")
                        : t("quizlist_sort_desc")
                    }
                  >
                    {sortOrder === "asc" ? "↑" : "↓"}
                  </button>
                </div>
              </div>

              {/* Groupement */}
              <div className="flex items-center justify-center lg:justify-start">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={groupByCategory}
                    onChange={(e) => setGroupByCategory(e.target.checked)}
                    className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded cursor-pointer"
                  />
                  <span className="text-sm font-medium text-gray-300">
                    {t("quizlist_group_by_category")}
                  </span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Résultats */}
        <div className="mb-4 sm:mb-6">
          <p className="text-sm sm:text-base text-gray-300">
            {t("quizlist_results", { count: filteredQuizzes.length })}
          </p>
        </div>

        {/* Liste des quiz */}
        {filteredQuizzes.length === 0 ? (
          <div className="text-center py-12 sm:py-16">
            <div className="text-4xl sm:text-6xl mb-4">📚</div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
              {t("quizlist_no_results_title")}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              {t("quizlist_no_results_message")}
            </p>
          </div>
        ) : groupByCategory && groupedQuizzes ? (
          // Affichage groupé par catégorie
          <div className="space-y-8">
            {Object.entries(groupedQuizzes)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([categoryName, quizzes]) => (
                <div key={categoryName} className="space-y-4">
                  {/* En-tête de la catégorie */}
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 h-px bg-gradient-to-r from-purple-500/20 to-blue-500/20"></div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center space-x-2">
                      <span className="text-purple-400">🏷️</span>
                      <span>{categoryName}</span>
                      <span className="text-sm font-normal text-gray-400">
  {t("quizlist_group_category_count", { count: quizzes.length })}
</span>
                    </h2>
                    <div className="flex-1 h-px bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
                  </div>

                  {/* Grille des quiz de cette catégorie */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {quizzes.map(renderQuizCard)}
                  </div>
                </div>
              ))}
          </div>
        ) : (
          // Affichage normal en grille
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredQuizzes.map(renderQuizCard)}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizList;
