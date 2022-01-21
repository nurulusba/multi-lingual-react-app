import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import XHR from "i18next-xhr-backend";

import translationEng from "./locales/en/translation.json";
import translationGer from "./locales/ger/translation.json";
import translationHin from "./locales/hin/translation.json";
import translationJap from "./locales/jap/translation.json";

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    resources: {
      en: {
        translations: translationEng,
      },
      ger: {
        translations: translationGer,
      },
      hin: {
        translations: translationHin,
      },
      jap: {
        translations: translationJap,
      },
    },
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",
  });

export default i18n;
