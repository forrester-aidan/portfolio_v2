import React from 'react'
import { Box, Paper, Typography, Divider } from '@mui/material';
 
 const VerticalProjectTimeline = () => {
   return (
      <Box sx={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
         <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
            <Box sx={{ flexGrow: 1 }}>
               Hello
            </Box>
            <Box sx={{ flexGrow: 1 }}>
               Hello
            </Box>
         </Box>
         
         <Divider orientation="vertical" flexItem sx={{backgroundColor: 'white'}} />
         <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
            <Box sx={{ flexGrow: 1 }}>
               Hello
            </Box>
            <Box sx={{ flexGrow: 1 }}>
               Hello
            </Box>
         </Box>
    </Box>
   );
 };

export default VerticalProjectTimeline

