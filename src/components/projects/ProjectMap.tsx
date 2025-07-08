import React, { useState } from 'react';
import projects from './ProjectData';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Fade,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import ProjectImageCard from './ProjectImageCard';
import ProjectDescription from './ProjectDescription';

interface Props {
  // define your props here
}

const progressStyles = {
  border: '1px solid yellow',
  borderRadius: 10,
  padding: 3,
};

const styles = {
  border: '1px solid white',
  borderRadius: 10,
  padding: 3,
};

const ProjectMap: React.FC<Props> = () => {
  return (
    <Grid container spacing={8} columns={1} sx={{ margin: 10 }}>
      {projects.map((project) => (
        <Grid
          className="transition duration-150 hover:translate-x-1 hover:translate-y-1 hover:scale-105"
          display="flex"
          size={1}
          sx={project.status === 'in progress' ? progressStyles : styles}
        >
          <ProjectImageCard
            imageUrl={project.image}
            imageObjectFit={project.imageObjectFit}
            languages={project.languages}
          />
          <Box sx={{ flex: 4 }}>
            <ProjectDescription
              title={project.title}
              description={project.description}
              gitHubLink={project.gitHubLink}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectMap;
