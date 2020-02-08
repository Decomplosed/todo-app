import { useReducer, useEffect } from 'react'

function UseLocalStorageReducer(key, defaultVal, reducer) {
  const [state, setState] = useState(() => {
    let val

    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
    } catch (err) {
      val = defaultVal
    }
    return val
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default UseLocalStorageState
