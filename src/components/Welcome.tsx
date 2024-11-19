import React from 'react'
import { Typography } from '@mui/material'

const Welcome = () => {

  return (
    <div className='flex justify-center gap-6 items-center pt-5'>
      <Typography className='font-spartan cursor-default transition duration-150 hover:text-slate-500 hover:-translate-y-1 hover:-translate-x-2 hover:scale-110' variant='h1' style={{fontFamily: 'League Spartan', fontWeight: 700}}>
          WELCOME 
      </Typography>
      <Typography className='font-spartan cursor-default transition duration-150 hover:text-orange-200 hover:-translate-y-1 hover:-translate-x-1 hover:scale-110' variant='h1' style={{fontFamily: 'League Spartan', fontWeight: 700}}>
          TO
      </Typography>
      <Typography className='font-spartan cursor-default transition duration-150 hover:text-slate-500 hover:-translate-y-1 hover:translate-x-1 hover:scale-110' variant='h1' style={{fontFamily: 'League Spartan', fontWeight: 700}}>
          MY
      </Typography>
      <Typography className='font-spartan cursor-default transition duration-150 hover:text-orange-200 hover:-translate-y-1 hover:translate-x-2 hover:scale-110' variant='h1' style={{fontFamily: 'League Spartan', fontWeight: 700}}>
          PORTFOLIO!
      </Typography>
    </div>
  )
}

export default Welcome
