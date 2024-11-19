import React from 'react'
import NavBar from '../nav/NavBar'
import { Typography } from '@mui/material'
import CertificationsContainer from './CertificationsContainer'

const Certifications = () => {
  return (
    <div>
      <NavBar/>
      <Typography variant='h2' sx={{
        paddingTop: 2,
        fontFamily: 'League Spartan',
        fontWeight: 700
      }}>
        Certifications
      </Typography>
      <Typography variant='body1' sx={{
        paddingTop: 5,
        fontFamily: 'Titillium Web',
        fontWeight: 300
      }}>
        This page includes a listing of the certifications I have completed since high school. 
      </Typography>

      <CertificationsContainer/>
    </div>
  )
}

export default Certifications
