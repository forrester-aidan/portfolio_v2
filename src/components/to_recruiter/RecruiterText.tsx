import { Typography } from '@mui/material'
import React from 'react'
import { isWhiteSpaceLike } from 'typescript'

const RecruiterText = () => {
  return (
    <div style={{border: '1px solid white',
      borderRadius: 10, margin: 50}}>
      <Typography variant='body1' sx={{
        marginLeft: 10, 
        marginRight: 10, 
        textAlign: 'center',
        padding: 3,
      }}>
      Please accept this portfolio as an expression of my interest in an internship position at your company. 
      With a track record of initiative and dependability, I have devised strategic attributes which I believe will prove valuable.
      Please take a look at my attached resume for a shortened look at my skills and experience. 
      Here's a snapshot of what I have to offer:
      </Typography>
      <Typography variant='body1' sx={{
        marginLeft: 10, 
        marginRight: 10, 
        textAlign: 'center',
        padding: 3,
      }}>

      Throughout the course of my career, I have perfected my understanding of coding languages and interpersonal abilities. 
      I am a capable and consistent problem-solver proficient at prioritizing and managing projects. I am progressive-minded and 
      in tune with new developments in my field. I have proven to be effective and collaborative with strong critical thinking talents. 
      I enjoy collective brainstorming sessions which allow me to coordinate activities to achieve a common goal. 
      Please use this portfolio as a means to get to know me better, and weigh the possibilities of me working at your company 
      in the summer.

      <Typography variant='body1' sx={{
        marginLeft: 10, 
        marginRight: 10, 
        textAlign: 'center',
        padding: 3,
      }}>
      Sincerely,
      </Typography>
      <Typography variant='body1' sx={{
        marginLeft: 10, 
        marginRight: 10, 
        textAlign: 'center',
      }}></Typography>
        Aidan Forrester
      </Typography>
    </div>
  )
}

export default RecruiterText
