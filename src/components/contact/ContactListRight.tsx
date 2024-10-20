import { List, ListItem, ListItemText } from '@mui/material'
import React from 'react'

const ContactListRight = () => {
  return (
    <List>
      <ListItem>
         <ListItemText>
            forresteraidan13@gmail.com, forrester.aidan@ufl.edu
         </ListItemText>
      </ListItem>
      <ListItem>
         <ListItemText>
            (908) 458-3226
         </ListItemText>
      </ListItem>
      <ListItem>
         <ListItemText>
            https://www.linkedin.com/in/aidan-forrester/
         </ListItemText>
      </ListItem>
      <ListItem>
         <ListItemText>
            https://github.com/forrester-aidan
         </ListItemText>
      </ListItem>
    </List>
  )
}

export default ContactListRight
