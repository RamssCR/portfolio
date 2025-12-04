import { useState } from 'react'

/**
 * Custom hook to manage URL hash parameters.
 * @returns An object containing the current parameter and a function to update it.
 */
export const useParam = () => {
  const [param, setParam] = useState<string | null>(null)

  /**
   * Updates the parameter state with the current URL hash.
   */
  const getParam = () => {
    setTimeout(() => {
      const hash = window.location.hash.replace('#', '')
      setParam(hash)
    }, 0)
  }

  return { param, getParam }
}
