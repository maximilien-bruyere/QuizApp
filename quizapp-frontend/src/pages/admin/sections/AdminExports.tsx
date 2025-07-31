import { useState } from "react";
import { FaDatabase, FaFileExport, FaFileAlt } from "react-icons/fa";
import { api } from "../../../api/api";
import { useTranslation } from "react-i18next";

const AdminExports = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const exportOptions = [
    {
      label: t("admin_export_page_db"),
      format: "db",
      icon: <FaDatabase className="text-blue-400 text-2xl" />,
    },
    {
      label: t("admin_export_page_subjects"),
      format: "json",
      type: "subject",
      icon: <FaFileAlt className="text-purple-400 text-2xl" />,
    },
    {
      label: t("admin_export_page_categories"),
      format: "json",
      type: "category",
      icon: <FaFileAlt className="text-yellow-400 text-2xl" />,
    },
    {
      label: t("admin_export_page_flashcards"),
      format: "json",
      type: "flashcard",
      icon: <FaFileAlt className="text-pink-400 text-2xl" />,
    },
    {
      label: t("admin_export_page_quizzes"),
      format: "json",
      type: "quiz",
      icon: <FaFileAlt className="text-green-400 text-2xl" />,
    },
    {
      label: t("admin_export_page_users"),
      format: "json",
      type: "user",
      icon: <FaFileAlt className="text-blue-300 text-2xl" />,
    },
    {
      label: t("admin_export_page_questions_images"),
      format: "question-images-zip",
      icon: <FaFileExport className="text-cyan-400 text-2xl" />,
    },
  ];

  const handleExport = async (format: string, type: string | undefined) => {
    setLoading(`${format}${type ? `-${type}` : ""}`);
    setError("");
    try {
      let url = `/export/${format}`;
      if (type) url += `?type=${type}`;
      const response = await api.get(url, { responseType: "blob" });
      let fileName = type ? `${type}.${format}` : `export.${format}`;
      if (format === "question-images-zip") fileName = "question-images.zip";
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(new Blob([response.data]));
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      setError("Erreur lors de l'export : " + (err?.toString() || ""));
    }
    setLoading("");
  };

  return (
    <div className="space-y-8">
      {/* Header Premium */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-500/20 to-gray-500/20 backdrop-blur-sm border border-gray-500/30 flex items-center justify-center text-white text-xl font-bold shadow-lg">
            📤
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">
              {t("admin_export_page_title")}
            </h1>
            <p className="text-gray-400 mt-1">
              {t("admin_export_page_subtitle")}
            </p>
          </div>
        </div>
      </div>
      {error && <div className="text-center text-red-400 mb-4">{error}</div>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {exportOptions.map((opt) => (
          <button
            key={opt.label}
            className={`hover:cursor-pointer group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 w-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-500/5 flex flex-col items-center focus:outline-none focus:ring-2 focus:ring-gray-400 ${
              loading === `${opt.format}${opt.type ? `-${opt.type}` : ""}`
                ? "opacity-60 cursor-not-allowed"
                : "hover:cursor-pointer"
            }`}
            onClick={() => handleExport(opt.format, opt.type)}
            disabled={!!loading}
            type="button"
            title={`Exporter ${opt.label}`}
          >
            {opt.icon}
            <div className="text-xl font-bold mt-2">{opt.label}</div>
            {loading === `${opt.format}${opt.type ? `-${opt.type}` : ""}` && (
              <p>Chargement ...</p>
            )}
          </button>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <div className="bg-[#1c2230] border border-[#2c3240] rounded-2xl px-6 py-4 max-w-lg w-full text-center shadow-lg">
          <div className="text-lg font-semibold text-blue-300 mb-2">
            💡 {t('admin_export_page_tips_title')}
          </div>
          <div className="text-gray-300">
            {t('admin_export_page_tips_subtitle')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminExports;
