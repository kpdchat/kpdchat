import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import EN from './locales/en/translation.json'
import UA from './locales/ua/translation.json'

const resources = {
    en: {
        translation: EN
    },
    ua: {
        translation: UA
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        // debug: true, //to see debug in console
        lng: 'ua',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
