import { List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

const ContactListRight = () => {
  return (
    <List>
      <ListItem>
         <ListItemText>
            <Typography sx={{fontSize: 32, fontFamily: 'Titillium Web', fontWeight: 600}}>
               forresteraidan13@gmail.com, forrester.aidan@ufl.edu
            </Typography> 
         </ListItemText>
      </ListItem>
      <ListItem>
         <ListItemText>
            <Typography sx={{fontSize: 32, fontFamily: 'Titillium Web', fontWeight: 600}}>
               (908) 458-3226
            </Typography>
         </ListItemText>
      </ListItem>
      <ListItem>
         <ListItemText>
            <Typography sx={{fontSize: 32, fontFamily: 'Titillium Web', fontWeight: 600}}>
               https://www.linkedin.com/in/aidan-forrester/
            </Typography>
         </ListItemText>
      </ListItem>
      <ListItem>
         <ListItemText>
            <Typography sx={{fontSize: 32, fontFamily: 'Titillium Web', fontWeight: 600}}>
               https://github.com/forrester-aidan
            </Typography>
         </ListItemText>
      </ListItem>
    </List>
  )
}

export default ContactListRight
