import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import NavBar from '../nav/NavBar'
import ContactListLeft from './ContactListLeft'
import ContactListRight from './ContactListRight'

const Contact = () => {
  return (
   <div>
      <NavBar/>
      <Box>
         <Typography variant='h2' sx={{
        paddingTop: 2
      }}>
            Contact
         </Typography>
         <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 70,
            margin: 5,
            padding: 15,
            border: '1px solid white',
            borderRadius: 10,
         }}>
            <Box>
               <ContactListLeft />
            </Box>
            <Box>
               <ContactListRight/>
            </Box>
         </Box>
      </Box>
   </div>
  )
}

export default Contact
