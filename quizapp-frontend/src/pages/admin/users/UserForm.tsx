import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../api/api";
import { Button } from "../../components/buttons";

interface UserFormData {
  name: string;
  email: string;
  role: string;
  password?: string;
}
export default function UserForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState<UserFormData>({
    name: "",
    email: "",
    role: "USER",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isEditing && id) {
      api
        .get(`/users/${id}`)
        .then((res) => {
          setFormData({
            name: res.data.name,
            email: res.data.email,
            role: res.data.role,
          });
        })
        .catch((err) => {
          console.error(t("admin_user_form_page_error_loading_user"), err);
          setError(t("admin_user_form_page_error_loading_user"));
        });
    }
  }, [isEditing, id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isEditing) {
        const updateData = { ...formData };
        if (!updateData.password) {
          delete updateData.password;
        }
        await api.patch(`/users/${id}`, updateData);
      } else {
        await api.post("/users", formData);
      }
      navigate("/admin/users");
    } catch (err: any) {
      setError(
        err.response?.data?.message || 
        err.response?.data?.error || 
        `${t("admin_user_form_page_error_saving_user")} (${err.response?.status}: ${err.message})`
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center text-white text-xl font-bold shadow-lg">
            👥
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">
              {isEditing ? t("admin_user_form_page_editing_user") : t("admin_user_form_page_new_user")}
            </h1>
            <p className="text-gray-400 mt-1">
              {isEditing ? t("admin_user_form_page_editing_user_description") : t("admin_user_form_page_new_user_description")}
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-violet-500/5 rounded-full -mr-16 -mt-16"></div>
          
          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t("admin_user_form_page_name_label")}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-purple-500/50 focus:bg-white/10 transition-all duration-200 outline-none"
                placeholder={t("admin_user_form_page_name_placeholder")}
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t("admin_user_form_page_email_label")}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-purple-500/50 focus:bg-white/10 transition-all duration-200 outline-none"
                placeholder={t("admin_user_form_page_email_placeholder")}
              />
            </div>

            {/* Role Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t("admin_user_form_page_role_label")}
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-purple-500/50 focus:bg-white/10 transition-all duration-200 outline-none"
              >
                <option value="USER" className="bg-gray-800">{t("admin_user_form_page_role_user")}</option>
                <option value="ADMIN" className="bg-gray-800">{t("admin_user_form_page_role_admin")}</option>
              </select>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {isEditing ? t("admin_user_form_page_new_password_label") : t("admin_user_form_page_password_label")}
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required={!isEditing}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-purple-500/50 focus:bg-white/10 transition-all duration-200 outline-none"
                placeholder={isEditing ? t("admin_user_form_page_new_password_placeholder") : t("admin_user_form_page_password_placeholder")}
              />
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="secondary"
                onClick={() => navigate("/admin/users")}
                disabled={loading}
                className="flex-1"
              >
                {t("admin_user_form_page_back_button")}
              </Button>
              <Button
                type="submit"
                variant="primary"
                disabled={loading}
                className="flex-1"
              >
                {loading ? t("admin_user_form_page_saving") : isEditing ? t("admin_user_form_page_update_button") : t("admin_user_form_page_create_button")}
              </Button>
            </div>
          </form>
        </div>

        {/* Preview Card */}
        <div className="mt-8 relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-violet-500/5 rounded-full -mr-16 -mt-16"></div>
          
          <h3 className="text-xl font-bold text-white mb-4">{t("admin_user_form_page_preview_title")}</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-gray-400">👤</span>
              <span className="text-white font-medium">
                {formData.name || t("admin_user_form_page_name_placeholder")}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-400">📧</span>
              <span className="text-gray-300">
                {formData.email || t("admin_user_form_page_email_placeholder")}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-400">🔑</span>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                formData.role === 'ADMIN' 
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/20' 
                  : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/20'
              }`}>
                {formData.role === 'ADMIN' ? '👑' : '👤'} {formData.role === 'ADMIN' ? t("admin_user_form_page_role_admin") : t("admin_user_form_page_role_user")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
