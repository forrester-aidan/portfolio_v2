import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Fade,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

interface Props {
  imageUrl: string;
  imageObjectFit: string;
  languages: string;
}

const ComponentName: React.FC<Props> = ({
  imageUrl,
  imageObjectFit,
  languages,
}) => {
  const [swampHovered, setSwampHovered] = useState(false);

  return (
    <Box
      sx={{
        display: 'inline-block',
        border: '1px solid red',
        borderRadius: 2,
        position: 'relative',
        overflow: 'hidden',
        flex: 3,
      }}
      onMouseEnter={() => setSwampHovered(true)}
      onMouseLeave={() => setSwampHovered(false)}
    >
      <Fade in={!swampHovered} timeout={300}>
        <Card
          sx={{
            width: '100%',
            height: '100%', 
            borderRadius: 2,
            overflow: 'hidden'
          }}
        >
          {' '}
          <CardMedia
            component="img"
            image={imageUrl}
            sx={{
              display: 'block',      // prevents small gaps
              width: '100%',         // natural width
              height: '100%',        // natural height
              objectFit: imageObjectFit,     // use the original image dimensions
              objectPosition: 'center',
              borderRadius: 'inherit'
            }}
          />
        </Card>
      </Fade>
      <Fade in={swampHovered}>
        <Card
          sx={{
            // coding languages
            position: 'absolute',
            inset: 0, // cover same area as image
            borderRadius: 2,
            backgroundColor: '#2F2F2E',
            color: 'white',
          }}
        >
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              height: '100%',
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{ fontFamily: 'League Spartan', fontWeight: 500 }}
            >
              {languages}
            </Typography>
          </CardContent>
        </Card>
      </Fade>
    </Box>
  );
};

export default ComponentName;
