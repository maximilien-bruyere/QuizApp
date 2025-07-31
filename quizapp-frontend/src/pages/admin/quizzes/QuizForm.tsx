
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../api/api";
import { Button } from "../../components/buttons";

const QUESTION_TYPES = [
  { value: "QCM", label: "QCM" },
  { value: "QCU", label: "QCU" },
  { value: "MATCHING", label: "Appariement" },
];

interface Option {
  option_id?: number;
  text: string;
  is_correct: boolean;
}
interface Pair {
  left: string;
  right: string;
}
interface Question {
  question_id?: number;
  content: string;
  type: string;
  image_url?: string;
  explanation?: string;
  options: Option[];
  pairs: Pair[];
}
interface QuizFormData {
  title: string;
  description: string;
  category_id: number | "";
  time_limit: number | "";
  is_exam_mode: boolean;
  questions: Question[];
}
interface Category {
  category_id: number;
  name: string;
  subject: { name: string };
}

export default function QuizForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState<QuizFormData>({
    title: "",
    description: "",
    category_id: "",
    time_limit: "",
    is_exam_mode: false,
    questions: [],
  });

  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Charger les catégories
    api.get("/categories").then((res) => setCategories(res.data));

    if (isEditing && id) {
      api
        .get(`/quizzes/${id}`)
        .then((res) => {
          setFormData({
            title: res.data.title,
            description: res.data.description,
            category_id: res.data.category_id,
            time_limit: res.data.time_limit,
            is_exam_mode: res.data.is_exam_mode ?? false,
            questions: (res.data.questions || []).map((q: any) => ({
              question_id: q.question_id,
              content: q.content,
              type: q.type,
              image_url: q.image_url || "",
              explanation: q.explanation || "",
              options: (q.options || []).map((opt: any) => ({
                option_id: opt.option_id,
                text: opt.text,
                is_correct: opt.is_correct,
              })),
              pairs: (q.pairs || []).map((p: any) => ({
                left: p.left,
                right: p.right,
              })),
            })),
          });
        })
        .catch((err) => {
          console.error("Erreur chargement quiz :", err);
          setError("Erreur lors du chargement du quiz");
        });
    }
  }, [isEditing, id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const payload = {
        ...formData,
        questions: formData.questions.map((q) => ({
          ...q,
          options: q.options.map((opt) => ({
            text: opt.text,
            is_correct: opt.is_correct,
          })),
          pairs: q.pairs.map((p) => ({ left: p.left, right: p.right })),
        })),
      };
      if (isEditing) {
        await api.patch(`/quizzes/${id}`, payload);
      } else {
        await api.post("/quizzes", payload);
      }
      navigate("/admin/quizzes");
    } catch (err: any) {
      console.error("Erreur sauvegarde quiz :", err);
      setError(err.response?.data?.message || "Erreur lors de la sauvegarde");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let checked = false;
    if (type === "checkbox") {
      checked = (e.target as HTMLInputElement).checked;
    }
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : (name === "category_id" || name === "time_limit" ? Number(value) : value)
    }));
  };

  // Upload image pour une question
  const handleImageUpload = async (qIdx: number, file: File) => {
    const formDataImg = new FormData();
    formDataImg.append("file", file);
    try {
      // Adapter l'URL selon ton backend
      const res = await api.post("/upload/question-image", formDataImg, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (res.data?.url) {
        handleQuestionChange(qIdx, "image_url", res.data.url);
      }
    } catch (err) {
      alert("Erreur lors de l'upload de l'image");
    }
  };

  // Gestion dynamique des questions
  const handleQuestionChange = (idx: number, field: string, value: any) => {
    setFormData((prev) => {
      const questions = [...prev.questions];
      questions[idx] = { ...questions[idx], [field]: value };
      // Reset options/pairs si type change
      if (field === "type") {
        questions[idx].options = [];
        questions[idx].pairs = [];
      }
      return { ...prev, questions };
    });
  };
  const handleAddQuestion = () => {
    setFormData((prev) => ({
      ...prev,
      questions: [
        ...prev.questions,
        { content: "", type: "QCM", options: [], pairs: [], image_url: "", explanation: "" },
      ],
    }));
  };
  const handleRemoveQuestion = (idx: number) => {
    setFormData((prev) => ({
      ...prev,
      questions: prev.questions.filter((_, i) => i !== idx),
    }));
  };
  // Gestion des options pour QCM/QCU
  const handleOptionChange = (qIdx: number, oIdx: number, field: string, value: any) => {
    setFormData((prev) => {
      const questions = [...prev.questions];
      const options = [...questions[qIdx].options];
      options[oIdx] = { ...options[oIdx], [field]: value };
      questions[qIdx].options = options;
      return { ...prev, questions };
    });
  };
  const handleAddOption = (qIdx: number) => {
    setFormData((prev) => {
      const questions = [...prev.questions];
      questions[qIdx].options = [
        ...questions[qIdx].options,
        { text: "", is_correct: false },
      ];
      return { ...prev, questions };
    });
  };
  const handleRemoveOption = (qIdx: number, oIdx: number) => {
    setFormData((prev) => {
      const questions = [...prev.questions];
      questions[qIdx].options = questions[qIdx].options.filter((_, i) => i !== oIdx);
      return { ...prev, questions };
    });
  };
  // Gestion des paires pour appariement
  const handlePairChange = (qIdx: number, pIdx: number, field: string, value: any) => {
    setFormData((prev) => {
      const questions = [...prev.questions];
      const pairs = [...questions[qIdx].pairs];
      pairs[pIdx] = { ...pairs[pIdx], [field]: value };
      questions[qIdx].pairs = pairs;
      return { ...prev, questions };
    });
  };
  const handleAddPair = (qIdx: number) => {
    setFormData((prev) => {
      const questions = [...prev.questions];
      questions[qIdx].pairs = [
        ...questions[qIdx].pairs,
        { left: "", right: "" },
      ];
      return { ...prev, questions };
    });
  };
  const handleRemovePair = (qIdx: number, pIdx: number) => {
    setFormData((prev) => {
      const questions = [...prev.questions];
      questions[qIdx].pairs = questions[qIdx].pairs.filter((_, i) => i !== pIdx);
      return { ...prev, questions };
    });
  };

  const selectedCategory = categories.find(c => c.category_id === formData.category_id);

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-rose-500/20 backdrop-blur-sm border border-red-500/30 flex items-center justify-center text-white text-xl font-bold shadow-lg">
            ❓
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">
              {isEditing ? "Modifier le quiz" : "Nouveau quiz"}
            </h1>
            <p className="text-gray-400 mt-1">
              {isEditing ? "Modifiez les informations du quiz" : "Créez un nouveau quiz"}
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/5 to-rose-500/5 rounded-full -mr-16 -mt-16"></div>
          
          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Titre du quiz
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-red-500/50 focus:bg-white/10 transition-all duration-200 outline-none"
                placeholder="Ex: Quiz de Mathématiques - Niveau 1"
              />
            </div>

            {/* Description Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-red-500/50 focus:bg-white/10 transition-all duration-200 outline-none resize-none"
                placeholder="Décrivez le contenu et les objectifs de ce quiz..."
              />
            </div>

            {/* Category Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Catégorie
              </label>
              <select
                name="category_id"
                value={formData.category_id}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-red-500/50 focus:bg-white/10 transition-all duration-200 outline-none"
              >
                <option value="" className="bg-gray-800">Sélectionnez une catégorie</option>
                {categories.map(category => (
                  <option key={category.category_id} value={category.category_id} className="bg-gray-800">
                    {category.name} ({category.subject.name})
                  </option>
                ))}
              </select>
            </div>

            {/* Time Limit Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Temps limite (minutes)
              </label>
              <input
                type="number"
                name="time_limit"
                value={formData.time_limit}
                onChange={handleChange}
                min="1"
                max="180"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-red-500/50 focus:bg-white/10 transition-all duration-200 outline-none"
                placeholder="Ex: 30"
              />
            </div>
            {/* Mode examen */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="is_exam_mode"
                checked={formData.is_exam_mode}
                onChange={handleChange}
                id="is_exam_mode"
                className="h-5 w-5 text-red-500 focus:ring-red-500 border-gray-300 rounded"
              />
              <label htmlFor="is_exam_mode" className="text-gray-300 select-none cursor-pointer">
                Mode examen (aucune correction ni score affiché à la fin)
              </label>
            </div>

            {/* Questions dynamiques */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-bold text-white">Questions</h2>
                <Button type="button" variant="primary" onClick={handleAddQuestion}>
                  + Ajouter une question
                </Button>
              </div>
              {formData.questions.length === 0 && (
                <div className="text-gray-400 text-sm mb-4">Aucune question ajoutée.</div>
              )}
              {formData.questions.map((q, qIdx) => (
                <div key={qIdx} className="mb-8 p-4 rounded-xl bg-white/10 border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white font-semibold">Question {qIdx + 1}</span>
                    <Button type="button" variant="danger" onClick={() => handleRemoveQuestion(qIdx)} size="sm">
                      Supprimer
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Type</label>
                      <select
                        value={q.type}
                        onChange={e => handleQuestionChange(qIdx, "type", e.target.value)}
                        className="w-full px-3 py-2 rounded bg-white/5 border border-white/10 text-white"
                      >
                        {QUESTION_TYPES.map(t => (
                          <option key={t.value} value={t.value}>{t.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Contenu</label>
                      <input
                        type="text"
                        value={q.content}
                        onChange={e => handleQuestionChange(qIdx, "content", e.target.value)}
                        className="w-full px-3 py-2 rounded bg-white/5 border border-white/10 text-white"
                        placeholder="Intitulé de la question"
                      />
                    </div>
                  </div>
                  {/* QCM/QCU: options */}
                  {(q.type === "QCM" || q.type === "QCU") && (
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-300 font-semibold">Options</span>
                        <Button type="button" variant="primary" onClick={() => handleAddOption(qIdx)} size="sm">
                          + Ajouter une option
                        </Button>
                      </div>
                      {q.options.length === 0 && <div className="text-gray-400 text-xs mb-2">Aucune option.</div>}
                      {q.options.map((opt, oIdx) => (
                        <div key={oIdx} className="flex items-center gap-2 mb-2">
                          <input
                            type="text"
                            value={opt.text}
                            onChange={e => handleOptionChange(qIdx, oIdx, "text", e.target.value)}
                            className="flex-1 px-2 py-1 rounded bg-white/10 border border-white/20 text-white"
                            placeholder={`Option ${oIdx + 1}`}
                          />
                          <label className="flex items-center gap-1 text-xs text-gray-300">
                            <input
                              type={q.type === "QCM" ? "checkbox" : "radio"}
                              checked={!!opt.is_correct}
                              onChange={e => handleOptionChange(qIdx, oIdx, "is_correct", q.type === "QCM" ? e.target.checked : true)}
                              name={`correct-${qIdx}`}
                            />
                            Correcte
                          </label>
                          <Button type="button" variant="danger" onClick={() => handleRemoveOption(qIdx, oIdx)} size="sm">
                            Supprimer
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* Appariement: paires */}
                  {q.type === "MATCHING" && (
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-300 font-semibold">Paires</span>
                        <Button type="button" variant="primary" onClick={() => handleAddPair(qIdx)} size="sm">
                          + Ajouter une paire
                        </Button>
                      </div>
                      {q.pairs.length === 0 && <div className="text-gray-400 text-xs mb-2">Aucune paire.</div>}
                      {q.pairs.map((pair, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 mb-2">
                          <input
                            type="text"
                            value={pair.left}
                            onChange={e => handlePairChange(qIdx, pIdx, "left", e.target.value)}
                            className="flex-1 px-2 py-1 rounded bg-white/10 border border-white/20 text-white"
                            placeholder="Gauche"
                          />
                          <span className="text-gray-400">↔</span>
                          <input
                            type="text"
                            value={pair.right}
                            onChange={e => handlePairChange(qIdx, pIdx, "right", e.target.value)}
                            className="flex-1 px-2 py-1 rounded bg-white/10 border border-white/20 text-white"
                            placeholder="Droite"
                          />
                          <Button type="button" variant="danger" onClick={() => handleRemovePair(qIdx, pIdx)} size="sm">
                            Supprimer
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* Explication et image */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Explication (optionnel)</label>
                      <input
                        type="text"
                        value={q.explanation || ""}
                        onChange={e => handleQuestionChange(qIdx, "explanation", e.target.value)}
                        className="w-full px-2 py-1 rounded bg-white/10 border border-white/20 text-white"
                        placeholder="Explication affichée après la correction"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Image (optionnel)</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={e => {
                          if (e.target.files && e.target.files[0]) {
                            handleImageUpload(qIdx, e.target.files[0]);
                          }
                        }}
                        className="w-full px-2 py-1 rounded bg-white/10 border border-white/20 text-white"
                      />
                      {q.image_url && (
                        <img src={q.image_url} alt="aperçu" className="mt-2 max-h-32 rounded border border-white/20" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="secondary"
                onClick={() => navigate("/admin/quizzes")}
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
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/5 to-rose-500/5 rounded-full -mr-16 -mt-16"></div>
          <h3 className="text-xl font-bold text-white mb-4">Aperçu</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-gray-400">❓</span>
              <span className="text-white font-medium">
                {formData.title || "Titre du quiz"}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-400">📝</span>
              <span className="text-gray-300">
                {formData.description || "Description du quiz"}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-400">📂</span>
              <span className="text-gray-300">
                {selectedCategory?.name || "Catégorie"}
                {selectedCategory && (
                  <span className="text-gray-500 ml-2">({selectedCategory.subject.name})</span>
                )}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-400">⏱️</span>
              <span className="text-gray-300">
                {formData.time_limit ? `${formData.time_limit} minutes` : "Temps limite"}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-400">🧪</span>
              <span className="text-gray-300">
                {formData.is_exam_mode ? "Mode examen activé" : "Mode examen désactivé"}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-400">📋</span>
              <span className="text-gray-300">
                {formData.questions.length} question{formData.questions.length > 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
