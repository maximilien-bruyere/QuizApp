import React, { useState } from "react";
import { FaDatabase, FaFileImport, FaFileAlt } from "react-icons/fa";
import { api } from "../../../api/api";
import { useTranslation } from "react-i18next";

const AdminImports = () => {
  const { t } = useTranslation();
  const importOptions = [
    {
      label: t("admin_import_page_db"),
      type: "db",
      accept: ".db",
      icon: <FaDatabase className="text-blue-400 text-2xl" />,
    },
    {
      label: t("admin_import_page_subjects"),
      type: "subject",
      accept: ".json",
      icon: <FaFileAlt className="text-purple-400 text-2xl" />,
    },
    {
      label: t("admin_import_page_categories"),
      type: "category",
      accept: ".json",
      icon: <FaFileAlt className="text-yellow-400 text-2xl" />,
    },
    {
      label: t("admin_import_page_flashcards"),
      type: "flashcard",
      accept: ".json",
      icon: <FaFileAlt className="text-pink-400 text-2xl" />,
    },
    {
      label: t("admin_import_page_quizzes"),
      type: "quiz",
      accept: ".json",
      icon: <FaFileAlt className="text-green-400 text-2xl" />,
    },

    {
      label: t("admin_import_page_users"),
      type: "user",
      accept: ".json",
      icon: <FaFileAlt className="text-blue-300 text-2xl" />,
    },
    {
      label: t("admin_import_page_questions_images"),
      type: "question-images-zip",
      accept: ".zip",
      icon: <FaFileImport className="text-cyan-400 text-2xl" />,
    },
  ];
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSelect = (type: string) => {
    setSelectedType(type);
    setFile(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const getApiUrl = () => {
    switch (selectedType) {
      case "db":
        return "/database/import";
      case "quiz":
        return "/import/quiz";
      case "subject":
        return "/import/subject";
      case "category":
        return "/import/category";
      case "flashcard":
        return "/import/flashcard";
      case "user":
        return "/import/user";
      case "question-images-zip":
        return "/import/question-images-zip";
      default:
        return "/import";
    }
  };

  const [success, setSuccess] = useState<boolean | null>(null);
  const handleImport = async () => {
    if (!file || !selectedType) {
      setMessage(t("admin_import_page_select_file"));
      setSuccess(false);
      return;
    }
    setLoading(selectedType);
    setMessage("");
    setSuccess(null);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await api.post(getApiUrl(), formData);
      if (res.status >= 200 && res.status < 300) {
        setMessage(t("admin_import_page_success_import"));
        setSuccess(true);
        if (selectedType === "db") {
          localStorage.removeItem("token");
          if (window.electron && window.electron.ipcRenderer) {
            window.electron.ipcRenderer.send("stop-app");
          }
          return;
        }
      } else {
        setMessage(t("admin_import_page_error_import"));
        setSuccess(false);
      }
    } catch (err: any) {
      let errorMsg = t("admin_import_page_error_import");
      if (err?.response?.data?.message) {
        errorMsg = err.response.data.message;
      }
      setMessage(errorMsg);
      setSuccess(false);
    } finally {
      setLoading("");
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-500/20 to-gray-500/20 backdrop-blur-sm border border-gray-500/30 flex items-center justify-center text-white text-xl font-bold shadow-lg">
            📤
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">
              {t("admin_import_page_title")}
            </h1>
            <p className="text-gray-400 mt-1">
              {t("admin_import_page_subtitle")}
            </p>
          </div>
        </div>
      </div>
      {message && (
        <div
          className={`text-center mb-4 ${
            success === true ? "text-green-400" : "text-red-400"
          }`}
        >
          {message}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {importOptions.map((opt) => (
          <div
            key={opt.type}
            className={`hover:cursor-pointer group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 w-full flex flex-col items-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-500/5 focus:outline-none focus:ring-1 focus:ring-gray-400 ${
              selectedType === opt.type
                ? "ring-1 ring-gray-400"
                : "hover:border-white/20"
            }`}
            onClick={() => handleSelect(opt.type)}
            tabIndex={0}
            role="button"
            title={ t("admin_import_page_import") + ` ${opt.label}`}
          >
            {opt.icon}
            <div className="text-xl font-bold mt-2 text-white text-center">{opt.label}</div>
            {selectedType === opt.type && (
              <>
                <input
                  type="file"
                  accept={opt.accept}
                  onChange={handleFileChange}
                  className="hover:cursor-pointer mt-4 mb-2 block w-full text-gray-800 bg-white rounded p-2 border"
                />
                <button
                  onClick={handleImport}
                  disabled={loading === opt.type || !file}
                  className="hover:cursor-pointer px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full font-semibold"
                >
                  {loading === opt.type ? t("admin_import_page_importing") : t("admin_import_page_import")}
                </button>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <div className="bg-[#1c2230] border border-[#2c3240] rounded-2xl px-6 py-4 max-w-lg w-full text-center shadow-lg">
          <div className="text-lg font-semibold text-blue-300 mb-2">
            💡 {t('admin_import_page_tips_title')}
          </div>
          <div className="text-gray-300">
            {t('admin_import_page_tips_subtitle')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminImports;
