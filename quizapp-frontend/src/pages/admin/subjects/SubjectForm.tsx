import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../api/api";
import { Button } from "../../components/buttons";
import { useTranslation } from "react-i18next";

interface SubjectFormData {
  name: string;
}

export default function SubjectForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState<SubjectFormData>({
    name: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isEditing && id) {
      api
        .get(`/subjects/${id}`)
        .then((res) => {
          setFormData({
            name: res.data.name,
          });
        })
        .catch((err) => {
          console.error(t("admin_subject_form_page_error_loading_subject"), err);
          setError(t("admin_subject_form_page_error_loading_subject"));
        });
    }
  }, [isEditing, id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isEditing) {
        await api.patch(`/subjects/${id}`, formData);
      } else {
        await api.post("/subjects", formData);
      }
      navigate("/admin/subjects");
    } catch (err: any) {
      console.error(t("admin_subject_form_page_error_saving_subject"), err);
      setError(err.response?.data?.message || t("admin_subject_form_page_error_saving_subject"));
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-sm border border-pink-500/30 flex items-center justify-center text-white text-xl font-bold shadow-lg">
            🧠
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">
              {isEditing ? t("admin_subject_form_page_editing_subject") : t("admin_subject_form_page_new_subject")}
            </h1>
            <p className="text-gray-400 mt-1">
              {isEditing ? t("admin_subject_form_page_editing_subject_description") : t("admin_subject_form_page_new_subject_description")}
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/5 to-rose-500/5 rounded-full -mr-16 -mt-16"></div>
          
          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t("admin_subject_form_page_name_label")}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-pink-500/50 focus:bg-white/10 transition-all duration-200 outline-none"
                placeholder={t("admin_subject_form_page_name_placeholder")}
              />
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="secondary"
                onClick={() => navigate("/admin/subjects")}
                disabled={loading}
                className="flex-1"
              >
                {t("admin_subject_form_page_back_button")}
              </Button>
              <Button
                type="submit"
                variant="primary"
                disabled={loading}
                className="flex-1"
              >
                {loading ? t("admin_subject_form_page_saving") : isEditing ? t("admin_subject_form_page_update_button") : t("admin_subject_form_page_create_button")}
              </Button>
            </div>
          </form>
        </div>

        {/* Preview Card */}
        <div className="mt-8 relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/5 to-rose-500/5 rounded-full -mr-16 -mt-16"></div>
          
          <h3 className="text-xl font-bold text-white mb-4">{t("admin_subject_form_page_preview_title")}</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-gray-400">🧠</span>
              <span className="text-white font-medium">
                {formData.name || t("admin_subject_form_page_name_label")}
              </span>
            </div>
            <div className="text-gray-400 text-sm">
              {t("admin_subject_form_page_preview_description")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
