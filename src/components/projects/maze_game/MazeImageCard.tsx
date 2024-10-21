import { Box, Card, CardContent, CardMedia, Fade, Typography } from '@mui/material'
import React, { useState } from 'react'

const MazeImageCard = () => {
   const [mazeHovered, setMazeHovered] = useState(false)

return (
   <Box sx={{width: '100%', 
      border: '1px solid red', 
      borderRadius: 10,
      height: '100%',
      position: 'relative',
      flex: 2,
      }} onMouseEnter={() => setMazeHovered(true)} onMouseLeave={() => setMazeHovered(false)}>
      <Fade in={!mazeHovered} timeout={300}>
         <Card sx={{ width: '100%', height: '100%', position: 'absolute', borderRadius: 10, background: 'none'}}>
            <CardMedia
            component='img'
            image='maze_game_vid.gif'
            sx={{
               width: '100%',
               height: '100%',
               objectFit: 'fill',  // Ensures the image covers the box without distortion 
               top: 0,
               left: 0,
            }}
            />
         </Card>
      </Fade>
      <Fade in={mazeHovered}>
         <Card sx={{ // coding languages
            width: '100%', 
            height: '100%', 
            borderRadius: 10, 
            backgroundColor: '#2F2F2E', 
            color: 'white'}}>
            <CardContent sx={{paddingTop: '30%'}}>
            <Box
               sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%', // Ensures full height is used
               }}
            >
               <Typography variant="h5" component="div" sx={{fontFamily: 'League Spartan', fontWeight: 500}}>
                  Python
               </Typography>
            </Box>
            </CardContent>
         </Card>
      </Fade>
   </Box> 
  )
}

export default MazeImageCard
