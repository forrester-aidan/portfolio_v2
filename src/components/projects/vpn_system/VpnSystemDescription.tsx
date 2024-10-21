import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const VpnSystemDescription = () => {
  const vpnGitHub = () => {
      window.open('https://github.com/forrester-aidan/vpn_system', '_blank')
  } 

  return (
      <Box>
         <Box sx={{display: 'flex', marginLeft: 3, alignItems: 'top'}}>
        <Box sx={{flex: 5}}>
          <Typography variant='h3' sx={{textAlign: 'left', alignItems: 'top', fontFamily: 'League Spartan',
          fontWeight: 500}}>
              VPN System
          </Typography>
        </Box>
         <Box sx={{flex: 1}}>
          <Button onClick={vpnGitHub} sx={{
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
