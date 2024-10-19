import { Box, Typography } from '@mui/material'
import React from 'react'

const MazeGameDescription = () => {
  return (
    <Box>
      <Box sx={{marginLeft: 3, alignItems: 'top', border: '1px solid white'}}>
         <Typography variant='h3' sx={{textAlign: 'left', alignItems: 'top'}}>
            Maze Game vs. AI
         </Typography>
      </Box>
      <Box sx={{margin: 3}}>
         <Typography variant='body1' sx={{textAlign: 'left', alignItems: 'top'}}>
            This was one of the initial projects I've built in Python, 
         </Typography>
      </Box>
    </Box>
  )
}

export default MazeGameDescription
