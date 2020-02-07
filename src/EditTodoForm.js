import React, { useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import useInputState from './hooks/useInputState'
import { TodosContext } from './context/TodosContext'

function EditTodoForm({ id, task, toggleEditForm }) {
  const { editTodo } = useContext(TodosContext)
  const [value, handleChange, reset] = useInputState(task)

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        editTodo(id, value)
        reset()
        toggleEditForm()
      }}
      style={{ marginLeft: '1rem', width: '50%' }}
    >
      <TextField
        margin='normal'
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  )
}

export default EditTodoForm
