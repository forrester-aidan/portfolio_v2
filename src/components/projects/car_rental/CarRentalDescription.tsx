import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const CarRentalDescription = () => {
   const carGitHub = () => {
      window.open('https://github.com/andjimenezuf/car_rental', '_blank')
   }

  return (
   <Box>
      <Box sx={{display: 'flex', marginLeft: 3, alignItems: 'top'}}>
        <Box sx={{flex: 5}}>
          <Typography variant='h3' sx={{textAlign: 'left', alignItems: 'top', fontFamily: 'League Spartan',
          fontWeight: 500}}>
              Car Rental System
          </Typography>
        </Box>
         <Box sx={{flex: 1}}>
          <Button onClick={carGitHub} className='transition duration-150 hover:text-slate-400' sx={{
            fontFamily: 'League Spartan', 
            fontWeight: 700, 
            fontSize: 18, 
            background: 'linear-gradient(135deg, red 5%, purple 95%)', 
            color: 'white'}}>
              GITHUB
          </Button>
         </Box>  
      </Box>
      <Box sx={{margin: 3, height: '100%'}}>
         <Typography variant='body1' sx={{textAlign: 'left', alignItems: 'top', fontFamily: 'Titillium Web',
        fontWeight: 300}}>
            In a group of two other students, we were able to create a mock car rental system for a fake company with Next.js that allows users 
            to make reservations at multiple different locations. Users were able to create an account (which was encrypted 
            and stored in a database), select cars from over 10,000 different options at 3 separate locations, and make reservations
            if they were labeled as "Available." We also implemented an Employee and Administrator page to be used for different members 
            of the company. Employees were able to view and change the inventory of the available cars (listing them as available, 
            reserved, or needing repair), as well as manage reservations held by different users. Administrators were able to do everything
            any Employee could, but could also manage the Employees that are in the company, giving or taking away their access to the 
            car inventory. All of our data was stored in an external database and was accessed using API calls and MySQL, allowing for sensitive
            information to be handled securely.  
         </Typography>
      </Box>
   </Box>
  )
}

export default CarRentalDescription
