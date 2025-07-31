import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { api } from "../../../api/api";
import Modal from "../../components/others/Modal";
import {
  CreateButton,
  ModificationButton,
  DangerButton,
} from "../../components/buttons";

export default function AdminQuizzes() {
  const { t } = useTranslation();
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [quizToDelete, setQuizToDelete] = useState<any | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/quizzes").then((res) => setQuizzes(res.data));
  }, []);

  const requestDelete = (quiz: any) => {
    setQuizToDelete(quiz);
    setShowConfirm(true);
  };

  const confirmDelete = async () => {
    if (!quizToDelete) return;

    try {
      await api.delete(`/quizzes/${quizToDelete.quiz_id}`);
      setQuizzes((prev) =>
        prev.filter((q) => q.quiz_id !== quizToDelete.quiz_id)
      );
      setShowConfirm(false);
      setQuizToDelete(null);
    } catch (error: any) {
      console.error(t("admin_quizzes_page_delete_error"), error);
      alert(
        t("admin_quizzes_page_delete_error") +
          (error.response?.data?.message || t("server_error"))
      );
    }
  };

  return (
    <div className="space-y-8">
      {/* Header Premium */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-rose-500/20 backdrop-blur-sm border border-red-500/30 flex items-center justify-center text-white text-xl font-bold shadow-lg">
            ❓
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">
              {t("admin_quizzes_page_title")}
            </h1>
            <p className="text-gray-400 mt-1">
              {t("admin_quizzes_page_subtitle")}
            </p>
          </div>
        </div>
        <CreateButton onClick={() => navigate("/admin/quizzes/new")}>
          {t("admin_quizzes_page_new_quiz")}
        </CreateButton>
      </div>

      {/* Grille des quiz */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {quizzes.map((quiz) => (
          <div
            key={quiz.quiz_id}
            className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-500/5"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/5 to-rose-500/5 rounded-full -mr-16 -mt-16 group-hover:from-red-500/10 group-hover:to-rose-500/10 transition-all duration-300"></div>

            <div className="relative">
              {/* Titre */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-200 transition-colors duration-300">
                {quiz.title}
              </h3>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {quiz.subject?.name && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400 border border-purple-500/20">
                    <span className="mr-1">📚</span>
                    {quiz.subject.name}
                  </span>
                )}
                {quiz.category?.name && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    <span className="mr-1">🏷️</span>
                    {quiz.category.name}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ModificationButton
                  onClick={() =>
                    navigate(`/admin/quizzes/edit/${quiz.quiz_id}`)
                  }
                  size="sm"
                  className="flex-1"
                >
                  {t("admin_page_edit_button")}
                </ModificationButton>
                <DangerButton
                  onClick={() => requestDelete(quiz)}
                  size="sm"
                  className="flex-1"
                >
                  {t("admin_page_delete_button")}
                </DangerButton>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message si aucun quiz */}
      {quizzes.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-700/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl opacity-50">🧪</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-300 mb-2">
            {t("admin_quizzes_page_no_quizzes_title")}
          </h3>
          <p className="text-gray-400 mb-6">
            {t("admin_quizzes_page_no_quizzes_description")}
          </p>
          <CreateButton onClick={() => navigate("/admin/quizzes/new")}>
          {t("admin_quizzes_page_new_quiz")}
        </CreateButton>
        </div>
      )}

      {/* Modale de confirmation */}
      <Modal isOpen={showConfirm} onClose={() => setShowConfirm(false)}>
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

          {quizToDelete && (
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
              <div className="text-sm text-gray-300 mb-2">
                <span className="font-medium text-white">
                  {t("admin_quizzes_page_quiz_name_label")}{" "}
                </span>{" "}
                {quizToDelete.title}
              </div>
              <div className="text-sm text-gray-300">
                <span className="font-medium text-white">
                  {t("admin_quizzes_page_quiz_description_label")}
                </span>{" "}
                {quizToDelete.description ||
                  t("admin_quizzes_page_no_description")}
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={() => {
                setShowConfirm(false);
                setQuizToDelete(null);
              }}
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
}
