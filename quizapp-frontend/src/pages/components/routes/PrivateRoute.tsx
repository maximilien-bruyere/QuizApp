import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../api/useAuth";
import LoadingSpinner from "../others/LoadingSpinner";

/**
 * PrivateRoute
 * -------------
 * Routeur de protection pour les pages accessibles uniquement aux utilisateurs authentifiés.
 *
 * - Si l'utilisateur n'est pas authentifié, il est redirigé vers la page de connexion.
 * - Si l'état d'authentification est en cours de chargement, affiche un indicateur de chargement.
 * - Si l'utilisateur est authentifié, il accède à la route enfant via <Outlet />.
 *
 * Utilisation :
 * <Route element={<PrivateRoute />}>
 *   <Route path="/home" element={<Home />} />
 *   <Route path="/theories/:theoryId" element={<TheoryPage />} />
 *   <Route path="/quizzes" element={<QuizList />} />
 *   <Route path="/quiz/:id" element={<QuizPlayer />} />
 *   <Route path="/quiz/result/:attemptId" element={<QuizResult />} />
 * </Route>
 */

const PrivateRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  // Si l'état de chargement est en cours, on affiche un spinner
  if (loading) {
    return <LoadingSpinner />;
  }

  // Retourne la route enfant si l'utilisateur est authentifié sinon redirige vers la page de connexion
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
