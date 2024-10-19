import { Box, Typography } from '@mui/material'
import React from 'react'

const TestHoverBox = () => {
  return (
      <Box 
         sx={{ 
         display: 'flex', 
         alignItems: 'center', 
         padding: '8px', 
         borderRadius: '4px',
         position: 'relative', 
         overflow: 'hidden', 
         cursor: 'pointer',
         '&:hover .hoverBox': {
            width: '100%', // Extend on hover
            transition: 'width 0.3s ease',
         },
         }}
      >
         <Box 
            className="hoverBox"
            sx={{ 
               width: '0%', // Start with 0 width
               height: '100%', 
               backgroundColor: 'lightcoral', 
               transition: 'width 0.3s ease',
               borderRadius: '4px 0 0 4px', // Rounded corners on the left
            }}
         />
         <Typography 
            variant="h6" 
            sx={{ 
               padding: '8px', 
               flexGrow: 1,
               transition: 'color 0.3s ease',
               color: 'black', // Default color
               '&:hover': {
                  color: 'white', // Change text color on hover
               },
            }}
            >
         Your text goes here
         </Typography>
   </Box>
  )
}

export default TestHoverBox
