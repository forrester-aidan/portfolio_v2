import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const SwampSchedulerDescription = () => {
  const swampGitHub = () => {
    window.open('https://github.com/ufosc/SwampScheduler', '_blank')
  }

  return (
    <Box>
      <Box sx={{display: 'flex', marginLeft: 3, alignItems: 'top'}}>
        <Box sx={{flex: 5}}>
          <Typography variant='h3' sx={{textAlign: 'left', alignItems: 'top', fontFamily: 'League Spartan',
          fontWeight: 500}}>
              Swamp Scheduler
          </Typography>
        </Box>
         <Box sx={{flex: 1}}>
          <Button onClick={swampGitHub} sx={{
            fontFamily: 'League Spartan', 
            fontWeight: 700, 
            fontSize: 18, 
            background: 'linear-gradient(135deg, red 5%, purple 95%)', 
            color: 'white'}}>
              GITHUB
          </Button>
         </Box>  
      </Box>
      <Box sx={{margin: 3}}>
         <Typography variant='body1' sx={{textAlign: 'left', alignItems: 'top', fontFamily: 'Titillium Web',
        fontWeight: 300}}>
            This project was an open-source collaboration that I participated in as a member of the Open-Source Club. Being my first
            introduction to the React.js framework, it took a lot of outside research and studying to initially get immersed into the
            project environment. The first pull request I submitted was a dynamic dark mode that responds to the browser state using
            Tailwind CSS. Designing the dark mode took a lot of work, requiring a lot of research on proper color schemes, combinations
            of colors, and which elements need which color. Having it automatically respond to the browser made it easier than just
            doing it manually with a toggle switch, and with Tailwind it was super intuitive. 
         </Typography>
      </Box>
    </Box>
  )
}

export default SwampSchedulerDescription
