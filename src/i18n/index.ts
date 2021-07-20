import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt from './translations/pt';
import en from './translations/en';

i18n
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      pt,
      en,
    },
  });

export default i18n;
