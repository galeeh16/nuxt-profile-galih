
import en from './locales/en.json'
import id from './locales/id.json'

export default defineI18nConfig((nuxt) => ({
  locale: 'id', // set locale
  // fallbackLocale: ['en', 'id'],
  messages: {
    en: en,
    id: id,
  },
}));
