import { FaUser, FaBookOpen, FaClipboardList } from "react-icons/fa";
import { useEffect, useState } from "react";
import { api } from "../../../api/api";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LoadingSpinner from "../../components/others/LoadingSpinner";

const AdminStats = () => {
  const { t } = useTranslation();
  const [stats, setStats] = useState({
    userCount: 0,
    subjectCount: 0,
    quizCount: 0,
    categoryCount: 0,
    flashcardCount: 0,
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/info")
      .then((res) => {
        setStats(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  let content;
  if (loading) {
    content = <LoadingSpinner />
  } else if (error) {
    content = <div className="text-center text-red-400">{error}</div>;
  } else {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
        <button
          className="hover:cursor-pointer group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 w-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 flex flex-col items-center focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => navigate("/admin/users")}
          title={t('admin_stats_page_users_label')}
          tabIndex={0}
          type="button"
        >
          <FaUser className="text-blue-400 text-4xl mb-2" />
          <div className="text-3xl font-bold">{stats.userCount}</div>
          <div className="text-gray-300 mt-2">{t('admin_stats_page_users')}</div>
        </button>
        <button
          className="hover:cursor-pointer group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 w-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/5 flex flex-col items-center focus:outline-none focus:ring-2 focus:ring-purple-400"
          onClick={() => navigate("/admin/subjects")}
          title={t('admin_stats_page_subjects_label')}
          tabIndex={0}
          type="button"
        >
          <FaBookOpen className="text-purple-400 text-4xl mb-2" />
          <div className="text-3xl font-bold">{stats.subjectCount}</div>
          <div className="text-gray-300 mt-2">{t('admin_stats_page_subjects')}</div>
        </button>
        <button
          className="hover:cursor-pointer group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 w-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/5 flex flex-col items-center focus:outline-none focus:ring-2 focus:ring-green-400"
          onClick={() => navigate("/admin/quizzes")}
          title={t('admin_stats_page_quizzes_label')}
          tabIndex={0}
          type="button"
        >
          <FaClipboardList className="text-green-400 text-4xl mb-2" />
          <div className="text-3xl font-bold">{stats.quizCount}</div>
          <div className="text-gray-300 mt-2">{t('admin_stats_page_quizzes')}</div>
        </button>
        <button
          className="hover:cursor-pointer group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 w-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-500/5 flex flex-col items-center focus:outline-none focus:ring-2 focus:ring-yellow-400"
          onClick={() => navigate("/admin/categories")}
          title={t('admin_stats_page_categories_label')}
          tabIndex={0}
          type="button"
        >
          <FaClipboardList className="text-yellow-400 text-4xl mb-2" />
          <div className="text-3xl font-bold">{stats.categoryCount}</div>
          <div className="text-gray-300 mt-2">{t('admin_stats_page_categories')}</div>
        </button>
        <button
          className="hover:cursor-pointer group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 w-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/5 flex flex-col items-center focus:outline-none focus:ring-2 focus:ring-pink-400"
          onClick={() => navigate("/admin/flashcards")}
          title="{t('admin_stats_page_flashcards_label')}"
          tabIndex={0}
          type="button"
        >
          <FaClipboardList className="text-pink-400 text-4xl mb-2" />
          <div className="text-3xl font-bold">{stats.flashcardCount}</div>
          <div className="text-gray-300 mt-2">{t('admin_stats_page_flashcards')}</div>
        </button>
      </div>
    );
  }
  return (
    <div className="space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center text-white text-xl font-bold shadow-lg">
              📊
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">
                {t("admin_stats_page_title")}
              </h1>
              <p className="text-gray-400 mt-1">
                {t("admin_stats_page_subtitle")}
              </p>
            </div>
          </div>
        </div>
        {content}
        <div className="mt-10 flex justify-center">
          <div className="bg-[#1c2230] border border-[#2c3240] rounded-2xl px-6 py-4 max-w-lg w-full text-center shadow-lg">
            <div className="text-lg font-semibold text-blue-300 mb-2">
              💡 {t('admin_stats_page_tips_title')}
            </div>
            <div className="text-gray-300">
              {t('admin_stats_page_tips_subtitle')}
            </div>
          </div>
        </div>
      </div>
  );
};

export default AdminStats;
