import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { register } from "../../api/auth";
import LoadingSpinner from "../components/others/LoadingSpinner";
import { useAuth } from "../../api/useAuth";
import { Button } from "../components/buttons";
import { useTranslation } from "react-i18next";

const Register = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAuth();
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && isAuthenticated) {
      navigate("/register-success", { replace: true });
    }
  }, [isAuthenticated, loading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(name, email, password);
      navigate("/register-success", { replace: true });
    } catch (err) {
      setError("Erreur lors de la création du compte");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4">
      <div className="border border-white/20 bg-[#0f172a] p-6 md:p-8 lg:p-10 rounded-2xl shadow-xl w-full max-w-sm md:max-w-md lg:max-w-lg">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-6 md:mb-8">
          {t("register_page_title")}
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
          <input
            type="text"
            placeholder={t("register_page_name_label")}
            className="bg-gray-800 border border-gray-700 text-white rounded-lg p-3 md:p-4 text-sm md:text-base outline-none transition-all"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder={t("register_page_email_label")}
            className="bg-gray-800 border border-gray-700 text-white rounded-lg p-3 md:p-4 text-sm md:text-base outline-none transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder={t("register_page_password_label")}
            className="bg-gray-800 border border-gray-700 text-white rounded-lg p-3 md:p-4 text-sm md:text-base outline-none transition-all"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-500 text-center text-sm md:text-base">{error}</p>}

          <div className="flex items-start gap-2 text-xs md:text-sm text-gray-400">
            <input
              type="checkbox"
              id="terms"
              required
              className="accent-purple-500 mt-1 scale-110 md:scale-125"
            />
            <label htmlFor="terms" className="leading-relaxed">
              {t("register_page_conditions_message_1")} &nbsp;
              <NavLink
                to="/terms"
                className="text-purple-400 underline underline-offset-4 hover:text-purple-300 active:text-purple-500 transition duration-200"
              >
                {t("register_page_conditions_message_2")}
              </NavLink>
            </label>
          </div>

          <Button
            type="submit"
            variant="modification"
            fullWidth
          >
            {t("register_page_submit_button")}
          </Button>

          <div className="flex flex-col gap-2 md:gap-3 mt-4 md:mt-6 text-center text-gray-400 text-xs md:text-sm">
            <NavLink
              to="/login"
              className="hover:underline hover:cursor-pointer hover:text-purple-700 transition duration-200 active:text-blue-500"
            >
              {t("register_page_already_account_message")}
            </NavLink>
            <NavLink
              to="/"
              className="hover:underline hover:text-gray-300"
            >
              {t("register_page_back_to_home")}
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;


