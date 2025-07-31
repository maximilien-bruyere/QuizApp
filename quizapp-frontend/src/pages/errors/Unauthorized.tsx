import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Unauthorized = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-6">
      <h1 className="text-5xl font-bold text-red-500 mb-6">{t("unauthorized_found_page_title")}</h1>
      <p className="text-xl mb-4">{t("unauthorized_page_message_1")}</p>
      <p className="text-gray-400 mb-8">{t("unauthorized_page_message_2")}</p>
      <NavLink to="/" className="text-purple-400 hover:underline">
        {t("unauthorized_page_back_to_home")}
      </NavLink>
    </div>
  );
}

export default Unauthorized;
