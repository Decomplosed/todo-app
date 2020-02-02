import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import CheckBox from '@material-ui/core/Checkbox'

function Todo({ task, completed }) {
  return (
    <ListItem>
      <CheckBox tabIndex={-1} checked={completed} />
      <ListItemText>{task}</ListItemText>
    </ListItem>
  )
}

export default Todo
