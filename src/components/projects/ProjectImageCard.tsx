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
        width: '100%',
        border: '1px solid red',
        borderRadius: 10,
        height: '100%',
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
            position: 'absolute',
            borderRadius: 10,
          }}
        >
          {' '}
          <CardMedia
            component="img"
            image={imageUrl}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: imageObjectFit, // Ensures the image covers the box without distortion
              position: 'absolute', // Ensures it fills the box
              top: 0,
              left: 0,
            }}
          />
        </Card>
      </Fade>
      <Fade in={swampHovered}>
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
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', // horizontal center
              justifyContent: 'center', // vertical center
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
