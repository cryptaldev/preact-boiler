import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';
import EN from './locales/en.json';
import IT from './locales/it.json';

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(reactI18nextModule)
	.init({
		resources: {
			en: {
				translation: EN
			},
			it: {
				translation: IT
			}
		},
		fallbackLng: 'en',
		debug: true,

		interpolation: {
			escapeValue: false // not needed for react!!
		},

		react: {
			defaultTransParent: 'div', // needed for preact
			wait: true
		}
	});


export default i18n;