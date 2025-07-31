import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../api/api";
import {
  CreateButton,
  ModificationButton,
  DangerButton,
} from "../../components/buttons";
import Modal from "../../components/others/Modal";
import { useTranslation } from "react-i18next";
import LoadingSpinner from "../../components/others/LoadingSpinner";

interface Flashcard {
  flashcard_id: number;
  front: string;
  back: string;
  difficulty: "NOUVEAU" | "DIFFICILE" | "MOYEN" | "FACILE" | "ACQUISE";
  category_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  category?: {
    category_id: number;
    name: string;
    subject?: {
      name: string;
    };
  };
  user?: {
    name: string;
  };
}

const PAGE_SIZE = 12;

const AdminFlashcards = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [flashcardToDelete, setFlashcardToDelete] = useState<Flashcard | null>(
    null
  );
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");
  const [subject, setSubject] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const flashcardsRes = await api.get("/flashcards");
      setFlashcards(flashcardsRes.data);
    } catch (error) {
      console.error(t("admin_flashcards_page_loading_error"), error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateFlashcard = () => {
    navigate("/admin/flashcards/new");
  };

  const handleEditFlashcard = (flashcard: Flashcard) => {
    navigate(`/admin/flashcards/edit/${flashcard.flashcard_id}`);
  };

  const handleDelete = (flashcard: Flashcard) => {
    setFlashcardToDelete(flashcard);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (flashcardToDelete) {
      try {
        await api.delete(`/flashcards/${flashcardToDelete.flashcard_id}`);
        loadData();
        setShowDeleteModal(false);
        setFlashcardToDelete(null);
      } catch (error) {
        console.error(t("admin_flashcards_page_delete_error"), error);
      }
    }
  };

  const getDifficultyStyle = (difficulty: string) => {
    switch (difficulty) {
      case "NOUVEAU":
        return {
          bg: "bg-gray-500/20",
          text: "text-gray-400",
          label: "🆕 " + t("admin_flashcards_page_difficulty_new"),
        };
      case "DIFFICILE":
        return {
          bg: "bg-red-500/20",
          text: "text-red-400",
          label: "🔴 " + t("admin_flashcards_page_difficulty_hard"),
        };
      case "MOYEN":
        return {
          bg: "bg-yellow-500/20",
          text: "text-yellow-400",
          label: "🟡 " + t("admin_flashcards_page_difficulty_medium"),
        };
      case "FACILE":
        return {
          bg: "bg-green-500/20",
          text: "text-green-400",
          label: "🟢 " + t("admin_flashcards_page_difficulty_easy"),
        };
      case "ACQUISE":
        return {
          bg: "bg-blue-500/20",
          text: "text-blue-400",
          label: "✅ " + t("admin_flashcards_page_difficulty_learned"),
        };
      default:
        return {
          bg: "bg-gray-500/20",
          text: "text-gray-400",
          label: "🆕 " + t("admin_flashcards_page_difficulty_new"),
        };
    }
  };

  const truncateText = (text: string, maxLength: number = 100) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  if (loading) {
    return <LoadingSpinner />;
  }
  const filteredFlashcards = flashcards.filter((card) => {
    const matchSearch =
      card.front.toLowerCase().includes(search.toLowerCase()) ||
      card.back.toLowerCase().includes(search.toLowerCase());
    const matchDifficulty = !difficulty || card.difficulty === difficulty;
    const matchCategory =
      !category || card.category?.category_id?.toString() === category;
    const matchSubject = !subject || card.category?.subject?.name === subject;
    return matchSearch && matchDifficulty && matchCategory && matchSubject;
  });

  const totalPages = Math.ceil(filteredFlashcards.length / PAGE_SIZE);
  const paginatedFlashcards = filteredFlashcards.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  return (
    <div className="space-y-8">
      {/* Header Premium */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 backdrop-blur-sm border border-orange-500/30 flex items-center justify-center text-white text-xl font-bold shadow-lg">
            🃏
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">
              {t("admin_flashcards_page_title")}
            </h1>
            <p className="text-gray-400 mt-1">
              {t("admin_flashcards_page_subtitle")}
            </p>
          </div>
        </div>
        <CreateButton onClick={handleCreateFlashcard}>
          {t("admin_flashcards_page_new_flashcards")}
        </CreateButton>
      </div>

      {/* Barre de recherche et filtres */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder={t("admin_flashcards_page_search_placeholder")}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="px-3 py-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-1 focus:ring-gray-500 w-57"
        />
        <select
          value={difficulty}
          onChange={(e) => {
            setDifficulty(e.target.value);
            setPage(1);
          }}
          className="px-3 py-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-1 focus:ring-gray-500 hover:cursor-pointer"
        >
          <option value="">{t("admin_flashcards_page_all_difficulty")}</option>
          <option value="NOUVEAU">
            {t("admin_flashcards_page_difficulty_new")}
          </option>
          <option value="FACILE">
            {t("admin_flashcards_page_difficulty_easy")}
          </option>
          <option value="MOYEN">
            {t("admin_flashcards_page_difficulty_medium")}
          </option>
          <option value="DIFFICILE">
            {t("admin_flashcards_page_difficulty_hard")}
          </option>
          <option value="ACQUISE">
            {t("admin_flashcards_page_difficulty_learned")}
          </option>
        </select>
        <select
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
            setCategory(""); // Réinitialise la catégorie quand le sujet change
            setPage(1);
          }}
          className="px-3 py-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-1 focus:ring-gray-500 hover:cursor-pointer"
        >
          <option value="">{t("admin_flashcards_page_all_subjects")}</option>
          {[
            ...new Set(
              flashcards.map((f) => f.category?.subject?.name).filter(Boolean)
            ),
          ].map((subjName, idx) => (
            <option key={idx} value={subjName}>
              {subjName}
            </option>
          ))}
        </select>
        {subject && (
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setPage(1);
            }}
            className="px-3 py-2 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-1 focus:ring-gray-500 hover:cursor-pointer"
          >
            <option value="">
              {t("admin_flashcards_page_all_categories")}
            </option>
            {[
              ...new Set(
                flashcards
                  .filter((f) => f.category?.subject?.name === subject)
                  .map((f) => f.category?.name)
                  .filter(Boolean)
              ),
            ].map((catName, idx) => (
              <option
                key={idx}
                value={
                  flashcards.find(
                    (f) =>
                      f.category?.name === catName &&
                      f.category?.subject?.name === subject
                  )?.category?.category_id
                }
              >
                {catName}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Grille des flashcards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedFlashcards.map((flashcard) => {
          const difficulty = getDifficultyStyle(flashcard.difficulty);
          return (
            <div
              key={flashcard.flashcard_id}
              className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/5"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/5 to-amber-500/5 rounded-full -mr-16 -mt-16 group-hover:from-orange-500/10 group-hover:to-amber-500/10 transition-all duration-300"></div>

              {/* Flashcard Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {flashcard.front}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    <span className="font-medium text-gray-300">
                      {t("admin_flashcards_page_answer_label")}{" "}
                    </span>{" "}
                    {truncateText(flashcard.back, 60)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {flashcard.category?.subject?.name && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400 border border-purple-500/20">
                        🧠 {flashcard.category.subject.name}
                      </span>
                    )}
                    {flashcard.category?.name && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/20">
                        📂 {flashcard.category.name}
                      </span>
                    )}
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${difficulty.bg} ${difficulty.text}`}
                    >
                      {difficulty.label}
                    </span>
                  </div>
                </div>
              </div>

              {/* Métadonnées */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-400">
                    {t("admin_flashcards_page_created_by_label")}{" "}
                    {flashcard.user?.name}
                  </span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-400">
                    {new Date(flashcard.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ModificationButton
                  onClick={() => handleEditFlashcard(flashcard)}
                  size="sm"
                  className="flex-1"
                >
                  {t("admin_page_edit_button")}
                </ModificationButton>
                <DangerButton
                  onClick={() => handleDelete(flashcard)}
                  size="sm"
                  className="flex-1"
                >
                  {t("admin_page_delete_button")}
                </DangerButton>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          <button
            className="px-3 py-2 rounded bg-gray-700 text-white disabled:opacity-50 hover:cursor-pointer hover:bg-gray-600 transition-all duration-200 active:scale-95"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            {t("admin_flashcards_page_previous_button")}
          </button>
          <span className="px-3 py-2 text-gray-300">
            {t("admin_flashcards_page_current_page_label")} {page} /{" "}
            {totalPages}
          </span>
          <button
            className="px-3 py-2 rounded bg-gray-700 text-white disabled:opacity-50 hover:cursor-pointer hover:bg-gray-600 transition-all duration-200 active:scale-95"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            {t("admin_flashcards_page_next_button")}
          </button>
        </div>
      )}

      {/* Message si aucune flashcard */}
      {flashcards.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-700/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl opacity-50">🃏</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-300 mb-2">
            {t("admin_flashcards_page_no_flashcards_title")}
          </h3>
          <p className="text-gray-400 mb-6">
            {t("admin_flashcards_page_no_flashcards_message")}
          </p>
          <CreateButton onClick={handleCreateFlashcard}>
            {t("admin_flashcards_page_new_flashcards")}
          </CreateButton>
        </div>
      )}

      {/* Modal de confirmation de suppression */}
      <Modal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <div className="bg-gray-900/95 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl max-w-md w-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400 text-xl">
              ⚠️
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">
                {t("admin_page_delete_1")}
              </h2>
              <p className="text-gray-400 text-sm">
                {t("admin_page_delete_2")}
              </p>
            </div>
          </div>

          {flashcardToDelete && (
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
              <div className="text-sm text-gray-300 mb-2">
                <span className="font-medium text-white">
                  {t("admin_flashcards_page_question_label")}
                </span>{" "}
                {truncateText(flashcardToDelete.front, 80)}
              </div>
              <div className="text-sm text-gray-300">
                <span className="font-medium text-white">
                  {t("admin_flashcards_page_answer_label")}
                </span>{" "}
                {truncateText(flashcardToDelete.back, 80)}
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={() => setShowDeleteModal(false)}
              className="hover:cursor-pointer flex-1 px-4 py-3 bg-gray-500/20 text-gray-400 rounded-xl hover:bg-gray-500/30 hover:text-gray-300 hover:scale-105 active:scale-95 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
            >
              {t("admin_page_cancel_button")}
            </button>
            <button
              onClick={confirmDelete}
              className="hover:cursor-pointer flex-1 px-4 py-3 bg-red-500/20 text-red-400 rounded-xl hover:bg-red-500/30 hover:text-red-300 hover:scale-105 active:scale-95 transition-all duration-200 font-medium shadow-md hover:shadow-lg hover:shadow-red-500/20"
            >
              {t("admin_page_delete_button")}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AdminFlashcards;
