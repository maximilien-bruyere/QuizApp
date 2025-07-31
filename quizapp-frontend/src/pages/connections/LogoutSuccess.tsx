import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LogoutSuccess = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(100);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress <= 0) {
          clearInterval(interval);
          navigate("/login", { replace: true });
          return 0;
        }
        return prevProgress - 1.6667;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4">
      <div className="border border-white/20 bg-[#0f172a] p-6 md:p-8 lg:p-10 rounded-2xl shadow-xl w-full max-w-sm md:max-w-md lg:max-w-lg text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-4 md:mb-6">
          {t("logout_success_page_title")}
        </h1>
        <p className="text-gray-400 text-sm md:text-base lg:text-lg mb-4 md:mb-6 leading-relaxed">
          {t("logout_success_page_message")}
          <br />
          {t("logout_success_page_rediction_message")}
        </p>

        <div className="w-full h-2 md:h-3 bg-gray-700 rounded overflow-hidden">
          <div
            className="h-full bg-blue-600 animate-pulse transition-all duration-300 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default LogoutSuccess;
