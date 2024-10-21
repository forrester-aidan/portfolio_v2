import { Box, Typography } from '@mui/material'
import React from 'react'

const VpnSystemDescription = () => {
  return (
      <Box>
         <Box sx={{marginLeft: 3, alignItems: 'top'}}>
            <Typography variant='h3' sx={{textAlign: 'left', alignItems: 'top', fontFamily: 'League Spartan',
        fontWeight: 500}}>
               VPN System
            </Typography>
         </Box>
         <Box sx={{margin: 3}}>
            <Typography variant='body1' sx={{textAlign: 'left', alignItems: 'top'}}>
               I enjoyed this project because it was my first application of Java into a project of my own. I learned Java for the 
               first time back in 2019, while I was a junior in high school and studying Information Technology as a vocation. Since my
               only exposed to coding languages was HTML/CSS/JS prior to that, it was difficult to adjusted to the Java environment. With 
               this project, I wanted to practice concepts used in cybersecurity and encyrpted data transfer, so using the Socket and 
               ServerSocket classes, I was able to created a mock VPN system that can transfer data between the client and server and 
               display it to the console. At the moment, I am debugging the EncryptionUtil class that generates a secret key and cipher 
               to send data securely. 
            </Typography>
         </Box>
   </Box>
  )
}

export default VpnSystemDescription
