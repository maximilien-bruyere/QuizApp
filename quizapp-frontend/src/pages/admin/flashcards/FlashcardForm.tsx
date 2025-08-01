import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../../api/api';
import { Button } from '../../components/buttons';
import { useTranslation } from 'react-i18next';

interface Category {
  category_id: number;
  name: string;
  subject?: {
    name: string;
  };
}

interface User {
  user_id: number;
  name: string;
  email: string;
}
export default function FlashcardForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = !!id;

  const [categories, setCategories] = useState<Category[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  const [formData, setFormData] = useState({
    front: '',
    back: '',
    category_id: '',
    user_id: '',
    difficulty: 'NOUVEAU' as 'NOUVEAU' | 'DIFFICILE' | 'MOYEN' | 'FACILE' | 'ACQUISE'
  });

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (isEditing && id) {
      loadFlashcard(parseInt(id));
    }
  }, [isEditing, id]);

  const loadData = async () => {
    try {
      const [categoriesRes, usersRes] = await Promise.all([
        api.get('/categories'),
        api.get('/users')
      ]);
      
      setCategories(categoriesRes.data);
      setUsers(usersRes.data);
    } catch (error) {
      console.error(t('admin_flashcard_form_page_error_loading'), error);
    } finally {
      setLoading(false);
    }
  };

  const loadFlashcard = async (flashcardId: number) => {
    try {
      const response = await api.get(`/flashcards/${flashcardId}`);
      const flashcard = response.data;
      
      setFormData({
        front: flashcard.front,
        back: flashcard.back,
        category_id: flashcard.category_id.toString(),
        user_id: flashcard.user_id.toString(),
        difficulty: flashcard.difficulty
      });
    } catch (error) {
      console.error(t('admin_flashcard_form_page_error_loading_flashcard'), error);
      navigate('/admin/flashcards');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      const data = {
        ...formData,
        category_id: parseInt(formData.category_id),
        user_id: parseInt(formData.user_id)
      };

      if (isEditing && id) {
        await api.patch(`/flashcards/${id}`, data);
      } else {
        await api.post('/flashcards', data);
      }
      
      navigate('/admin/flashcards');
    } catch (error) {
      console.error(t('admin_flashcard_form_page_error_saving'), error);
    } finally {
      setSaving(false);
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'NOUVEAU': return '🆕';
      case 'DIFFICILE': return '🔴';
      case 'MOYEN': return '🟡';
      case 'FACILE': return '🟢';
      case 'ACQUISE': return '✅';
      default: return '🆕';
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-gray-400">{t('admin_flashcard_form_page_loading')}</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate('/admin/flashcards')}
          className="px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition-all duration-200 transform hover:scale-105 active:scale-95"
        >
          ← {t('admin_flashcard_form_page_back_button')}
        </button>
        
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 backdrop-blur-sm border border-orange-500/30 flex items-center justify-center text-white text-xl font-bold shadow-lg">
            🃏
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">
              {isEditing ? t('admin_flashcard_form_page_editing_flashcard') : t('admin_flashcard_form_page_new_flashcard')}
            </h1>
            <p className="text-gray-400 mt-1">
              {isEditing ? t('admin_flashcard_form_page_editing_flashcard_description') : t('admin_flashcard_form_page_new_flashcard_description')}
            </p>
          </div>
        </div>
      </div>

      {/* Formulaire */}
      <div className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/5 to-amber-500/5 rounded-full -mr-16 -mt-16"></div>
        
        <form onSubmit={handleSubmit} className="relative space-y-8">
          {/* Contenu de la flashcard */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-lg font-medium text-gray-300 flex items-center gap-2">
                📝 {t('admin_flashcard_form_page_front_label')}
              </label>
              <textarea
                value={formData.front}
                onChange={(e) => setFormData({ ...formData, front: e.target.value })}
                className="w-full p-4 bg-gray-800/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-orange-500/50 outline-none transition-colors duration-300 resize-vertical min-h-[150px]"
                placeholder={t('admin_flashcard_form_page_front_placeholder')}
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-lg font-medium text-gray-300 flex items-center gap-2">
                💡 {t('admin_flashcard_form_page_back_label')}
              </label>
              <textarea
                value={formData.back}
                onChange={(e) => setFormData({ ...formData, back: e.target.value })}
                className="w-full p-4 bg-gray-800/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-orange-500/50 outline-none transition-colors duration-300 resize-vertical min-h-[150px]"
                placeholder={t('admin_flashcard_form_page_back_placeholder')}
                required
              />
            </div>
          </div>

          {/* Métadonnées */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                📂 {t('admin_flashcard_form_page_category_label')}
              </label>
              <select
                value={formData.category_id}
                onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                className="w-full p-3 bg-gray-800/50 border border-white/10 rounded-xl text-white focus:border-orange-500/50 outline-none transition-colors duration-300"
                required
              >
                <option value="">{t('admin_flashcard_form_page_category_placeholder')}</option>
                {categories.map((category) => (
                  <option key={category.category_id} value={category.category_id}>
                    {category.name} {category.subject?.name && `(${category.subject.name})`}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                👤 {t('admin_flashcard_form_page_creator_label')}
              </label>
              <select
                value={formData.user_id}
                onChange={(e) => setFormData({ ...formData, user_id: e.target.value })}
                className="w-full p-3 bg-gray-800/50 border border-white/10 rounded-xl text-white focus:border-orange-500/50 outline-none transition-colors duration-300"
                required
              >
                <option value="">{t('admin_flashcard_form_page_creator_placeholder')}</option>
                {users.map((user) => (
                  <option key={user.user_id} value={user.user_id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                {getDifficultyIcon(formData.difficulty)} {t('admin_flashcard_form_page_difficulty_label')}
              </label>
              <select
                value={formData.difficulty}
                onChange={(e) => setFormData({ ...formData, difficulty: e.target.value as any })}
                className="w-full p-3 bg-gray-800/50 border border-white/10 rounded-xl text-white focus:border-orange-500/50 outline-none transition-colors duration-300"
              >
                <option value="NOUVEAU">🆕 {t('admin_flashcards_page_difficulty_new')}</option>
                <option value="DIFFICILE">🔴 {t('admin_flashcards_page_difficulty_hard')}</option>
                <option value="MOYEN">🟡 {t('admin_flashcards_page_difficulty_medium')}</option>
                <option value="FACILE">🟢 {t('admin_flashcards_page_difficulty_easy')}</option>
                <option value="ACQUISE">✅ {t('admin_flashcards_page_difficulty_learned')}</option>
              </select>
            </div>
          </div>

          {/* Aperçu de la flashcard */}
          {formData.front && formData.back && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-300 flex items-center gap-2">
                👁️ {t('admin_flashcard_form_page_preview_title')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-xl p-4">
                  <div className="text-xs text-orange-400 font-medium mb-2">{t('admin_flashcard_form_page_preview_front')}</div>
                  <div className="text-white font-medium">{formData.front}</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-4">
                  <div className="text-xs text-blue-400 font-medium mb-2">{t('admin_flashcard_form_page_preview_back')}</div>
                  <div className="text-white font-medium">{formData.back}</div>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-4 pt-6">
            <Button
              type="button"
              onClick={() => navigate('/admin/flashcards')}
              variant="secondary"
              className="flex-1 md:flex-none"
              disabled={saving}
            >
              {t('admin_flashcard_form_page_cancel_button')}
            </Button>
            <Button
              type="submit"
              variant={isEditing ? "modification" : "primary"}
              className="flex-1"
              disabled={saving}
            >
              {saving ? t('admin_flashcard_form_page_saving') : (isEditing ? t('admin_flashcard_form_page_update_button') : t('admin_flashcard_form_page_create_button'))}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
