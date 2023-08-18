import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ru from '../languages/ru.json'
import ua from '../languages/ua.json'

i18n.use(initReactI18next).init({
  fallbackLng: 'ru',
  debug: true,
  resources: {
    ru,
    ua
  },
  ns: ['common'],
  interpolation: {
    escapeValue: false
  },
  lng: 'ru',
  react: {
    useSuspense: false
  }
})

export default i18n
