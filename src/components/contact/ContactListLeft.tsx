import { List, ListItem, ListItemText } from '@mui/material'
import React from 'react'

const ContactListLeft = () => {
  return (
   <List>
      <ListItem>
         <ListItemText>
            Emails:
         </ListItemText>
      </ListItem>
      <ListItem>
         <ListItemText>
            Phone Number:
         </ListItemText>
      </ListItem>
      <ListItem>
         <ListItemText>
            LinkedIn:
         </ListItemText>
      </ListItem>
      <ListItem>
         <ListItemText>
            GitHub:
         </ListItemText>
      </ListItem>
   </List>
  )
}

export default ContactListLeft
