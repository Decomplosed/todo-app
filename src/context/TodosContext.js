import React, { createContext } from 'react'
import useTodoState from '../hooks/useTodoState'

const defaultTodos = [
  { id: 1, task: 'Mow the lawn', completed: false },
  { id: 2, task: 'Release the kraken', completed: true }
]

export const TodosContext = createContext()

function TodosProvider(props) {
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    defaultTodos
  )
}
