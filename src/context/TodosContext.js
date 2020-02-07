import React, { createContext, useReducer } from 'react'
import useTodoState from '../hooks/useTodoState'

const defaultTodos = [
  { id: 1, task: 'Mow the lawn', completed: false },
  { id: 2, task: 'Release the kraken', completed: true }
]

export const TodosContext = createContext()

export function TodosProvider(props) {
  const todosStuff = useTodoState(defaultTodos)
  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  )
}
