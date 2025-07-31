import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../../api/api';
import { Button } from '../../components/buttons';

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
      console.error('Erreur lors du chargement:', error);
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
      console.error('Erreur lors du chargement de la flashcard:', error);
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
      console.error('Erreur lors de la sauvegarde:', error);
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
        <div className="text-gray-400">Chargement...</div>
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
          ← Retour
        </button>
        
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 backdrop-blur-sm border border-orange-500/30 flex items-center justify-center text-white text-xl font-bold shadow-lg">
            🃏
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">
              {isEditing ? 'Modifier la flashcard' : 'Nouvelle flashcard'}
            </h1>
            <p className="text-gray-400 mt-1">
              {isEditing ? 'Modifiez les informations de la carte' : 'Créez une nouvelle carte de révision'}
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
                📝 Question/Terme (Face avant)
              </label>
              <textarea
                value={formData.front}
                onChange={(e) => setFormData({ ...formData, front: e.target.value })}
                className="w-full p-4 bg-gray-800/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-orange-500/50 outline-none transition-colors duration-300 resize-vertical min-h-[150px]"
                placeholder="Entrez la question ou le terme à apprendre..."
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-lg font-medium text-gray-300 flex items-center gap-2">
                💡 Réponse/Définition (Face arrière)
              </label>
              <textarea
                value={formData.back}
                onChange={(e) => setFormData({ ...formData, back: e.target.value })}
                className="w-full p-4 bg-gray-800/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-orange-500/50 outline-none transition-colors duration-300 resize-vertical min-h-[150px]"
                placeholder="Entrez la réponse ou la définition..."
                required
              />
            </div>
          </div>

          {/* Métadonnées */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                📂 Catégorie
              </label>
              <select
                value={formData.category_id}
                onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                className="w-full p-3 bg-gray-800/50 border border-white/10 rounded-xl text-white focus:border-orange-500/50 outline-none transition-colors duration-300"
                required
              >
                <option value="">Choisir une catégorie...</option>
                {categories.map((category) => (
                  <option key={category.category_id} value={category.category_id}>
                    {category.name} {category.subject?.name && `(${category.subject.name})`}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                👤 Créateur
              </label>
              <select
                value={formData.user_id}
                onChange={(e) => setFormData({ ...formData, user_id: e.target.value })}
                className="w-full p-3 bg-gray-800/50 border border-white/10 rounded-xl text-white focus:border-orange-500/50 outline-none transition-colors duration-300"
                required
              >
                <option value="">Choisir un créateur...</option>
                {users.map((user) => (
                  <option key={user.user_id} value={user.user_id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                {getDifficultyIcon(formData.difficulty)} Difficulté
              </label>
              <select
                value={formData.difficulty}
                onChange={(e) => setFormData({ ...formData, difficulty: e.target.value as any })}
                className="w-full p-3 bg-gray-800/50 border border-white/10 rounded-xl text-white focus:border-orange-500/50 outline-none transition-colors duration-300"
              >
                <option value="NOUVEAU">🆕 Nouveau</option>
                <option value="DIFFICILE">🔴 Difficile</option>
                <option value="MOYEN">🟡 Moyen</option>
                <option value="FACILE">🟢 Facile</option>
                <option value="ACQUISE">✅ Acquise</option>
              </select>
            </div>
          </div>

          {/* Aperçu de la flashcard */}
          {formData.front && formData.back && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-300 flex items-center gap-2">
                👁️ Aperçu de la carte
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-xl p-4">
                  <div className="text-xs text-orange-400 font-medium mb-2">FACE AVANT</div>
                  <div className="text-white font-medium">{formData.front}</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-4">
                  <div className="text-xs text-blue-400 font-medium mb-2">FACE ARRIÈRE</div>
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
              Annuler
            </Button>
            <Button
              type="submit"
              variant={isEditing ? "modification" : "primary"}
              className="flex-1"
              disabled={saving}
            >
              {saving ? 'Enregistrement...' : (isEditing ? 'Mettre à jour' : 'Créer la flashcard')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
