import React from 'react'
import { Box, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material'
import IntroList from './IntroList'


const IntroContainer = () => {
  return (
    <div>
      <Box className='border-2 border-white rounded-md transition duration-150 hover:bg-gray-700' sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 auto', 
          width: 1200, height: 800, textAlign: 'center', borderRadius: 10,  backgroundColor: '#3F4045', marginTop: 5}}>
          <Box sx={{paddingLeft: 10, flex: 3}}>
               <IntroList />
          </Box>
          <Box 
          component="img"
          src="profile.jpg"
          alt="Example"
          sx={{
               flex: 2,
               marginRight: 10,
               marginLeft: 10,
               width: '50%',
               height: 'auto',
               borderRadius: 2,
               boxShadow: 2,
          }}
          className='border-2 border-black rounded-md transition duration-150 hover:-translate-y-1aa hover:scale-105'
          >
               
          </Box>
      </Box>
    </div>
  )
}

export default IntroContainer
