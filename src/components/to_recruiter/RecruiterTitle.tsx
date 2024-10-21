import { Typography } from '@mui/material'
import React from 'react'

const RecruiterTitle = () => {
  return (
    <div>
      <Typography variant='h3' sx={{
         textAlign: 'center',
         paddingTop: 5, 
         fontFamily: 'League Spartan',
         fontWeight: 700
      }}>
         Dear Recruiter...
      </Typography>
    </div>
  )
}

export default RecruiterTitle
