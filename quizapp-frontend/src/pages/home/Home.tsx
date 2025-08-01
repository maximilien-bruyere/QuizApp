import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { useAuthContext } from "../components/contexts/AuthContext";
import { Button } from "../components/buttons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import WelcomeMessage from "../components/home/WelcomeMessage";
import SubjectCard from "../components/home/SubjectCard";
import { Trans } from "react-i18next";

interface Subject {
  subject_id: number;
  name: string;
}

const Home = () => {
  const { t } = useTranslation();
  const [showWelcome, setShowWelcome] = useState(false);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const { isAuthenticated, user } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await api.get("/subjects");
        setSubjects(response.data);
      } catch (error) {
        console.error(t("home_page_error_loading_subjects"), error);
      }
    };

    fetchSubjects();
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("alreadyVisited")) {
      setShowWelcome(true);
      localStorage.setItem("alreadyVisited", "true");
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {showWelcome && <WelcomeMessage />}
      <section className="flex flex-col items-center justify-center text-center pt-12 px-4 md:px-6 lg:px-8">
        <h2
          className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 md:mb-6 leading-tight 
                       animate-fade-in-up"
        >
          <Trans
            i18nKey="home_page_title_message"
            components={{
              blue: <span className="text-blue-500" />,
              purple: <span className="text-purple-500" />,
            }}
          />
        </h2>
        <p
          className="text-gray-400 max-w-sm md:max-w-xl lg:max-w-2xl text-sm md:text-base lg:text-lg leading-relaxed
                      animate-fade-in-up animate-delay-200"
        >
          {t("home_page_subtitle_message")}
        </p>
      </section>

      {isAuthenticated && user ? (
        <div className="flex justify-center my-6 md:my-8 px-4 animate-fade-in-up animate-delay-300 py-10">
          <Button
            onClick={() => navigate("/#")}
            variant="primary"
            title={t("button_in_construction")}
            size="lg"
          >
            {t("home_page_button_already_login")}
          </Button>
        </div>
      ) : (
        <div className="flex justify-center my-6 md:my-8 px-4 animate-fade-in-up animate-delay-300 py-10">
          <Button
            onClick={() => navigate("/login")}
            variant="primary"
            size="lg"
          >
            {t("home_page_button_login")}
          </Button>
        </div>
      )}

      <section className="flex flex-col md:flex-row items-center bg-gray-800 rounded-2xl p-6 md:p-10 max-w-4xl mx-auto mb-10 animate-fade-in-up animate-delay-400">
        {/* Illustration ordinateur */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
          <svg
            width="100"
            height="80"
            viewBox="0 0 100 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="10"
              y="10"
              width="80"
              height="50"
              rx="6"
              fill="#222C3A"
              stroke="#4F8DFD"
              strokeWidth="2"
            />
            <rect x="25" y="65" width="50" height="8" rx="2" fill="#4F8DFD" />
            <rect x="45" y="70" width="10" height="5" rx="1" fill="#222C3A" />
          </svg>
        </div>
        {/* Texte */}
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-2">
            {t("home_page_windows_only_title")}
          </h3>
          <p className="text-gray-300 text-base">
            {t("home_page_windows_only_text")}
          </p>
        </div>
      </section>

      <section className="p-4 md:p-6 lg:p-8 rounded-t-3xl mt-6 md:mt-8 mb-8 md:mb-12">
        <h3
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-10 lg:mb-12 text-center
                       animate-fade-in-up animate-delay-500"
        >
          {t("home_page_subjects_available")}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center max-w-7xl mx-auto mt-10">
          {subjects.length > 0 ? (
            subjects.map((subject, index) => (
              <SubjectCard
                key={subject.subject_id}
                name={subject.name}
                delay={index}
              />
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-full text-sm md:text-base animate-fade-in">
              {t("home_page_no_subjects")}
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
