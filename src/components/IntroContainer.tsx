import React from 'react'
import { Box, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material'


const IntroContainer = () => {
  return (
    <div>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 auto', width: 1000, height: 500, textAlign: 'center', borderRadius: 1,  backgroundColor: '#3F4045'}}>
          <Box sx={{paddingLeft: 10}}>
               <List>
                    <ListItem>
                         <ListItemText>
                              NAME: Aidan Forrester
                         </ListItemText>
                    </ListItem>
                    <ListItem>
                         <ListItemText>
                              YEAR: Junior
                         </ListItemText>
                    </ListItem>
                    <ListItem>
                         <ListItemText>
                              SCHOOL: University of Florida
                         </ListItemText>
                    </ListItem>
                    <ListItem>
                         <ListItemText>
                              GPA: 3.37
                         </ListItemText>
                    </ListItem>
                    <ListItem>
                         <ListItemText>
                              BEST LANGUAGES: Python, C++, Java, TypeScript
                         </ListItemText>
                    </ListItem>
                    <ListItem>
                         <ListItemText>
                              DESCRIPTION: Placeholder
                         </ListItemText>
                    </ListItem>
               </List>
          </Box>
          <Box 
          component="img"
          src="logo192.png"
          alt="Example"
          sx={{
               width: '50%',
               height: 'auto',
               borderRadius: 2,
               boxShadow: 2,
          }}
          >
               
          </Box>
      </Box>
    </div>
  )
}

export default IntroContainer
