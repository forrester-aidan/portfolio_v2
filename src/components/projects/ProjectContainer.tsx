import React from 'react'
import Grid from '@mui/material/Grid2';
import { Box } from '@mui/material';
import MazeGameDescription from './MazeGameDescription';
import SwampSchedulerDescription from './SwampSchedulerDescription';
import CarRentalDescription from './CarRentalDescription';

const styles = { 
  border: '1px solid white',
  borderRadius: 10,
  padding: 3
}

const boxStyles = {
  width: '100%', 
  border: '1px solid red', 
  borderRadius: 10,
  height: '100%', 
  flex: 3
}
 
 const ProjectContainer = () => {
  return (
      <Grid container spacing={8} columns={1} sx={{margin: 10}}>
        <Grid display="flex" size={1} sx={styles}>
          <Box
              component="img"
              src="swamp_scheduler_vid.gif" // Replace with your image path
              sx={boxStyles} // Responsive styling
            />
            <Box sx={{flex: 4}}>
              <SwampSchedulerDescription />
            </Box>
        </Grid>
        <Grid display="flex" size={1} sx={styles}>
          <Box
              component="img"
              src="car_rental_vid.webp" // Replace with your image path
              sx={{ 
                border: '1px solid red',
                borderRadius: 10,
                width: '55%',
                height: '100%',
              }} // Responsive styling
            />
            <Box sx={{flex: 8}}>
              <CarRentalDescription />
            </Box>
        </Grid>
        <Grid display="flex" size={1} sx={styles}>
        <Box
              component="img"
              src="maze_game_vid.gif" // Replace with your image path
              sx={boxStyles} // Responsive styling
            />
            <Box sx={{flex: 4}}>
              <MazeGameDescription />
            </Box>
        </Grid>
        <Grid display="flex" justifyContent="center" alignItems="center" size={1} sx={styles}>
        <Box
              component="img"
              src="vpn_system_vid.gif" // Replace with your image path
              sx={boxStyles} // Responsive styling
            />
            <Box sx={{flex: 4}}>
              Hello 2
            </Box>
        </Grid>
      </Grid>
   );
 };

export default ProjectContainer

