import { ThemeContext, type ThemeContextType } from '@contexts/ThemeContext'
import { use } from 'react'

/**
 * Custom hook to access the ThemeContext.
 * @returns The current theme context value.
 */
export const useThemeContext = (): ThemeContextType => {
  const context = use(ThemeContext)

  if (!context)
    throw new Error('useThemeContext must be used within a ThemeProvider')

  return context
}
