import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";


const AdminSettings = () => {
  const { t } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language || "fr");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    setSelectedLang(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-500/20 to-gray-500/20 backdrop-blur-sm border border-gray-500/30 flex items-center justify-center text-white text-xl font-bold shadow-lg">
            ⚙️
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">
              {t("admin_settings_page_title")}
            </h1>
            <p className="text-gray-400 mt-1">
              {t("admin_settings_page_subtitle")}
            </p>
          </div>
        </div>
      </div>

        <section className="bg-white/5 p-6 rounded-xl border border-white/10 w-2xl">
          <h2 className="text-lg font-semibold text-white mb-2">{t("admin_settings_page_creator_title")}</h2>
          <div className="text-white text-sm">{t("admin_settings_page_creator_name")}</div>
          <div className="text-white text-sm">{t("admin_settings_page_creator_infos")}</div>
          <div className="text-white text-sm">{t("admin_settings_page_creator_project")}</div>
        </section>

        {/* Section Outils utilisés */}
        <section className="bg-white/5 p-6 rounded-xl border border-white/10 w-2xl">
          <h2 className="text-lg font-semibold text-white mb-2">{t("admin_settings_page_tools_title")}</h2>
          <ul className="list-disc pl-6 text-white text-sm space-y-1">
            <li>{t("admin_settings_page_tools_ia")}</li>
            <li>{t("admin_settings_page_tools_frontend")}</li>
            <li>{t("admin_settings_page_tools_backend")}</li>
            <li>{t("admin_settings_page_tools_database")}</li>
            <li>{t("admin_settings_page_tools_dependencies")}</li>
          </ul>
        </section>

        {/* Section Paramètres modifiables */}
        <section className="bg-white/5 p-6 rounded-xl border border-white/10 w-2xl">
          <h2 className="text-lg font-semibold text-white mb-2">{t("admin_settings_page_settings_title")}</h2>
          <div className="mb-4">
            <label htmlFor="lang-select" className="block text-white text-sm mb-2">{t("admin_settings_page_language_label")}</label>
            <select
              id="lang-select"
              value={selectedLang}
              onChange={handleLanguageChange}
              className="bg-gray-800 text-white rounded px-3 py-2 border border-white/20"
            >
              <option value="fr">{t("admin_settings_page_language_fr")}</option>
              <option value="en">{t("admin_settings_page_language_en")}</option>
            </select>
          </div>
        </section>
      </div>
  );
};

export default AdminSettings;
