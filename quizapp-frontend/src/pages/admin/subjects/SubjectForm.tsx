import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../api/api";
import { Button } from "../../components/buttons";

interface SubjectFormData {
  name: string;
}

export default function SubjectForm() {
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
          console.error("Erreur chargement sujet :", err);
          setError("Erreur lors du chargement du sujet");
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
      console.error("Erreur sauvegarde sujet :", err);
      setError(err.response?.data?.message || "Erreur lors de la sauvegarde");
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
              {isEditing ? "Modifier le sujet" : "Nouveau sujet"}
            </h1>
            <p className="text-gray-400 mt-1">
              {isEditing ? "Modifiez les informations du sujet" : "Créez un nouveau sujet"}
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
                Nom du sujet
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-pink-500/50 focus:bg-white/10 transition-all duration-200 outline-none"
                placeholder="Ex: Mathématiques, Histoire, Sciences..."
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
                Retour
              </Button>
              <Button
                type="submit"
                variant="primary"
                disabled={loading}
                className="flex-1"
              >
                {loading ? "Sauvegarde..." : isEditing ? "Modifier" : "Créer"}
              </Button>
            </div>
          </form>
        </div>

        {/* Preview Card */}
        <div className="mt-8 relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/5 to-rose-500/5 rounded-full -mr-16 -mt-16"></div>
          
          <h3 className="text-xl font-bold text-white mb-4">Aperçu</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-gray-400">🧠</span>
              <span className="text-white font-medium">
                {formData.name || "Nom du sujet"}
              </span>
            </div>
            <div className="text-gray-400 text-sm">
              Ce sujet sera disponible pour créer des catégories et des quiz
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
