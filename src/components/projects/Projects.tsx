import React from 'react'
import NavBar from '../nav/NavBar'
import { Typography } from '@mui/material'
import VerticalProjectTimeline from './VerticalProjectTimeline'

const Projects = () => {
  return (
    <div>
      <NavBar/>
      <Typography variant='h2' sx={{
        paddingTop: 2
      }}>
        Projects
      </Typography>
      <Typography variant='body1' sx={{
        paddingTop: 5
      }}>
        This page includes a comprehensive timeline of the projects I have completed over the years. 
      </Typography>
      <Typography variant='body1' sx={{
        padding: 1
      }}>
        Hover over each node to view the project in greater detail.
      </Typography>

      <VerticalProjectTimeline />
    </div>
  )
}

export default Projects