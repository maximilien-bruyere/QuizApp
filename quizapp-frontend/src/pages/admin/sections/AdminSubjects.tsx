import { useEffect, useState } from "react";
import { api } from "../../../api/api";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/others/Modal";
import { useTranslation } from "react-i18next";
import {
  CreateButton,
  ModificationButton,
  DangerButton,
} from "../../components/buttons";

interface Subject {
  subject_id: number;
  name: string;
}

export default function AdminSubjects() {
  const { t } = useTranslation();
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const navigate = useNavigate();

  const [showConfirm, setShowConfirm] = useState(false);
  const [subjectToDelete, setSubjectToDelete] = useState<Subject | null>(null);

  const requestDelete = (subject: Subject) => {
    setSubjectToDelete(subject);
    setShowConfirm(true);
  };

  const confirmDelete = async () => {
    if (subjectToDelete) {
      await api.delete(`/subjects/${subjectToDelete.subject_id}`);
      setSubjects((prev) =>
        prev.filter((t) => t.subject_id !== subjectToDelete.subject_id)
      );
      setShowConfirm(false);
      setSubjectToDelete(null);
    }
  };

  useEffect(() => {
    api.get("/subjects").then((res) => setSubjects(res.data));
  }, []);

  return (
    <div className="space-y-8">
      {/* Header Premium */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-sm border border-pink-500/30 flex items-center justify-center text-white text-xl font-bold shadow-lg">
            🧠
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">{t("admin_subjects_page_title")}</h1>
            <p className="text-gray-400 mt-1">{t("admin_subjects_page_subtitle")}</p>
          </div>
        </div>
        <CreateButton onClick={() => navigate("/admin/subjects/new")}>
          {t("admin_subjects_page_new_subject")}
        </CreateButton>
      </div>

      {/* Subjects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {subjects.map((s) => (
          <div
            key={s.subject_id}
            className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/5"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/5 to-rose-500/5 rounded-full -mr-16 -mt-16 group-hover:from-pink-500/10 group-hover:to-rose-500/10 transition-all duration-300"></div>

            {/* Subject Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{s.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/20">
                    📚 {t("admin_subjects_page_title")}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <ModificationButton
                onClick={() => navigate(`/admin/subjects/edit/${s.subject_id}`)}
                size="sm"
                className="flex-1"
              >
                {t("admin_page_edit_button")}
              </ModificationButton>
              <DangerButton
                onClick={() => requestDelete(s)}
                size="sm"
                className="flex-1"
              >
                {t("admin_page_delete_button")}
              </DangerButton>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {subjects.length === 0 && (
        <div className="text-center py-12">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-800/50 flex items-center justify-center">
            <span className="text-2xl">🧠</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-400 mb-2">
            {t("admin_subjects_page_no_subjects_title")}
          </h3>
          <p className="text-gray-500 mb-6">
            {t("admin_subjects_page_no_subjects_message")}
          </p>
          <CreateButton onClick={() => navigate("/admin/subjects/new")}>
            {t("admin_subjects_page_new_subject")}
          </CreateButton>
        </div>
      )}

      {/* Modern Confirmation Modal */}
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

          {subjectToDelete && (
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
              <div className="text-sm text-gray-300">
                <span className="font-medium text-white">{t("admin_page_subject")}</span>{" "}
                {subjectToDelete.name}
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={() => {
                setShowConfirm(false);
                setSubjectToDelete(null);
              }}
              className="flex-1 px-4 py-3 bg-gray-500/20 text-gray-400 rounded-xl hover:bg-gray-500/30 hover:text-gray-300 hover:scale-105 active:scale-95 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
            >
              {t("admin_page_cancel_button")}
            </button>
            <button
              onClick={confirmDelete}
              className="flex-1 px-4 py-3 bg-red-500/20 text-red-400 rounded-xl hover:bg-red-500/30 hover:text-red-300 hover:scale-105 active:scale-95 transition-all duration-200 font-medium shadow-md hover:shadow-lg hover:shadow-red-500/20"
            >
              {t("admin_page_delete_button")}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
