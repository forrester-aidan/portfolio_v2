import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Fade,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

const RetailImageCard = () => {
  const [retailHovered, setRetailHovered] = useState(false);

  return (
    <Box
      sx={{
        width: '100%',
        border: '1px solid red',
        borderRadius: 10,
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        flex: 3,
      }}
      onMouseEnter={() => setRetailHovered(true)}
      onMouseLeave={() => setRetailHovered(false)}
    >
      <Fade in={!retailHovered} timeout={300}>
        <Card
          sx={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            borderRadius: 10,
          }}
        >
          {' '}
          // image
          <CardMedia
            component="img"
            image="retail.png"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover', // Ensures the image covers the box without distortion
              position: 'absolute', // Ensures it fills the box
              top: 0,
              left: 0,
            }}
          />
        </Card>
      </Fade>
      <Fade in={retailHovered}>
        <Card
          sx={{
            // coding languages
            width: '100%',
            height: '100%',
            borderRadius: 10,
            backgroundColor: '#2F2F2E',
            color: 'white',
          }}
        >
          <CardContent sx={{ paddingTop: '20%' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%', // Ensures full height is used
              }}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{ fontFamily: 'League Spartan', fontWeight: 500 }}
              >
                TypeScript, React.js, Node.js
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Fade>
    </Box>
  );
};

export default RetailImageCard;
