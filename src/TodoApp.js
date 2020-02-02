import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'

function TodoApp() {
  const initialTodos = [
    { id: 1, task: 'Do something1', completed: false },
    { id: 2, task: 'Do something2', completed: true },
    { id: 3, task: 'Do something3', completed: false }
  ]

  const [todos, setTodos] = useState(initialTodos)

  const addTodo = newTodoText => {
    setTodos([...todos, { id: 4, task: newTodoText, completed: false }])
  }
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa'
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{ height: '64px' }}>
        <Toolbar>
          <Typography coolo='inherit'>TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </Paper>
  )
}

export default TodoApp
