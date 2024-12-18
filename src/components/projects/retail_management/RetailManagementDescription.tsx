import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const SwampSchedulerDescription = () => {
  const swampGitHub = () => {
    window.open(
      'https://github.com/forrester-aidan/retail_management',
      '_blank',
    );
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', marginLeft: 3, alignItems: 'top' }}>
        <Box sx={{ flex: 5 }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'left',
              alignItems: 'top',
              fontFamily: 'League Spartan',
              fontWeight: 500,
            }}
          >
            Retail Management
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Button
            onClick={swampGitHub}
            className="transition duration-150 hover:text-slate-400"
            sx={{
              fontFamily: 'League Spartan',
              fontWeight: 700,
              fontSize: 18,
              background: 'linear-gradient(135deg, red 5%, purple 95%)',
              color: 'white',
            }}
          >
            GITHUB
          </Button>
        </Box>
      </Box>
      <Box sx={{ margin: 3 }}>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'left',
            alignItems: 'top',
            fontFamily: 'Titillium Web',
            fontWeight: 300,
          }}
        >
          A solo project that is currently a work in progress, I wanted to be
          able to apply my knowledge of both frontend, backend, and database
          management to create a comprehensive retail management system for
          supermarkets and clothing retailers to use. Using React with
          Typescript and Tailwind CSS, I was able to create a basic draft of
          some of the functionality of the website, including a search function
          for customers that have purchased items from the store as well as
          organizing customers in order of recency/frequency. This is project is
          a proper reflection of my knowledge as a computer science student to
          this day.
        </Typography>
      </Box>
    </Box>
  );
};

export default SwampSchedulerDescription;
