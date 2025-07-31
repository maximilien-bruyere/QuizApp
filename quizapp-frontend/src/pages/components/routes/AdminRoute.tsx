import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import LoadingSpinner from "../others/LoadingSpinner";

/**
 * AdminRoute
 * -----------
 * Routeur de protection pour les pages réservées aux administrateurs.
 *
 * - Si l'utilisateur n'est pas authentifié, il est redirigé vers la page de déconnexion.
 * - Si l'utilisateur est authentifié mais n'a pas le rôle "ADMIN", il est redirigé vers la page "unauthorized".
 * - Si l'utilisateur est authentifié et admin, il accède à la route enfant via <Outlet />.
 * - Affiche un spinner de chargement tant que l'état d'authentification n'est pas déterminé.
 *
 * Utilisation :
 * <Route element={<AdminRoute />}>
 *   <Route path="/admin/dashboard" element={<AdminDashboard />} />
 *   <Route path="/admin/create-subject" element={<CreateSubject />} />
 *   <Route path="/admin/edit-subject/:id" element={<EditSubject />} />
 *   <Route path="/admin/create-category" element={<CreateCategory />} />
 *   <Route path="/admin/edit-category/:id" element={<EditCategory />} />
 *   <Route path="/admin/create-theory" element={<CreateTheory />} />
 *   <Route path="/admin/edit-theory/:id" element={<EditTheory />} />
 *   <Route path="/admin/create-user" element={<CreateUser />} />
 *   <Route path="/admin/edit-user/:userId" element={<EditUser />} />
 *   <Route path="/admin/user-success" element={<UserSuccess />} />
 *   <Route path="/subject-success" element={<SubjectSuccess />} />
 *   <Route path="/category-success" element={<CategorySuccess />} />
 *   <Route path="/theory-success/:id" element={<TheorySuccess />} />
 *   <Route path="/admin/create-quiz" element={<CreateQuiz />} />
 *   <Route path="/admin/quiz-success" element={<QuizSuccess />} />
 *   <Route path="/admin/edit-quiz/:id" element={<EditQuiz />} />
 * </Route>
 */

const AdminRoute = () => {
  const { isAuthenticated, user, loading } = useAuthContext();

  // Si l'état de chargement est en cours, on affiche un spinner
  if (loading) {
    return <LoadingSpinner />;
  }

  // Si l'utilisateur n'est pas authentifié, on le redirige vers la page de connexion
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Si l'utilisateur n'est pas admin, on le redirige vers la page unauthorized
  if (user?.role !== "ADMIN") {
    return <Navigate to="/unauthorized" replace />;
  }

  // Retourne la route enfant si l'utilisateur est authentifié et admin
  return <Outlet />;
};

export default AdminRoute;
