import { Typography } from '@mui/material'
import React from 'react'

const RecruiterTitle = () => {
  return (
    <div className='flex justify-center items-center gap-4'>
      <Typography variant='h3' className='transition duration-150 cursor-default hover:text-slate-500 hover:-translate-y-1 hover:-translate-x-2 hover:scale-110' sx={{
         textAlign: 'center',
         paddingTop: 5, 
         fontFamily: 'League Spartan',
         fontWeight: 700
      }}>
         Dear
      </Typography>
      <Typography variant='h3' className='transition duration-150 cursor-default hover:text-orange-200 hover:-translate-y-1 hover:translate-x-2 hover:scale-110' sx={{
         textAlign: 'center',
         paddingTop: 5, 
         fontFamily: 'League Spartan',
         fontWeight: 700
      }}>
         Recruiter...
      </Typography>
    </div>
  )
}

export default RecruiterTitle
