import { DEV } from '@utils/env.config'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'

i18n
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`../data/${language}/${namespace}.json`),
    ),
  )
  .init({
    load: 'languageOnly',
    detection: {
      order: ['navigator'],
      lookupFromPathIndex: 0,
      lookupQueryString: 'lng',
      lookupCookie: 'meine_nanny_i18next',
    },
    debug: DEV,
    ns: ['default'],
    defaultNS: 'default',
    preload: ['es', 'en'],
    fallbackLng: 'en',
    supportedLngs: ['es', 'en'],
    nonExplicitSupportedLngs: true,
  })

export default i18n
