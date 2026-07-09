import { ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';

const IntroDescription = () => {
  return (
    <div>
      <ListItem sx={{ padding: '4px 0' }}>
        <ListItemText>
          <Typography sx={{ fontFamily: 'Titillium Web', fontWeight: 300 }}>
            Hi there! My name is Aidan Forrester and I am proud to announce
            that I've just graduated Cum Laude from the University of Florida, completing 
            a Bachelor's of Science in Computer Science. Prior to that, I attended
            the Academy for Information Technology, where I completed my high
            school diploma and was issued a vocational I.T. certificate from the
            state of New Jersey. Using my knowledge of different programming
            languages, I’ve created a multitude of projects ranging from a
            mobile ticket-sharing social platform to an immersive, VR educational experience
            in molecular biology. 
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '4px 0' }}>
        <ListItemText>
          <Typography sx={{ fontFamily: 'Titillium Web', fontWeight: 300 }}>
            Most recently, I was accepted as a Product Intern at Axuall, a
            software company dedicated to improving the clinical-credentialing
            system, allowing recruiters to hire new clinicians faster to help
            patients as soon as possible. As an intern, I was exposed to many
            different area of development, including the product life cycle,
            data prepartion and management with SQL, speaking with shareholders
            and clients, and most importantly the software side. I was involved
            with adding items to the backlog and Kanban board (such as epics,
            user stories, and tasks), researching data online for Redshift
            database integration, and constructing SQL queries to analyze over
            2.5 MILLION clinicians, sorting them based on Medicare enrollment,
            credential type, facility affiliations, and more! Overall, this
            experience has been the greatest stepping stone to my career,
            allowing me to learn and grow at a company that I've enjoyed to the
            fullest!
          </Typography>
          
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '4px 0' }}>
        <ListItemText>
          <Typography sx={{ fontFamily: 'Titillium Web', fontWeight: 300 }}>
            I'm thrilled to announce that I've accepted an offer to be a part of the 
            Capital One Technical Development Program! I can't wait to begin my journey
            as a new grad software engineer at a bigger company, and look forward to furthering
            my skills in computer/data science! 
          </Typography>
        </ListItemText>
      </ListItem>
    </div>
  );
};

export default IntroDescription;
