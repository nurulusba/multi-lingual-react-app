import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const languages = ["en", "ger", "hin", "jap"];

  useEffect(() => {
    const lng = localStorage.getItem("lng");
    if (lng) {
      languages.map((l) => {
        if (l === lng) {
          i18n.changeLanguage(lng);
        }
      });
    }
  }, []);

  return (
    <div className="main-content">
      <div>
        <h1>Change Language</h1>
        <ul>
          <li
            onClick={() => {
              i18n.changeLanguage("en");
              localStorage.setItem("lng", "en");
            }}
          >
            en
          </li>
          <li
            onClick={() => {
              i18n.changeLanguage("ger");
              localStorage.setItem("lng", "ger");
            }}
          >
            ger
          </li>
          <li
            onClick={() => {
              i18n.changeLanguage("hin");
              localStorage.setItem("lng", "hin");
            }}
          >
            hin
          </li>
          <li
            onClick={() => {
              i18n.changeLanguage("jap");
              localStorage.setItem("lng", "jap");
            }}
          >
            jap
          </li>
        </ul>
      </div>
      <hr />
      <div>
        <h1>{t("Introduction")}</h1>
        <p>
          react-i18next{" "}
          {t(
            "is an internationalization-framework which offers a complete solution to localize your product from web to mobile and desktop"
          )}
          .
        </p>
      </div>
    </div>
  );
}

export default App;
