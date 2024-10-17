import React from 'react'
import { List, ListItem, ListItemText } from '@mui/material'
import IntroDescription from './IntroDescription'

const IntroList = () => {
  return (
    <div>
      <List>
         <ListItem sx={{padding: '4px 0'}}>
               <ListItemText sx={{fontSize: 30}}>
                  NAME: Aidan Forrester
               </ListItemText>
         </ListItem>
         <ListItem sx={{padding: '4px 0'}}>
               <ListItemText>
                  YEAR: Junior
               </ListItemText>
         </ListItem>
         <ListItem sx={{padding: '4px 0'}}>
               <ListItemText>
                  SCHOOL: University of Florida
               </ListItemText>
         </ListItem>
         <ListItem sx={{padding: '4px 0'}}>
               <ListItemText>
                  GPA: 3.37
               </ListItemText>
         </ListItem>
         <ListItem sx={{padding: '4px 0'}}>
               <ListItemText>
                  BEST LANGUAGES: Python, C++, Java, TypeScript
               </ListItemText>
         </ListItem>
         <IntroDescription/>
      </List>
    </div>
  )
}

export default IntroList
