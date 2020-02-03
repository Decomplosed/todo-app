import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import uuid from 'uuid/v4'

function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '')
  // const initialTodos = [
  //   { id: 1, task: 'Do something1', completed: false },
  //   { id: 2, task: 'Do something2', completed: true },
  //   { id: 3, task: 'Do something3', completed: false }
  // ]

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

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
      <Grid container justify='center' style={{ marginTop: '2rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp
