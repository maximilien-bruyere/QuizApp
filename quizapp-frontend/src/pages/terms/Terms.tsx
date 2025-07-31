import { Trans, useTranslation } from "react-i18next";

const Terms = () => {
  const { t } = useTranslation();

  return (
    <div className="px-6 py-12 bg-gray-900 min-h-screen text-gray-100 flex flex-col items-center">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          {t("terms_page_title")}
        </h1>

        <section className="space-y-6">
          <p className="text-lg text-gray-300">
            <Trans
            i18nKey="terms_page_introduction"
            components={{
              strong: <span className="font-bold" />,
            }}
          />
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">
              {t("terms_page_article_1_title")}
            </h2>
            <p className="text-gray-400">
              {t("terms_page_article_1_content")}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">
              {t("terms_page_article_2_title")}
            </h2>
            <p className="text-gray-400">
              {t("terms_page_article_2_content")}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">
              {t("terms_page_article_3_title")}
            </h2>
            <p className="text-gray-400">
              {t("terms_page_article_3_content")}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">
              {t("terms_page_article_4_title")}
            </h2>
            <p className="text-gray-400">
              {t("terms_page_article_4_content")}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">
              {t("terms_page_article_5_title")}
            </h2>
            <p className="text-gray-400">
              {t("terms_page_article_5_content")}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">
              {t("terms_page_article_6_title")}
            </h2>
            <p className="text-gray-400">
              {t("terms_page_article_6_content")}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">
              {t("terms_page_article_7_title")}
            </h2>
            <p className="text-gray-400">
              {t("terms_page_article_7_content")}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">
              {t("terms_page_article_8_title")}
            </h2>
            <p className="text-gray-400">
              {t("terms_page_article_8_content")}
            </p>

          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">
              {t("terms_page_article_9_title")}
            </h2>
            <p className="text-gray-400">
              {t("terms_page_article_9_content")}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">
              {t("terms_page_article_10_title")}
            </h2>
            <p className="text-gray-400">
              {t("terms_page_article_10_content")}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">
              {t("terms_page_article_11_title")}
            </h2>
            <p className="text-gray-400">
              {t("terms_page_article_11_content")}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">
              {t("terms_page_article_12_title")}
            </h2>
            <p className="text-gray-400">
              {t("terms_page_article_12_content")}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">
              {t("terms_page_article_13_title")}
            </h2>
            <p className="text-gray-400">
              {t("terms_page_article_13_content")}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Terms;
