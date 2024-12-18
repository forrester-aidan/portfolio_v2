import React from 'react'
import NavBar from './nav/NavBar'
import { Typography } from '@mui/material'
import TimelineContent from './TimelineContent'

const Timeline = () => {
  return (
    <div>
      <NavBar/>
      <Typography variant='h2' className='pt-5' sx={{
        fontFamily: 'League Spartan',
        fontWeight: 700
      }}>
        Timeline
      </Typography>
      <Typography variant='body1' className='pt-3' sx={{
        fontFamily: 'Titillium Web',
        fontWeight: 300
      }}>
        This page includes a comprehensive timeline of my journey as a computer science student. 
      </Typography>

      <Typography variant='body1' className='pt-5' sx={{
        fontFamily: 'Titillium Web',
        fontWeight: 300
      }}>
        Scroll down to view my past in this field!
      </Typography>

      <TimelineContent/>
    </div>
  )
}

export default Timeline
