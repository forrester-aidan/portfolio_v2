import { Box, Typography } from '@mui/material'
import React from 'react'

const SwampSchedulerDescription = () => {
  return (
    <Box>
      <Box sx={{marginLeft: 3}}>
         <Typography variant='h3' sx={{textAlign: 'left', alignItems: 'top'}}>
            Swamp Scheduler
         </Typography>
      </Box>
      <Box sx={{margin: 3}}>
         <Typography variant='body1' sx={{textAlign: 'left', alignItems: 'top'}}>
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
