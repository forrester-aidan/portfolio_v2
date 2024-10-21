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
        paddingTop: 2, 
        fontFamily: 'League Spartan',
        fontWeight: 700
      }}>
            Contact
         </Typography>
         <Typography sx={{
        paddingTop: 2, 
        fontFamily: 'Titillium Web',
        fontWeight: 600
      }}>
            The first email is my main source of communication that I use. Feel free to reach out whenever!
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
