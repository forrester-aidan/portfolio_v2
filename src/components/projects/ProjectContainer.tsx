import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Fade,
  Typography,
} from '@mui/material';
import MazeGameDescription from './maze_game/MazeGameDescription';
import SwampSchedulerDescription from './swamp_scheduler/SwampSchedulerDescription';
import CarRentalDescription from './car_rental/CarRentalDescription';
import VpnSystemDescription from './vpn_system/VpnSystemDescription';
import { TypeFormatFlags } from 'typescript';
import SwampImageCard from './swamp_scheduler/SwampImageCard';
import MazeImageCard from './maze_game/MazeImageCard';
import CarImageCard from './car_rental/CarImageCard';
import VpnImageCard from './vpn_system/VpnImageCard';
import RetailImageCard from './retail_management/RetailImageCard';
import RetailManagementDescription from './retail_management/RetailManagementDescription';

const styles = {
  border: '1px solid white',
  borderRadius: 10,
  padding: 3,
};

const progressStyles = {
  border: '1px solid yellow',
  borderRadius: 10,
  padding: 3,
};

const boxStyles = {
  width: '100%',
  border: '1px solid red',
  borderRadius: 10,
  height: '100%',
  flex: 3,
};

const ProjectContainer = () => {
  return (
    <Grid container spacing={8} columns={1} sx={{ margin: 10 }}>
      <Grid
        className="transition duration-150 hover:translate-x-1 hover:translate-y-1 hover:scale-105"
        display="flex"
        size={1}
        sx={progressStyles}
      >
        <RetailImageCard />
        <Box sx={{ flex: 4 }}>
          <RetailManagementDescription />
        </Box>
      </Grid>
      <Grid
        className="transition duration-150 hover:translate-x-1 hover:translate-y-1 hover:scale-105"
        display="flex"
        size={1}
        sx={styles}
      >
        <SwampImageCard />
        <Box sx={{ flex: 4 }}>
          <SwampSchedulerDescription />
        </Box>
      </Grid>
      <Grid
        className="transition duration-150 hover:translate-x-1 hover:translate-y-1 hover:scale-105"
        display="flex"
        size={1}
        sx={styles}
      >
        <CarImageCard />
        <Box sx={{ flex: 3 }}>
          <CarRentalDescription />
        </Box>
      </Grid>
      <Grid
        className="transition duration-150 hover:translate-x-1 hover:translate-y-1 hover:scale-105"
        display="flex"
        size={1}
        sx={styles}
      >
        <MazeImageCard />
        <Box sx={{ flex: 4 }}>
          <MazeGameDescription />
        </Box>
      </Grid>
      <Grid
        className="transition duration-150 hover:translate-x-1 hover:translate-y-1 hover:scale-105"
        display="flex"
        justifyContent="center"
        alignItems="center"
        size={1}
        sx={styles}
      >
        <VpnImageCard />
        <Box sx={{ flex: 4 }}>
          <VpnSystemDescription />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProjectContainer;
