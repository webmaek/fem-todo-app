import { useState, useEffect } from 'react'

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : defaultValue
    } catch (error) {
      return defaultValue
    }
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [state])

  return [state, setState]
}

export { useLocalStorage }
