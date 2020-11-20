import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import localesResource from '../assets/locales';
import * as RNLocalize from 'react-native-localize';

const languageDetector = {
  type: 'languageDetector',
  detect: () => {
    const fallback = { languageTag: 'en', isRTL: false };
    const lang = RNLocalize.findBestAvailableLanguage(Object.keys(localesResource)) || fallback;
    console.log('RNLocalize.findBestAvailableLanguage()= ' + lang.languageTag);
    return lang.languageTag;
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    fallbackLng: 'en',
    resources: localesResource,
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: false,
      format: false,
    },
    react: {
      wait: true,
    },
  });

export default i18n;
