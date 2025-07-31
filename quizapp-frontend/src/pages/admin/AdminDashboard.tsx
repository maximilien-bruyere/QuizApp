import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function AdminDashboard() {
  const { t } = useTranslation();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menu = [
    {
      label: t("admin_dashboard_page_statistics_title"),
      icon: "📊",
      to: "/admin/stats",
      description: t("admin_dashboard_page_statistics_description"),
    },
    {
      label: t("admin_dashboard_page_users_title"),
      icon: "👥",
      to: "/admin/users",
      description: t("admin_dashboard_page_users_description"),
    },
    {
      label: t("admin_dashboard_page_subjects_title"),
      icon: "🧠",
      to: "/admin/subjects",
      description: t("admin_dashboard_page_subjects_description"),
    },
    {
      label: t("admin_dashboard_page_categories_title"),
      icon: "📂",
      to: "/admin/categories",
      description: t("admin_dashboard_page_categories_description"),
    },
    {
      label: t("admin_dashboard_page_flashcards_title"),
      icon: "🃏",
      to: "/admin/flashcards",
      description: t("admin_dashboard_page_flashcards_description"),
    },
    {
      label: t("admin_dashboard_page_quizzes_title"),
      icon: "❓",
      to: "/admin/quizzes",
      description: t("admin_dashboard_page_quizzes_description"),
    },
    {
      label: t("admin_dashboard_page_import_title"),
      icon: "📤",
      to: "/admin/imports",
      description: t("admin_dashboard_page_import_description"),
    },
    {
      label: t("admin_dashboard_page_export_title"),
      icon: "📥",
      to: "/admin/exports",
      description: t("admin_dashboard_page_export_description"),
    },
    {
      label: t("admin_dashboard_page_settings_title"),
      icon: "⚙️",
      to: "/admin/settings",
      description: t("admin_dashboard_page_settings_description"),
    },
  ];

  const isChildRouteActive = menu.some((item) =>
    location.pathname.startsWith(item.to)
  );

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed lg:relative z-50 lg:z-auto
        w-80 h-full lg:h-auto
        bg-gray-800/50 backdrop-blur-xl border-r border-gray-700/30
        transform lg:transform-none transition-all duration-300 ease-in-out
        ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }
      `}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none"></div>

        <div className="relative p-6 space-y-6 h-full">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">⚡</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">
                  {t("admin_dashboard_page_sidebar_title")}{" "}
                </h2>
                <p className="text-sm text-gray-400">
                  {t("admin_dashboard_page_sidebar_subtitle")}
                </p>
              </div>
            </div>

            <button
              onClick={closeSidebar}
              className="lg:hidden p-2 rounded-xl bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white transition-all duration-300 hover:rotate-90"
            >
              <FaTimes />
            </button>
          </div>

          {/* Navigation Cards */}
          <nav className="space-y-3">
            {menu.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={closeSidebar}
                className={`
                  group relative block p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg
                  ${
                    location.pathname.startsWith(item.to)
                      ? "bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg"
                      : "bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/10 hover:border-white/20"
                  }
                `}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Active indicator */}
                {location.pathname.startsWith(item.to) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
                )}

                <div className="relative flex items-center space-x-4">
                  <div
                    className={`
                    w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110
                    ${
                      location.pathname.startsWith(item.to)
                        ? "bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25"
                        : "bg-gray-600/50 group-hover:bg-gradient-to-br group-hover:from-blue-500/20 group-hover:to-purple-600/20"
                    }
                  `}
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3
                      className={`
                      font-semibold transition-colors duration-300
                      ${
                        location.pathname.startsWith(item.to)
                          ? "text-white"
                          : "text-gray-200 group-hover:text-white"
                      }
                    `}
                    >
                      {item.label}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>

                  <div
                    className={`
                    w-2 h-2 rounded-full transition-all duration-300
                    ${
                      location.pathname.startsWith(item.to)
                        ? "bg-blue-400 shadow-lg shadow-blue-400/50"
                        : "bg-gray-500 group-hover:bg-blue-400"
                    }
                  `}
                  ></div>
                </div>

                {/* Decorative curved element */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-tl-full transition-all duration-300 group-hover:from-blue-500/10"></div>
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile header */}
        <div className="lg:hidden bg-gray-800/50 backdrop-blur-xl border-b border-gray-700/30 p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-3 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FaBars />
            </button>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">⚡</span>
              </div>
              <span className="text-white font-semibold">Admin</span>
            </div>
          </div>
        </div>

        <main className="flex-1 p-6 lg:p-8 overflow-y-auto text-white">
          {isChildRouteActive ? (
            <div className="animate-fade-in">
              <Outlet />
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 mb-8">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/5 to-purple-600/5 rounded-full -ml-12 -mb-12"></div>

                <div className="relative text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25">
                    <span className="text-2xl">🎛️</span>
                  </div>

                  <h1 className="text-3xl font-bold text-white mb-3">
                    {t("admin_dashboard_page_title")}
                  </h1>
                  <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    {t("admin_dashboard_page_subtitle")}
                  </p>
                </div>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menu.slice(0, 9).map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-600/50 group-hover:bg-gradient-to-br group-hover:from-blue-500/20 group-hover:to-purple-600/20 rounded-xl flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                          {item.label}
                        </h3>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-tl-full transition-all duration-300 group-hover:from-blue-500/10"></div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
