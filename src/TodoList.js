import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'

function TodoList(props) {
  return (
    <Paper>
      {props.todos.map(todo => (
        <li>{todo.task}</li>
      ))}
    </Paper>
  )
}

export default TodoList
