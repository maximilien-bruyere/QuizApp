import { useState, useEffect, ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../api/api";
import { Button } from "../../components/buttons";

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
  difficulty: string;
  time_limit: number;
  is_exam_mode: boolean;
  subject_id: number | "";
  category_id: number | "";
  questions: Question[];
}
interface Category {
  category_id: number;
  name: string;
  subject_id: number;
}
interface Subject {
  subject_id: number;
  name: string;
}

const QUESTION_TYPES = [
  { value: "MULTIPLE", label: "QCM" },
  { value: "SINGLE", label: "QCU" },
  { value: "MATCHING", label: "Appariement" },
];



export default function QuizForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = !!id;
  const DIFFICULTY_LEVELS = [
    { value: "FACILE", label: "🟢" + t("admin_quiz_form_page_easy") },
    { value: "MOYEN", label: "🟡" + t("admin_quiz_form_page_medium") },
    { value: "DIFFICILE", label: "🔴" + t("admin_quiz_form_page_hard") },
  ];
  const [categories, setCategories] = useState<Category[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<QuizFormData>({
    title: "",
    description: "",
    difficulty: "MOYEN",
    time_limit: 30,
    is_exam_mode: false,
    subject_id: "",
    category_id: "",
    questions: [],
  });
  // Pagination question courante
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);

  useEffect(() => {
    api.get("/subjects").then((res) => setSubjects(res.data));
    api.get("/categories").then((res) => setCategories(res.data));
    if (isEditing && id) {
      api.get(`/quizzes/${id}`).then((res) => {
        setFormData({
          title: res.data.title,
          description: res.data.description,
          difficulty: res.data.difficulty || "MOYEN",
          time_limit: res.data.time_limit,
          is_exam_mode: res.data.is_exam_mode,
          subject_id: res.data.subject_id,
          category_id: res.data.category_id,
          questions: (res.data.questions || []).map((q: any) => ({
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
      });
    }
  }, [isEditing, id]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let checked = false;
    if (type === "checkbox") {
      checked = (e.target as HTMLInputElement).checked;
    }
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : (name === "time_limit" ? Number(value) : value),
    }));
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const catId = e.target.value === "" ? "" : Number(e.target.value);
    const cat = categories.find((c) => c.category_id === catId);
    setFormData((prev) => ({
      ...prev,
      category_id: catId,
      subject_id: cat ? cat.subject_id : "",
    }));
  };

  // Question Handlers
  const handleAddQuestion = () => {
    setFormData((prev) => {
      const newQuestions = [
        ...prev.questions,
        {
          content: "",
          type: "MULTIPLE",
          image_url: "",
          explanation: "",
          options: [{ text: "", is_correct: false }],
          pairs: [],
        },
      ];
      return {
        ...prev,
        questions: newQuestions,
      };
    });
  };
  const handleRemoveQuestion = (idx: number) => {
    setFormData((prev) => {
      const newQuestions = prev.questions.filter((_, i) => i !== idx);
      let newCurrentIdx = currentQuestionIdx;
      if (newQuestions.length === 0) newCurrentIdx = 0;
      else if (newCurrentIdx >= newQuestions.length) newCurrentIdx = newQuestions.length - 1;
      setCurrentQuestionIdx(newCurrentIdx);
      return {
        ...prev,
        questions: newQuestions,
      };
    });
  };
  const handleQuestionChange = (qIdx: number, field: string, value: any) => {
    setFormData((prev) => {
      const questions = [...prev.questions];
      questions[qIdx] = { ...questions[qIdx], [field]: value };
      if (field === "type") {
        questions[qIdx].options = [{ text: "", is_correct: false }];
        questions[qIdx].pairs = [];
      }
      return { ...prev, questions };
    });
  };

  // Option Handlers
  const handleAddOption = (qIdx: number) => {
    setFormData((prev) => {
      const questions = [...prev.questions];
      if (questions[qIdx].options.length < 6) {
        questions[qIdx].options.push({ text: "", is_correct: false });
      }
      return { ...prev, questions };
    });
  };
  const handleRemoveOption = (qIdx: number, oIdx: number) => {
    setFormData((prev) => {
      const questions = [...prev.questions];
      if (questions[qIdx].options.length > 1) {
        questions[qIdx].options = questions[qIdx].options.filter((_, i) => i !== oIdx);
      }
      return { ...prev, questions };
    });
  };
  const handleOptionChange = (qIdx: number, oIdx: number, field: string, value: any) => {
    setFormData((prev) => {
      const questions = [...prev.questions];
      const options = [...questions[qIdx].options];
      options[oIdx] = { ...options[oIdx], [field]: value };
      questions[qIdx].options = options;
      return { ...prev, questions };
    });
  };

  // Pair Handlers
  const handleAddPair = (qIdx: number) => {
    setFormData((prev) => {
      const questions = [...prev.questions];
      questions[qIdx].pairs.push({ left: "", right: "" });
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
  const handlePairChange = (qIdx: number, pIdx: number, field: string, value: any) => {
    setFormData((prev) => {
      const questions = [...prev.questions];
      const pairs = [...questions[qIdx].pairs];
      pairs[pIdx] = { ...pairs[pIdx], [field]: value };
      questions[qIdx].pairs = pairs;
      return { ...prev, questions };
    });
  };

  // Image upload
  const handleImageUpload = async (qIdx: number, file: File) => {
    const formDataImg = new FormData();
    formDataImg.append("file", file);
    try {
      const res = await api.post("/upload/question-image", formDataImg, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (res.data?.url) {
        handleQuestionChange(qIdx, "image_url", res.data.url);
      }
    } catch {
      alert(t("admin_quiz_form_page_error_upload_image"));
    }
  };

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
    } catch (err) {
      setError(t("admin_quiz_form_page_error_saving"));
    } finally {
      setLoading(false);
    }
  };

  const selectedCategory = categories.find((c) => c.category_id === formData.category_id);

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
              {isEditing ? t("admin_quiz_form_page_editing_quiz") : t("admin_quiz_form_page_new_quiz")}
            </h1>
            <p className="text-gray-400 mt-1">
              {isEditing ? t("admin_quiz_form_page_editing_quiz_description") : t("admin_quiz_form_page_new_quiz_description")}
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
                {t("admin_quiz_form_page_title_label")}
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-red-500/50 focus:bg-white/10 transition-all duration-200 outline-none"
                placeholder={t("admin_quiz_form_page_title_placeholder")}
              />
            </div>
            {/* Description Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t("admin_quiz_form_page_description_label")}
              </label>
              <textarea
                name="description"
                value={formData.description || ""}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-red-500/50 focus:bg-white/10 transition-all duration-200 outline-none resize-none"
                placeholder={t("admin_quiz_form_page_description_placeholder")}
              />
            </div>
            {/* Difficulty Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t("admin_quiz_form_page_difficulty_label")}
              </label>
              <select
                name="difficulty"
                value={formData.difficulty}
                onChange={handleChange}
                className="hover:cursor-pointer w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-red-500/50 focus:bg-white/10 transition-all duration-200 outline-none"
              >
                {DIFFICULTY_LEVELS.map((d) => (
                  <option className="bg-gray-800" key={d.value} value={d.value}>{d.label}</option>
                ))}
              </select>
            </div>
            {/* Category Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t("admin_quiz_form_page_category_label")}
              </label>
              <select
                name="category_id"
                value={formData.category_id}
                onChange={handleCategoryChange}
                required
                className="hover:cursor-pointer w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-red-500/50 focus:bg-white/10 transition-all duration-200 outline-none"
              >
                <option value="" className="bg-gray-800">{t("admin_quiz_form_page_category_placeholder")}</option>
                {categories.map(category => {
                  const subject = subjects.find(s => s.subject_id === category.subject_id);
                  return (
                    <option key={category.category_id} value={category.category_id} className="bg-gray-800">
                      {subject ? `${subject.name} - ${category.name}` : category.name}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* Time Limit Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t("admin_quiz_form_page_time_limit_label")}
              </label>
              <input
                type="number"
                name="time_limit"
                value={formData.time_limit}
                onChange={handleChange}
                min="1"
                max="180"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-red-500/50 focus:bg-white/10 transition-all duration-200 outline-none"
                placeholder={t("admin_quiz_form_page_time_limit_placeholder")}
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
                {t("admin_quiz_form_page_exam_mode_label")}
              </label>
            </div>
            {/* Questions dynamiques avec pagination */}
            <div className="mt-8">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-lg font-bold text-white flex-1">{t("admin_quiz_form_page_questions_title")}</h2>
                <Button
                  type="button"
                  variant="primary"
                  onClick={handleAddQuestion}
                  className="!px-4 !py-2 !rounded-lg !text-base !font-semibold"
                >
                  {t("admin_quiz_form_page_add_question_button")}
                </Button>
              </div>
              {formData.questions.length === 0 && (
                <div className="text-gray-400 text-sm mb-4">{t("admin_quiz_form_page_no_questions")}</div>
              )}
              {formData.questions.length > 0 && (
                <>
                  {/* Pagination */}
                  <div className="flex justify-around gap-2 mb-4 mt-8">
                    <div className="flex items-center justify-center gap-2">
                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      onClick={() => setCurrentQuestionIdx((idx) => Math.max(0, idx - 1))}
                      disabled={currentQuestionIdx === 0}
                    >
                      {t("admin_quiz_form_page_previous_button")}
                    </Button>
                    <p>/</p>
                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      onClick={() => setCurrentQuestionIdx((idx) => Math.min(formData.questions.length - 1, idx + 1))}
                      disabled={currentQuestionIdx === formData.questions.length - 1}
                    >
                      {t("admin_quiz_form_page_next_button")}
                    </Button>
                    </div>
                     <div className="flex items-center justify-center gap-2">
                    <span className="text-gray-300 text-sm">{t("admin_quiz_form_page_current_question_label")}</span>
                    <input
                      type="number"
                      min={1}
                      max={formData.questions.length}
                      value={currentQuestionIdx + 1}
                      onChange={e => {
                        let val = Number(e.target.value);
                        if (isNaN(val) || val < 1) val = 1;
                        if (val > formData.questions.length) val = formData.questions.length;
                        setCurrentQuestionIdx(val - 1);
                      }}
                      className="w-14 px-2 py-1 rounded bg-white/10 border border-white/20 text-white text-center mx-1"
                    />
                    <span className="text-gray-300 text-sm">/ {formData.questions.length}</span>
                    </div>
                  </div>
                  {/* Affichage d'une seule question */}
                  {(() => {
                    const qIdx = currentQuestionIdx;
                    const q = formData.questions[qIdx];
                    return (
                      <div key={qIdx} className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg relative">
                        {/* Titre + bouton supprimer */}
                        <div className="flex items-center justify-between mb-4">
                          <input
                            type="text"
                            value={q.content}
                            onChange={e => handleQuestionChange(qIdx, "content", e.target.value)}
                            className="w-full px-3 py-2 mr-4 bg-white/5 border border-white/10 rounded text-white focus:border-red-500/50 focus:bg-white/10 transition-all duration-200 outline-none"
                            placeholder={`Intitulé de la question #${qIdx + 1}`}
                          />
                          <Button type="button" variant="danger" onClick={() => handleRemoveQuestion(qIdx)} size="sm" className="">
                            Supprimer
                          </Button>
                        </div>
                        {/* Type */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block text-xs font-medium text-gray-400 mb-1">Type de question</label>
                            <select
                              value={q.type}
                              onChange={e => handleQuestionChange(qIdx, "type", e.target.value)}
                              className="hover:cursor-pointer w-full px-3 py-2 rounded bg-white/5 border border-white/10 text-white"
                            >
                              {QUESTION_TYPES.map(t => (
                                <option className="bg-gray-800" key={t.value} value={t.value}>{t.label}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        {/* Image upload */}
                        <div className="mb-4">
                          <label className="block text-xs text-gray-400 mb-1">Image (optionnel)</label>
                          <div className="flex items-center gap-4">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={e => {
                                if (e.target.files && e.target.files[0]) {
                                  handleImageUpload(qIdx, e.target.files[0]);
                                }
                              }}
                              className="w-full px-2 py-1 rounded bg-white/5 border border-white/10 text-white hover:cursor-pointer "
                            />
                          </div>
                        </div>
                        {q.image_url && (
                          <img src={`http://localhost:3000${q.image_url}`} alt="aperçu" className="max-h-16 rounded border border-white/20 mb-4" />
                        )}
                        {/* Ajouter option/paires */}
                        <div className="flex items-center justify-between mb-2">
                          {(q.type === "MULTIPLE" || q.type === "SINGLE") && (
                            <>
                              <span className="text-sm text-gray-300 font-semibold">Options</span>
                              <Button
                                type="button"
                                variant="primary"
                                onClick={() => handleAddOption(qIdx)}
                                size="sm"
                                disabled={q.options.length >= 6}
                              >
                                + Ajouter une option
                              </Button>
                            </>
                          )}
                          {q.type === "MATCHING" && (
                            <>
                              <span className="text-sm text-gray-300 font-semibold">Paires</span>
                              <Button
                                type="button"
                                variant="primary"
                                onClick={() => handleAddPair(qIdx)}
                                size="sm"
                              >
                                + Ajouter une paire
                              </Button>
                            </>
                          )}
                        </div>
                        {/* Options ou paires */}
                        {(q.type === "MULTIPLE" || q.type === "SINGLE") && (
                          <div className="grid grid-cols-1 gap-2 mb-2">
                            {q.options.map((opt, oIdx) => (
                              <div key={oIdx} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 transition-shadow focus-within:shadow-lg">
                                <span className="text-xs text-gray-400">{String.fromCharCode(65 + oIdx)}</span>
                                <input
                                  type="text"
                                  value={opt.text}
                                  onChange={e => handleOptionChange(qIdx, oIdx, "text", e.target.value)}
                                  className="flex-1 px-2 py-1 rounded bg-white/10 border border-white/20 text-white focus:border-red-500/50 focus:bg-white/10 transition-all duration-200 outline-none"
                                  placeholder={`Option ${oIdx + 1}`}
                                />
                                <label className="flex items-center gap-1 text-xs text-gray-300">
                                  <input
                                    type={q.type === "MULTIPLE" ? "checkbox" : "radio"}
                                    checked={!!opt.is_correct}
                                    onChange={e => handleOptionChange(qIdx, oIdx, "is_correct", q.type === "MULTIPLE" ? e.target.checked : true)}
                                    name={`correct-${qIdx}`}
                                  />
                                  <span className="hidden md:inline">Correcte</span>
                                </label>
                                <Button type="button" variant="danger" onClick={() => handleRemoveOption(qIdx, oIdx)} size="sm" disabled={q.options.length <= 1}>
                                  <span className="sr-only">Supprimer</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                        {q.type === "MATCHING" && (
                          <div className="space-y-2 mb-2">
                            {q.pairs.map((pair, pIdx) => (
                              <div key={pIdx} className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-2 py-1">
                                <input
                                  type="text"
                                  value={pair.left}
                                  onChange={e => handlePairChange(qIdx, pIdx, "left", e.target.value)}
                                  className="flex-1 px-2 py-1 rounded bg-white/20 border border-white/30 text-white"
                                  placeholder="Gauche"
                                />
                                <span className="text-gray-400">↔</span>
                                <input
                                  type="text"
                                  value={pair.right}
                                  onChange={e => handlePairChange(qIdx, pIdx, "right", e.target.value)}
                                  className="flex-1 px-2 py-1 rounded bg-white/20 border border-white/30 text-white"
                                  placeholder="Droite"
                                />
                                <Button type="button" variant="danger" onClick={() => handleRemovePair(qIdx, pIdx)} size="sm">
                                  Supprimer
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                        {/* Explication */}
                        <div className="mt-4">
                          <label className="block text-xs text-gray-400 mb-1">Explication (optionnel)</label>
                          <textarea
                            value={q.explanation || ""}
                            onChange={e => handleQuestionChange(qIdx, "explanation", e.target.value)}
                            rows={3}
                            className="w-full px-2 py-3 rounded bg-white/5 border border-white/10 text-white focus:border-red-500/50 focus:bg-white/10 transition-all duration-200 outline-none resize-y"
                            placeholder="Explication affichée après la correction"
                          />
                        </div>
                      </div>
                    );
                  })()}
                </>
              )}
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
                {t("admin_quiz_form_page_back_button")}
              </Button>
              <Button
                type="submit"
                variant="primary"
                disabled={loading}
                className="flex-1"
              >
                {loading ? t("admin_quiz_form_page_saving") : isEditing ? t("admin_quiz_form_page_update_button") : t("admin_quiz_form_page_create_button")}
              </Button>
            </div>
          </form>
        </div>
        {/* Preview Card */}
        <div className="mt-8 relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/5 to-rose-500/5 rounded-full -mr-16 -mt-16"></div>
          <h3 className="text-xl font-bold text-white mb-4">{t("admin_quiz_form_page_preview_title")}</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-gray-400">❓</span>
              <span className="text-white font-medium">
                {formData.title || t("admin_quiz_form_page_title_label")}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-400">📝</span>
              <span className="text-gray-300">
                {formData.description || t("admin_quiz_form_page_description_label")}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-400">📂</span>
              <span className="text-gray-300">
                {selectedCategory ? `${subjects.find(s => s.subject_id === selectedCategory.subject_id)?.name || ''} - ${selectedCategory.name}` : t("admin_quiz_form_page_category_label")}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-400">⏱️</span>
              <span className="text-gray-300">
                {formData.time_limit ? `${formData.time_limit} ${t("admin_quiz_form_page_minutes")}` : t("admin_quiz_form_page_time_limit_label")}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-400">🧪</span>
              <span className="text-gray-300">
                {formData.is_exam_mode ? t("admin_quiz_form_page_exam_mode_enabled") : t("admin_quiz_form_page_exam_mode_disabled")}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-400">📋</span>
              <span className="text-gray-300">
                {formData.questions.length} {formData.questions.length > 1 ? t("admin_quiz_form_page_questions_label_plural") : t("admin_quiz_form_page_questions_label_singular")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
