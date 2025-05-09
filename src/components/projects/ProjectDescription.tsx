import { Box, Button, Typography } from '@mui/material';
import React from 'react';

interface Props {
  title: string;
  description: string;
  gitHubLink: string;
}

const ProjectDescription: React.FC<Props> = ({
  title,
  description,
  gitHubLink,
}) => {
  const swampGitHub = () => {
    window.open(gitHubLink, '_blank');
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
            {title}
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
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectDescription;
