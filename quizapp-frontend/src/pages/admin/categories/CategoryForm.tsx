import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../api/api";
import { Button } from "../../components/buttons";
import { useTranslation } from "react-i18next";

interface CategoryFormData {
  name: string;
  subject_id: number | "";
}

interface Subject {
  subject_id: number;
  name: string;
}

export default function CategoryForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState<CategoryFormData>({
    name: "",
    subject_id: "",
  });

  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.get("/subjects").then((res) => setSubjects(res.data));

    if (isEditing && id) {
      api
        .get(`/categories/${id}`)
        .then((res) => {
          setFormData({
            name: res.data.name,
            subject_id: res.data.subject_id,
          });
        })
        .catch((err) => {
          console.error(t("admin_category_form_page_error_loading_cat"), err);
          setError(t("admin_category_form_page_error_loading_cat"));
        });
    }
  }, [isEditing, id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isEditing) {
        await api.patch(`/categories/${id}`, formData);
      } else {
        await api.post("/categories", formData);
      }
      navigate("/admin/categories");
    } catch (err: any) {
      console.error(t("admin_category_form_page_error_saving_cat"), err);
      setError(err.response?.data?.message || t("admin_category_form_page_error_saving_cat"));
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "subject_id" ? Number(value) : value
    }));
  };

  const selectedSubject = subjects.find(s => s.subject_id === formData.subject_id);

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-sm border border-yellow-500/30 flex items-center justify-center text-white text-xl font-bold shadow-lg">
            📂
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">
              {isEditing ? t("admin_category_form_page_editing_category") : t("admin_category_form_page_new_category")}
            </h1>
            <p className="text-gray-400 mt-1">
              {isEditing ? t("admin_category_form_page_editing_category_description") : t("admin_category_form_page_new_category_description")}
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/5 to-amber-500/5 rounded-full -mr-16 -mt-16"></div>
          
          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t("admin_category_form_page_name_label")}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-yellow-500/50 focus:bg-white/10 transition-all duration-200 outline-none"
                placeholder={t("admin_category_form_page_name_placeholder")}
              />
            </div>

            {/* Subject Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t("admin_category_form_page_subject_label")}
              </label>
              <select
                name="subject_id"
                value={formData.subject_id}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-yellow-500/50 focus:bg-white/10 transition-all duration-200 outline-none"
              >
                <option value="" className="bg-gray-800">{t("admin_category_form_page_subject_placeholder")}</option>
                {subjects.map(subject => (
                  <option key={subject.subject_id} value={subject.subject_id} className="bg-gray-800">
                    {subject.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="secondary"
                onClick={() => navigate("/admin/categories")}
                disabled={loading}
                className="flex-1"
              >
                Retour
              </Button>
              <Button
                type="submit"
                variant="primary"
                disabled={loading}
                className="flex-1"
              >
                {loading ? t('admin_category_form_page_saving') : isEditing ? t('admin_category_form_page_update_button') : t('admin_category_form_page_create_button')}
              </Button>
            </div>
          </form>
        </div>

        {/* Preview Card */}
        <div className="mt-8 relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/5 to-amber-500/5 rounded-full -mr-16 -mt-16"></div>

          <h3 className="text-xl font-bold text-white mb-4">{t("admin_category_form_page_preview_title")}</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-gray-400">📂</span>
              <span className="text-white font-medium">
                {formData.name || t("admin_category_form_page_name_label")}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-400">🧠</span>
              <span className="text-gray-300">
                {selectedSubject?.name || t("admin_category_form_page_subject_label")}
              </span>
            </div>
            <div className="text-gray-400 text-sm">
              {t("admin_category_form_page_preview_description")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
