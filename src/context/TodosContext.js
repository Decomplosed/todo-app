import React, { createContext, useReducer } from 'react'
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer'
import todoReducer from '../reducers/TodoReducer'

const defaultTodos = [
  { id: 1, task: 'Mow the lawn', completed: false },
  { id: 2, task: 'Release the kraken', completed: true }
]

export const TodosContext = createContext()
export const DispatchContext = createContext()

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos)
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}
