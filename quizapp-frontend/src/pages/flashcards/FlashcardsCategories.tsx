import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../api/api';

interface Category {
  category_id: number;
  name: string;
  subject?: {
    name: string;
  };
  _count?: {
    flashcards: number;
  };
}

interface Subject {
  subject_id: number;
  name: string;
  categories: Category[];
}

const FlashcardsCategories = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      // Charger les matières avec leurs catégories et le nombre de flashcards
      const [subjectsRes, categoriesRes, flashcardsRes] = await Promise.all([
        api.get('/subjects'),
        api.get('/categories'),
        api.get('/flashcards')
      ]);

      const subjectsData = subjectsRes.data;
      const categoriesData = categoriesRes.data;
      const flashcardsData = flashcardsRes.data;

      // Compter les flashcards par catégorie
      const flashcardCounts = flashcardsData.reduce((acc: any, flashcard: any) => {
        acc[flashcard.category_id] = (acc[flashcard.category_id] || 0) + 1;
        return acc;
      }, {});

      // Organiser les données par matière
      const organizedData = subjectsData.map((subject: any) => ({
        ...subject,
        categories: categoriesData
          .filter((category: any) => category.subject_id === subject.subject_id)
          .map((category: any) => ({
            ...category,
            _count: {
              flashcards: flashcardCounts[category.category_id] || 0
            }
          }))
          .filter((category: any) => category._count.flashcards > 0) // Seulement les catégories avec des flashcards
      })).filter((subject: any) => subject.categories.length > 0); // Seulement les matières avec des catégories ayant des flashcards

      setSubjects(organizedData);
    } catch (error) {
      console.error('Erreur lors du chargement:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (subjects.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h2 className="text-2xl font-bold text-white mb-4">Aucune flashcard disponible</h2>
            <p className="text-gray-400 mb-6">Il n'y a pas encore de flashcards créées dans le système.</p>
            <p className="text-gray-500">Contactez un administrateur pour en créer.</p>
          </div>
        </div>
      </div>
    );
  }

  const totalFlashcards = subjects.reduce((total, subject) => 
    total + subject.categories.reduce((subtotal, category) => 
      subtotal + (category._count?.flashcards || 0), 0), 0
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">            <div className="relative z-10 text-center">
            <h1 className="text-3xl font-bold text-white mb-4">📚 Étudier avec les Flashcards</h1>
            <p className="text-gray-400 mb-2">
              Choisissez une catégorie pour commencer votre session d'étude
            </p>
            <p className="text-purple-400 font-medium">
              {totalFlashcards} flashcards disponibles
            </p>
          </div>

          <div className="space-y-8">
            {subjects.map((subject) => (
              <div key={subject.subject_id} className="relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 shadow-lg shadow-purple-500/10">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl transform rotate-45"></div>
                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="bg-purple-600 w-3 h-3 rounded-full mr-3"></span>
                  {subject.name}
                </h2>
                
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                  {subject.categories.map((category) => (
                    <Link
                      key={category.category_id}
                      to={`/flashcards/study/${category.category_id}`}
                      className="group"
                    >
                      <div className="relative overflow-hidden bg-gray-800 border border-gray-700/30 rounded-2xl p-6 md:p-7 lg:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/50 hover:bg-gray-800/80 mx-2 my-2">
                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl transform rotate-45"></div>
                        <div className="relative z-10 flex items-center justify-between mb-4">
                          <h3 className="text-white font-medium group-hover:text-purple-300 transition text-base md:text-lg">
                            {category.name}
                          </h3>
                          <div className="bg-purple-600 text-white text-xs md:text-sm px-3 py-1.5 rounded-full font-medium">
                            {category._count?.flashcards || 0}
                          </div>
                        </div>
                        
                        <div className="relative z-10 flex items-center text-gray-400 text-sm md:text-base">
                          <span className="mr-2">🃏</span>
                          <span>
                            {category._count?.flashcards === 1 
                              ? '1 flashcard' 
                              : `${category._count?.flashcards} flashcards`
                            }
                          </span>
                        </div>
                        
                        <div className="mt-3 text-purple-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          Cliquez pour étudier →
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 shadow-lg shadow-purple-500/10 border-purple-500/20">
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl transform rotate-45"></div>
            <h3 className="text-lg font-bold text-white mb-4">💡 Conseils d'étude</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 text-gray-300 text-sm md:text-base">
              <div>
                <h4 className="font-medium text-purple-300 mb-2">Navigation</h4>
                <ul className="space-y-1">
                  <li>• Cliquez sur une carte pour la retourner</li>
                  <li>• Utilisez les flèches pour naviguer</li>
                  <li>• Appuyez sur Espace pour retourner</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-purple-300 mb-2">Modes d'étude</h4>
                <ul className="space-y-1">
                  <li>• Mode ordre: Cartes dans l'ordre de création</li>
                  <li>• Mode aléatoire: Cartes mélangées</li>
                  <li>• Recommencer à tout moment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashcardsCategories;