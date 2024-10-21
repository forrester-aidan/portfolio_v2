import { ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

const IntroDescription = () => {
  return (
    <div>
      <ListItem sx={{padding: '4px 0'}}>
               <ListItemText>
                  <Typography sx={{fontFamily: 'Titillium Web', fontWeight: 300}}>
                    Hi there! My name is Aidan Forrester and I am a second-year at the University of Florida, 
                    currently pursuing a bachelor's degree in computer science. Prior to that, I attended the Academy 
                    for Information Technology, where I completed my high school diploma and was issued a vocational I.T.
                    certificate from the state of New Jersey. Using my knowledge of different programming languages 
                    (including but not limited to C++, Python, and HTML/CSS/JS), I’ve created a multitude of projects 
                    ranging from a fully-fledged game of Minesweeper to an advanced online car rental service.
                  </Typography>
               </ListItemText>
      </ListItem>
      <ListItem sx={{padding: '4px 0'}}>
               <ListItemText>
                <Typography sx={{fontFamily: 'Titillium Web', fontWeight: 300}}>
                  Recently, I was accepted into a web development team for the Society for Asian Scientists and Engineers (SASE), 
                  where I was in charge of redesigning and programming a brand new website for the society and its sponsors. 
                  I'm part of the frontend programming segment of the team, in charge of replicating the design mockups created by UX/UI. 
                  As a part of this summer, I began my studies of my AI/ML topics with a Machine Learning Specialization online course. 
                  This course is designed to teach me the core principles of Machine Learning, such as supervised/unsupervised learning, 
                  neural networks, and deep learning. Using libraries/tools such as NumPy, Matplotlib and TensorFlow, 
                  I'm able to get a comprehensive and interactive education in the fundamentals of ML.
                </Typography>
               </ListItemText>
      </ListItem>
    </div>
  )
}

export default IntroDescription
