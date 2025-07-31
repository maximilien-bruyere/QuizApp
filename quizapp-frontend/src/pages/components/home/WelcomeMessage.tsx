import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";

const WelcomeMessage = () => {
  const [visible, setVisible] = useState(true);
  const { t } = useTranslation();

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 bg-purple-900/40 text-white px-5 py-3 rounded-lg shadow-lg z-50 text-base animate-fade-in flex items-start gap-4 border border-purple-800">
      <div>
        <div className="font-bold mb-3">{t('welcome_page_div_1')}</div>
        <div className="mb-3">{t('welcome_page_div_2')}</div>
        <div className="bg-purple-900/40  rounded p-2 text-sm mt-1 mb-3 shadow-inner border border-purple-800">
          <div>
            <span className="font-semibold">{t('welcome_page_div_3')}</span>{" "}
            <span className="select-all">{t('welcome_page_div_4')}</span>
          </div>
          <div>
            <span className="font-semibold">{t('welcome_page_div_5')}</span>{" "}
            <span className="select-all">{t('welcome_page_div_6')}</span>
          </div>
        </div>
        <div className="bg-yellow-900/40 text-yellow-100 rounded px-3 py-2 text-xs font-semibold border border-yellow-800">
          <span><Trans
            i18nKey="welcome_page_div_7"
            components={{
              bold: <span className="font-bold" />,
              italic: <span className="font-italic" />,
            }}
          /></span><br />
          <span><Trans
            i18nKey="welcome_page_div_8"
            components={{
              underline: <span className="underline" />,
            }}
          /></span>
       </div>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="ml-2 mt-1 text-white bg-purple-900/40 hover:bg-purple-800/90 rounded-full px-2 py-1 text-xs font-bold transition hover:cursor-pointer border border-purple-800 active:bg-purple-700"
        aria-label={t('welcome_page_aria_label')}
        title={t('welcome_page_close_button')}
      >
        ✕
      </button>
    </div>
  );
};

export default WelcomeMessage;