import { Routes, Route } from "react-router-dom";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import { Suspense, lazy } from "react";

// Components essentiels (chargés immédiatement)
import Header from "./pages/components/header/Header";
import Footer from "./pages/components/footer/Footer";
import PrivateRoute from "./pages/components/routes/PrivateRoute";
import AlreadyLoggedInRoute from "./pages/connections/AlreadyLoggedInRoute";
import AdminRoute from "./pages/components/routes/AdminRoute";

// Pages principales (lazy loading)
const LandingPage = lazy(() => import("./pages/home/Home"));
const Login = lazy(() => import("./pages/connections/Login"));
const Register = lazy(() => import("./pages/connections/Register"));
const LogoutSuccess = lazy(() => import("./pages/connections/LogoutSuccess"));
const RegisterSuccess = lazy(() => import("./pages/connections/RegisterSuccess"));
const Terms = lazy(() => import("./pages/terms/Terms"));

// Components Quiz
const QuizList = lazy(() => import("./pages/quizzes/Quizlist"));
const QuizPreview = lazy(() => import("./pages/quizzes/QuizPreview"));
const QuizPlayer = lazy(() => import("./pages/quizzes/QuizPlayer"));
const QuizResult = lazy(() => import("./pages/quizzes/QuizResult"));

// Pages Admin
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));

// Admin Sections
const AdminSubjects = lazy(() => import("./pages/admin/sections/AdminSubjects"));
const AdminUsers = lazy(() => import("./pages/admin/sections/AdminUsers"));
const AdminCategories = lazy(() => import("./pages/admin/sections/AdminCategories"));
const AdminQuizzes = lazy(() => import("./pages/admin/sections/AdminQuizzes"));
const AdminStats = lazy(() => import("./pages/admin/sections/AdminStats"));
const AdminFlashcards = lazy(() => import("./pages/admin/sections/AdminFlashcards"));
const AdminSettings = lazy(() => import("./pages/admin/sections/AdminSettings"));
const AdminExports = lazy(() => import("./pages/admin/sections/AdminExports"));
const AdminImports = lazy(() => import("./pages/admin/sections/AdminImports"));

// Pages Flashcards
const FlashcardsCategories = lazy(() => import("./pages/flashcards/FlashcardsCategories"));
const StudyFlashcards = lazy(() => import("./pages/flashcards/StudyFlashcards"));
const FlashcardForm = lazy(() => import("./pages/admin/flashcards/FlashcardForm"));

// New Form Pages
const UserForm = lazy(() => import("./pages/admin/users/UserForm"));
const SubjectForm = lazy(() => import("./pages/admin/subjects/SubjectForm"));
const CategoryForm = lazy(() => import("./pages/admin/categories/CategoryForm"));
const QuizForm = lazy(() => import("./pages/admin/quizzes/QuizForm"));

// Pages Leaderboard
const Leaderboard = lazy(() => import("./pages/leaderboard/Leaderboard"));

// Error Pages
const Unauthorized = lazy(() => import("./pages/errors/Unauthorized"));
const NotFound = lazy(() => import("./pages/errors/NotFound"));

// Composant de loading
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#090b10]">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
  </div>
);

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className=" bg-[#090b10] flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/unauthorized" element={<Unauthorized />} />
              <Route path="/" element={<LandingPage />} />
              <Route path="/logout-success" element={<LogoutSuccess />} />
              <Route path="/register-success" element={<RegisterSuccess />} />
              <Route path="/terms" element={<Terms />} />
              {/* Routes accessibles SEULEMENT si NON connecté */}
              <Route element={<AlreadyLoggedInRoute />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>
              {/* Routes accessibles SEULEMENT si connecté */}
              <Route element={<PrivateRoute />}>
                <Route path="/quizzes" element={<QuizList />} />
                <Route path="/quiz/:id/preview" element={<QuizPreview />} />
                <Route path="/quiz/:id" element={<QuizPlayer />} />
                <Route path="/quiz-result/:attemptId" element={<QuizResult />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/quiz/result/:attemptId" element={<QuizResult />} />
                <Route path="/flashcards" element={<FlashcardsCategories />} />
                <Route path="/flashcards/study/:categoryId" element={<StudyFlashcards />} />
              </Route>
              <Route element={<AdminRoute />}>
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
              </Route>
              
              <Route path="/admin" element={<AdminDashboard />}>
                <Route path="settings" element={<AdminSettings />} />
                <Route path="exports" element={<AdminExports />} />
                <Route path="imports" element={<AdminImports />} />
                <Route path="stats" element={<AdminStats />} />
                <Route path="subjects" element={<AdminSubjects />} />
                <Route path="categories" element={<AdminCategories />} />
                <Route path="users" element={<AdminUsers />} />
                <Route path="quizzes" element={<AdminQuizzes />} />
                <Route path="flashcards" element={<AdminFlashcards />} />
                <Route path="flashcards/new" element={<FlashcardForm />} />
                <Route path="flashcards/edit/:id" element={<FlashcardForm />} />
                <Route path="users/new" element={<UserForm />} />
                <Route path="users/edit/:id" element={<UserForm />} />
                <Route path="subjects/new" element={<SubjectForm />} />
                <Route path="subjects/edit/:id" element={<SubjectForm />} />
                <Route path="categories/new" element={<CategoryForm />} />
                <Route path="categories/edit/:id" element={<CategoryForm />} />
                <Route path="quizzes/new" element={<QuizForm />} />
                <Route path="quizzes/edit/:id" element={<QuizForm />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </I18nextProvider>
  );
}

export default App;
