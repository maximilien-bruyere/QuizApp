import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import { useAuthContext } from "../components/contexts/AuthContext";
import { Button } from "../components/buttons";
import { useTranslation } from "react-i18next";


const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { refreshAuth } = useAuthContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      localStorage.setItem("token", data.access_token);
      refreshAuth();
      navigate("/");
    } catch (err) {
      setError(t("login_page_error"));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4">
      <div className="border border-white/20 bg-[#0f172a] p-6 md:p-8 lg:p-10 rounded-2xl shadow-xl w-full max-w-sm md:max-w-md lg:max-w-lg">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-6 md:mb-8">
          {t("login_page_title")}
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
          <input
            type="email"
            placeholder={t("login_page_email_label")}
            className="bg-gray-800 border border-gray-700 text-white rounded-lg p-3 md:p-4 text-sm md:text-base outline-none transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder={t("login_page_password_label")}
            className="bg-gray-800 border border-gray-700 text-white rounded-lg p-3 md:p-4 text-sm md:text-base outline-none transition-all"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-500 text-center text-sm md:text-base">{error}</p>}

          <Button
            type="submit"
            variant="primary"
            fullWidth
          >
            {t("login_page_button")}
          </Button>

          <div className="flex flex-col gap-2 md:gap-3 mt-4 md:mt-6 text-center text-gray-400 text-xs md:text-sm">
            <NavLink
              to="/register"
              className="hover:underline hover:text-blue-500 text-white hover:cursor-pointer transition duration-200 active:text-purple-600"
            >
              {t("login_page_no_account")}
            </NavLink>
            <NavLink
              to="/"
              className="hover:underline hover:text-gray-400 text-white hover:cursor-pointer transition duration-200 active:text-gray-300"
            >
              {t("login_page_back_to_home")}
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;


