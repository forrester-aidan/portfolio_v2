import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import IntroDescription from './IntroDescription';

const IntroList = () => {
  return (
    <div>
      <List>
        <ListItem sx={{ padding: '4px 0' }}>
          <ListItemText>
            <Typography sx={{ fontFamily: 'Titillium Web', fontWeight: 700 }}>
              NAME: Aidan Forrester
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem sx={{ padding: '4px 0' }}>
          <ListItemText>
            <Typography sx={{ fontFamily: 'Titillium Web', fontWeight: 700 }}>
              YEAR: Senior
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem sx={{ padding: '4px 0' }}>
          <ListItemText>
            <Typography sx={{ fontFamily: 'Titillium Web', fontWeight: 700 }}>
              SCHOOL: University of Florida
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem sx={{ padding: '4px 0' }}>
          <ListItemText>
            <Typography sx={{ fontFamily: 'Titillium Web', fontWeight: 700 }}>
              GPA: 3.39
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem sx={{ padding: '4px 0' }}>
          <ListItemText>
            <Typography
              className="text-red-300"
              sx={{
                fontSize: 20,
                fontFamily: 'Titillium Web',
                fontWeight: 700,
              }}
            >
              BEST LANGUAGES: JavaScript/TypeScript/React, Java, Python
            </Typography>
          </ListItemText>
        </ListItem>
        <IntroDescription />
      </List>
    </div>
  );
};

export default IntroList;
