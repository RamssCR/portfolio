import { type Theme, ThemeContext } from '@contexts/ThemeContext'
import { useEffect, useState, type ReactNode } from 'react'

/**
 * ThemeProvider component to manage and provide theme context to the application.
 * @param props - The props object containing children components.
 * @returns The ThemeProvider component wrapping its children with ThemeContext.
 */
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) ?? 'light',
  )

  /**
   * Function to toggle between light and dark themes.
   * @returns void
   */
  const change = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return <ThemeContext value={{ theme, change }}>{children}</ThemeContext>
}
