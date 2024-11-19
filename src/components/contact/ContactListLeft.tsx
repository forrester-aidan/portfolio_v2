import { List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

const ContactListLeft = () => {
  return (
   <List>
      <ListItem>
         <ListItemText>
            <Typography sx={{fontSize: 35, fontFamily: 'Titillium Web', fontWeight: 600}}>
               Emails:
            </Typography>
         </ListItemText>
      </ListItem>
      <ListItem>
         <ListItemText>
         <Typography sx={{fontSize: 35, fontFamily: 'Titillium Web', fontWeight: 600}}>
               Phone Number:
            </Typography>
         </ListItemText>
      </ListItem>
      <ListItem>
         <ListItemText>
            <Typography sx={{fontSize: 35, fontFamily: 'Titillium Web', fontWeight: 600}}>
               LinkedIn
            </Typography>
         </ListItemText>
      </ListItem>
      <ListItem>
         <ListItemText>
            <Typography sx={{fontSize: 35, fontFamily: 'Titillium Web', fontWeight: 600}}>
               GitHub
            </Typography>
         </ListItemText>
      </ListItem>
   </List>
  )
}

export default ContactListLeft
