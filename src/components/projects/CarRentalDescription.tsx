import { Box, Typography } from '@mui/material'
import React from 'react'

const CarRentalDescription = () => {
  return (
   <Box>
      <Box sx={{marginLeft: 3}}>
         <Typography variant='h3' sx={{textAlign: 'left', alignItems: 'top', fontFamily: 'League Spartan',
        fontWeight: 500}}>
            Car Rental System
         </Typography>
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
