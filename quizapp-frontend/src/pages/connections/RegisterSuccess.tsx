import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const RegisterSuccess = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(100);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress <= 0) {
          clearInterval(interval);
          setProgress(0);
          navigate("/login", { replace: true });
          return 0;
        }
        return prevProgress - 1.6667;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="border border-white/2 bg-[#0f172a] p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-purple-500 mb-6">
          {t("register_page_success_title")}
        </h1>
        <p className="text-gray-400 text-lg mb-4">
          {t("register_page_success_message_1")} <br />
          {t("register_page_success_message_2")}
        </p>
        <div className="w-full h-2 bg-gray-700 rounded overflow-hidden">
          <div
            className="h-full bg-purple-600 animate-pulse transition-all duration-300 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default RegisterSuccess;
