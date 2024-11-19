import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react'
import MLImageCard from './machine_learning/MLImageCard';
import MLDescription from './machine_learning/MLDescription';

const styles = { 
   border: '1px solid white',
   borderRadius: 10,
   padding: 3
 }

const CertificationsContainer = () => {
  return (
      <Grid container spacing={8} columns={1} sx={{margin: 10}}>
         <Grid display="flex" size={1} sx={styles}>
            <MLImageCard/>
            <Box sx={{flex: 4}}>
               <MLDescription />
            </Box>
         </Grid>
      </Grid>
  )
}

export default CertificationsContainer
