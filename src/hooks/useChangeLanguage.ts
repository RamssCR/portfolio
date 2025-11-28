import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export type Language = 'en' | 'es'

/**
 * Hook to change the application language.
 * @returns An object with a function to change the language.
 */
export const useChangeLanguage = (language: Language) => {
  const { i18n } = useTranslation()

  useEffect(() => {
    localStorage.setItem('language', language)
    i18n.changeLanguage(language)
  }, [language, i18n])

  /**
   * Changes the application language.
   * @returns void
   */
  const changeLanguage = () => i18n.changeLanguage(language)

  return { changeLanguage }
}
