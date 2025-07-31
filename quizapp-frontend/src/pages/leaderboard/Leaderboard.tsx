import { useState, useEffect } from 'react';
import { api } from '../../api/api';
import { useAuthContext } from '../components/contexts/AuthContext';
import { useTranslation } from 'react-i18next';

interface UserStats {
  user_id: number;
  name: string;
  email: string;
  totalAttempts: number;
  averageScore: number;
  totalPoints: number;
  bestScore: number;
  lastAttempt: string | null;
}

interface Subject {
  subject_id: number;
  name: string;
}

interface RecentScore {
  qa_id: number;
  score: number;
  total_questions: number;
  percentage: number;
  completed_at: string;
  time_spent: number;
  user: {
    user_id: number;
    name: string;
    email: string;
  };
  quiz: {
    title: string;
    subject: {
      name: string;
    };
  };
}

const Leaderboard = () => {
  const [generalLeaderboard, setGeneralLeaderboard] = useState<UserStats[]>([]);
  const [subjectLeaderboard, setSubjectLeaderboard] = useState<UserStats[]>([]);
  const [recentScores, setRecentScores] = useState<RecentScore[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'general' | 'subject' | 'recent'>('general');
  const [loading, setLoading] = useState(true);
  const [subjectLoading, setSubjectLoading] = useState(false);
  const { user } = useAuthContext();

  const { t } = useTranslation();
  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (selectedSubject && activeTab === 'subject') {
      loadSubjectLeaderboard(selectedSubject);
    }
  }, [selectedSubject, activeTab]);

  const loadData = async () => {
    try {
      const [generalRes, subjectsRes, recentRes] = await Promise.all([
        api.get('/leaderboard/general?limit=20'),
        api.get('/subjects'),
        api.get('/leaderboard/recent?days=7&limit=10')
      ]);

      setGeneralLeaderboard(generalRes.data);
      setSubjects(subjectsRes.data);
      setRecentScores(recentRes.data);

      if (subjectsRes.data.length > 0) {
        setSelectedSubject(subjectsRes.data[0].subject_id);
      }
    } catch (error) {
      console.error(t('leaderboard_page_error_loading'), error);
    } finally {
      setLoading(false);
    }
  };

  const loadSubjectLeaderboard = async (subjectId: number) => {
    setSubjectLoading(true);
    try {
      const response = await api.get(`/leaderboard/subject/${subjectId}?limit=20`);
      setSubjectLeaderboard(response.data);
    } catch (error) {
      console.error(t('leaderboard_page_error_sort_subject'), error);
    } finally {
      setSubjectLoading(false);
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return t('leaderboard_page_no_date');
    return new Date(dateString).toLocaleDateString(t('leaderboard_page_format_date'), {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatTime = (seconds: number | null) => {
    if (!seconds) return t('leaderboard_page_not_available');
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return `#${rank}`;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    if (score >= 50) return 'text-orange-400';
    return 'text-red-400';
  };

  const handleTabKeyPress = (event: React.KeyboardEvent, tabName: 'general' | 'subject' | 'recent') => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActiveTab(tabName);
    }
  };

  const getCurrentUserRank = (leaderboard: UserStats[]): number => {
    if (!user?.sub) return -1;
    const userIndex = leaderboard.findIndex(userStat => userStat.user_id === user.sub);
    return userIndex >= 0 ? userIndex + 1 : -1;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-500 border-t-transparent mb-4"></div>
        <p className="text-gray-400 text-lg">{t('leaderboard_page_loading_leaderboard')}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="text-center mb-4 sm:mb-6 lg:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">
            🏆 {t('leaderboard_page_title')}
          </h1>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
            {t('leaderboard_page_subtitle')}
          </p>
        </div>

        {/* Onglets - Responsive avec accessibilité */}
        <div className="flex justify-center mb-4 sm:mb-6 overflow-x-auto px-2" role="tablist" aria-label={t('leaderboard_page_options_aria_label')}>
          <div className="bg-gray-800 p-1 rounded-lg flex space-x-1 min-w-max">
            <button
              onClick={() => setActiveTab('general')}
              onKeyDown={(e) => handleTabKeyPress(e, 'general')}
              role="tab"
              aria-selected={activeTab === 'general'}
              aria-controls="general-panel"
              className={`px-2 sm:px-4 py-1.5 sm:py-2 rounded-md transition-all duration-200 text-xs sm:text-sm
                         transform hover:scale-105 active:scale-95 outline-none hover:cursor-pointer ${
                activeTab === 'general'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              🌟 {t('leaderboard_page_general_sort')}
            </button>
            <button
              onClick={() => setActiveTab('subject')}
              onKeyDown={(e) => handleTabKeyPress(e, 'subject')}
              role="tab"
              aria-selected={activeTab === 'subject'}
              aria-controls="subject-panel"
              className={`px-2 sm:px-4 py-1.5 sm:py-2 rounded-md transition-all duration-200 text-xs sm:text-sm
                         transform hover:scale-105 active:scale-95 outline-none hover:cursor-pointer ${
                activeTab === 'subject'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              📚 {t('leaderboard_page_subject_sort')}
            </button>
            <button
              onClick={() => setActiveTab('recent')}
              onKeyDown={(e) => handleTabKeyPress(e, 'recent')}
              role="tab"
              aria-selected={activeTab === 'recent'}
              aria-controls="recent-panel"
              className={`px-2 sm:px-4 py-1.5 sm:py-2 rounded-md transition-all duration-200 text-xs sm:text-sm
                         transform hover:scale-105 active:scale-95 outline-none hover:cursor-pointer ${
                activeTab === 'recent'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              ⚡ {t('leaderboard_page_recent_sort')}
            </button>
          </div>
        </div>

        {/* Contenu des onglets */}
        {activeTab === 'general' && (
          <div 
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg shadow-purple-500/10 animate-fade-in border border-gray-700/30" 
            role="tabpanel" 
            id="general-panel"
            aria-labelledby="general-tab"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center">🌟 {t('leaderboard_page_general_title')}</h2>

            {/* Indicateur de position de l'utilisateur */}
            {user && getCurrentUserRank(generalLeaderboard) === -1 && generalLeaderboard.length > 0 && (
              <div className="mb-4 sm:mb-6 bg-purple-900/20 border border-purple-500/30 rounded-lg p-3 sm:p-4 text-center">
                <p className="text-purple-400 text-sm sm:text-base">
                  {t('leaderboard_page_general_no_top_20')}
                </p>
              </div>
            )}
            
            {generalLeaderboard.length === 0 ? (
              <div className="text-center py-8 sm:py-12 text-gray-400">
                <div className="text-4xl sm:text-5xl mb-4">🔎</div>
                <p className="text-sm sm:text-base">{t('leaderboard_page_general_no_score_1')}</p>
                <p className="text-sm sm:text-base">{t('leaderboard_page_general_no_score_2')}</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <div className="min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
                    {/* Version Mobile - Cards */}
                    <div className="block sm:hidden space-y-3">
                      {generalLeaderboard.map((userStat, index) => (
                        <div 
                          key={userStat.user_id}
                          className={`bg-gray-700 rounded-lg p-4 transition-all duration-200 hover:bg-gray-600 ${
                            user?.sub === userStat.user_id ? 'bg-purple-900/30 border border-purple-500/50' : ''
                          }`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">{getRankIcon(index + 1)}</span>
                              <div>
                                <div className="font-medium text-white text-sm">
                                  {userStat.name}
                                  {user?.sub === userStat.user_id && (
                                    <span className="ml-2 text-purple-400 text-xs">({t('leaderboard_page_general_you')})</span>
                                  )}
                                </div>
                                <div className="text-gray-400 text-xs">{userStat.email}</div>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-3 text-center">
                            <div>
                              <div className="text-gray-400 text-xs mb-1">{t('leaderboard_page_general_attempts')}</div>
                              <div className="text-white font-medium text-sm">{userStat.totalAttempts}</div>
                            </div>
                            <div>
                              <div className="text-gray-400 text-xs mb-1">{t('leaderboard_page_general_average')}</div>
                              <div className={`font-bold text-sm ${getScoreColor(userStat.averageScore)}`}>
                                {userStat.averageScore}%
                              </div>
                            </div>
                            <div>
                              <div className="text-gray-400 text-xs mb-1">{t('leaderboard_page_general_best_score')}</div>
                              <div className={`font-bold text-sm ${getScoreColor(userStat.bestScore)}`}>
                                {userStat.bestScore}%
                              </div>
                            </div>
                          </div>
                          <div className="mt-3 text-center text-gray-400 text-xs">
                            {formatDate(userStat.lastAttempt)}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Version Desktop - Table */}
                    <table className="hidden sm:table w-full">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left py-3 px-2 sm:px-4 text-sm sm:text-base">{t('leaderboard_page_general_rank')}</th>
                          <th className="text-left py-3 px-2 sm:px-4 text-sm sm:text-base">{t('leaderboard_page_general_user')}</th>
                          <th className="text-center py-3 px-2 sm:px-4 text-sm sm:text-base">{t('leaderboard_page_general_attempts')}</th>
                          <th className="text-center py-3 px-2 sm:px-4 text-sm sm:text-base">{t('leaderboard_page_general_average')}</th>
                          <th className="text-center py-3 px-2 sm:px-4 text-sm sm:text-base">{t('leaderboard_page_general_best_score')}</th>
                          <th className="text-center py-3 px-2 sm:px-4 text-sm sm:text-base hidden lg:table-cell">
                            {t('leaderboard_page_general_last_activity')}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {generalLeaderboard.map((userStat, index) => (
                          <tr 
                            key={userStat.user_id} 
                            className={`border-b border-gray-700 hover:bg-gray-750 transition-all duration-200 ${
                              user?.sub === userStat.user_id ? 'bg-purple-900/20' : ''
                            }`}
                          >
                            <td className="py-3 sm:py-4 px-2 sm:px-4">
                              <span className="text-xl sm:text-2xl">{getRankIcon(index + 1)}</span>
                            </td>
                            <td className="py-3 sm:py-4 px-2 sm:px-4">
                              <div>
                                <div className="font-medium text-white text-sm sm:text-base">
                                  {userStat.name}
                                  {user?.sub === userStat.user_id && (
                                    <span className="ml-2 text-purple-400 text-xs sm:text-sm">({t('leaderboard_page_general_you')})</span>
                                  )}
                                </div>
                                <div className="text-gray-400 text-xs sm:text-sm">{userStat.email}</div>
                              </div>
                            </td>
                            <td className="text-center py-3 sm:py-4 px-2 sm:px-4 text-gray-300 text-sm sm:text-base">
                              {userStat.totalAttempts}
                            </td>
                            <td className="text-center py-3 sm:py-4 px-2 sm:px-4">
                              <span className={`font-bold text-sm sm:text-base ${getScoreColor(userStat.averageScore)}`}>
                                {userStat.averageScore}%
                              </span>
                            </td>
                            <td className="text-center py-3 sm:py-4 px-2 sm:px-4">
                              <span className={`font-bold text-sm sm:text-base ${getScoreColor(userStat.bestScore)}`}>
                                {userStat.bestScore}%
                              </span>
                            </td>
                            <td className="text-center py-3 sm:py-4 px-2 sm:px-4 text-gray-400 text-xs sm:text-sm hidden lg:table-cell">
                              {formatDate(userStat.lastAttempt)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'subject' && (
          <div 
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg shadow-purple-500/10 animate-fade-in border border-gray-700/30" 
            role="tabpanel" 
            id="subject-panel"
            aria-labelledby="subject-tab"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center">📚 {t('leaderboard_page_subject_title')} </h2>
            
            {/* Sélecteur de matière - Responsive avec accessibilité */}
            <div className="mb-4 sm:mb-6 flex justify-center px-2">
              <label htmlFor="subject-select" className="sr-only">{t('leaderboard_page_subject_select')}</label>
              <select
                id="subject-select"
                value={selectedSubject || ''}
                onChange={(e) => setSelectedSubject(Number(e.target.value))}
                aria-label={t('leaderboard_page_subject_select_label')}
                className="px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white 
                         focus:border-purple-500 outline-none transition-colors duration-200 text-sm sm:text-base w-full max-w-sm"
              >
                {subjects.map((subject) => (
                  <option key={subject.subject_id} value={subject.subject_id}>
                    {subject.name}
                  </option>
                ))}
              </select>
            </div>

            {subjectLoading ? (
              <div className="text-center py-8 sm:py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent mx-auto mb-4"></div>
                <p className="text-gray-400">{t('leaderboard_page_subject_loading')}</p>
              </div>
            ) : subjectLeaderboard.length === 0 ? (
              <div className="text-center py-8 sm:py-12 text-gray-400">
                <div className="text-4xl sm:text-6xl mb-4">📚</div>
                <p className="text-sm sm:text-base">{t('leaderboard_page_subject_no_score_1')}</p>
                <p className="text-sm sm:text-base">{t('leaderboard_page_subject_no_score_2')}</p>
              </div>
            ) : (
              <div>
                {/* Indicateur de position de l'utilisateur */}
                {user && getCurrentUserRank(subjectLeaderboard) === -1 && (
                  <div className="mb-4 sm:mb-6 bg-purple-900/20 border border-purple-500/30 rounded-lg p-3 sm:p-4 text-center">
                    <p className="text-purple-400 text-sm sm:text-base">
                      {t('leaderboard_page_subject_no_top_20')}
                    </p>
                  </div>
                )}
                
                <div className="overflow-x-auto">
                  <div className="min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                      {/* Version Mobile - Cards */}
                      <div className="block sm:hidden space-y-3">
                        {subjectLeaderboard.map((userStat, index) => (
                        <div 
                          key={userStat.user_id}
                          className={`bg-gray-700 rounded-lg p-4 transition-all duration-200 hover:bg-gray-600 ${
                            user?.sub === userStat.user_id ? 'bg-purple-900/30 border border-purple-500/50' : ''
                          }`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">{getRankIcon(index + 1)}</span>
                              <div>
                                <div className="font-medium text-white text-sm">
                                  {userStat.name}
                                  {user?.sub === userStat.user_id && (
                                    <span className="ml-2 text-purple-400 text-xs">({t('leaderboard_page_subject_you')})</span>
                                  )}
                                </div>
                                <div className="text-gray-400 text-xs">{userStat.email}</div>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-3 text-center">
                            <div>
                              <div className="text-gray-400 text-xs mb-1">{t('leaderboard_page_subject_attempts')}</div>
                              <div className="text-white font-medium text-sm">{userStat.totalAttempts}</div>
                            </div>
                            <div>
                              <div className="text-gray-400 text-xs mb-1">{t('leaderboard_page_subject_average')}</div>
                              <div className={`font-bold text-sm ${getScoreColor(userStat.averageScore)}`}>
                                {userStat.averageScore}%
                              </div>
                            </div>
                            <div>
                              <div className="text-gray-400 text-xs mb-1">{t('leaderboard_page_subject_best_score')}</div>
                              <div className={`font-bold text-sm ${getScoreColor(userStat.bestScore)}`}>
                                {userStat.bestScore}%
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Version Desktop - Table */}
                    <table className="hidden sm:table w-full">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left py-3 px-2 sm:px-4 text-sm sm:text-base">{t('leaderboard_page_subject_rank')}</th>
                          <th className="text-left py-3 px-2 sm:px-4 text-sm sm:text-base">{t('leaderboard_page_subject_user')}</th>
                          <th className="text-center py-3 px-2 sm:px-4 text-sm sm:text-base">{t('leaderboard_page_subject_attempts')}</th>
                          <th className="text-center py-3 px-2 sm:px-4 text-sm sm:text-base">{t('leaderboard_page_subject_average')}</th>
                          <th className="text-center py-3 px-2 sm:px-4 text-sm sm:text-base">{t('leaderboard_page_subject_best_score')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {subjectLeaderboard.map((userStat, index) => (
                          <tr 
                            key={userStat.user_id} 
                            className={`border-b border-gray-700 hover:bg-gray-750 transition-all duration-200 ${
                              user?.sub === userStat.user_id ? 'bg-purple-900/20' : ''
                            }`}
                          >
                            <td className="py-3 sm:py-4 px-2 sm:px-4">
                              <span className="text-xl sm:text-2xl">{getRankIcon(index + 1)}</span>
                            </td>
                            <td className="py-3 sm:py-4 px-2 sm:px-4">
                              <div>
                                <div className="font-medium text-white text-sm sm:text-base">
                                  {userStat.name}
                                  {user?.sub === userStat.user_id && (
                                    <span className="ml-2 text-purple-400 text-xs sm:text-sm">({t('leaderboard_page_subject_you')})</span>
                                  )}
                                </div>
                                <div className="text-gray-400 text-xs sm:text-sm">{userStat.email}</div>
                              </div>
                            </td>
                            <td className="text-center py-3 sm:py-4 px-2 sm:px-4 text-gray-300 text-sm sm:text-base">
                              {userStat.totalAttempts}
                            </td>
                            <td className="text-center py-3 sm:py-4 px-2 sm:px-4">
                              <span className={`font-bold text-sm sm:text-base ${getScoreColor(userStat.averageScore)}`}>
                                {userStat.averageScore}%
                              </span>
                            </td>
                            <td className="text-center py-3 sm:py-4 px-2 sm:px-4">
                              <span className={`font-bold text-sm sm:text-base ${getScoreColor(userStat.bestScore)}`}>
                                {userStat.bestScore}%
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'recent' && (
          <div 
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg shadow-purple-500/10 animate-fade-in border border-gray-700/30" 
            role="tabpanel" 
            id="recent-panel"
            aria-labelledby="recent-tab"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center">⚡{t('leaderboard_page_recent_title')}</h2>
            <p className="text-gray-400 text-sm text-center mb-4 sm:mb-6">{t('leaderboard_page_recent_subtitle')}</p>
            
            {recentScores.length === 0 ? (
              <div className="text-center py-8 sm:py-12 text-gray-400">
                <div className="text-4xl sm:text-6xl mb-4">⚡</div>
                <p className="text-sm sm:text-base">{t('leaderboard_page_recent_no_score_1')}</p>
                <p className="text-sm sm:text-base">{t('leaderboard_page_recent_no_score_2')}</p>
              </div>
            ) : (
              <div className="space-y-3 sm:space-y-4">
                {recentScores.map((score, index) => (
                  <div 
                    key={score.qa_id} 
                    className="bg-gray-700 p-4 sm:p-5 rounded-lg transition-all duration-200 
                             hover:bg-gray-600 hover:scale-[1.01] transform"
                  >
                    {/* Version Mobile */}
                    <div className="block sm:hidden">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="text-xl">{getRankIcon(index + 1)}</div>
                          <div>
                            <div className="font-medium text-white text-sm">{score.user.name}</div>
                            <div className="text-gray-400 text-xs">{score.quiz.subject.name}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-lg font-bold ${getScoreColor(score.percentage)}`}>
                            {score.percentage}%
                          </div>
                          <div className="text-gray-400 text-xs">
                            {score.score}/{score.total_questions}
                          </div>
                        </div>
                      </div>
                      <div className="text-gray-400 text-sm mb-2 font-medium">{score.quiz.title}</div>
                      <div className="flex justify-between text-gray-500 text-xs">
                        <span>{formatTime(score.time_spent)}</span>
                        <span>{formatDate(score.completed_at)}</span>
                      </div>
                    </div>

                    {/* Version Desktop */}
                    <div className="hidden sm:flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl">{getRankIcon(index + 1)}</div>
                        <div>
                          <div className="font-medium text-white text-base">{score.user.name}</div>
                          <div className="text-gray-400 text-sm font-medium">{score.quiz.title}</div>
                          <div className="text-gray-500 text-xs">{score.quiz.subject.name}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-xl font-bold ${getScoreColor(score.percentage)}`}>
                          {score.percentage}%
                        </div>
                        <div className="text-gray-400 text-sm">
                          {score.score}/{score.total_questions}
                        </div>
                        <div className="text-gray-500 text-xs">
                          {formatTime(score.time_spent)} • {formatDate(score.completed_at)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Leaderboard;