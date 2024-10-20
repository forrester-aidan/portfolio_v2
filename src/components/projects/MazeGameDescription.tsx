import { Box, Typography } from '@mui/material'
import React from 'react'

const MazeGameDescription = () => {
  return (
    <Box>
      <Box sx={{marginLeft: 3, alignItems: 'top'}}>
         <Typography variant='h3' sx={{textAlign: 'left', alignItems: 'top'}}>
            Maze Game vs. AI
         </Typography>
      </Box>
      <Box sx={{margin: 3}}>
         <Typography variant='body1' sx={{textAlign: 'left', alignItems: 'top'}}>
            This was one of my favorite projects that I've built in Python, and actually spent a long time playing the game after
            I created it. Using the tkinter library to create the canvas, I was able to draw a 2d array of squares to account for 
            the grid itself, using 1 to denote a tile that can be traversed and 0 to denote a barrier. The simple part of this program
            was getting the square to move, however coding the AI took a bit longer. In order to ensure the AI was not just roaming
            at random, I used the Breadth First Search algorithm to search for the shortest path to the player, and had the AI bot
            move in the respective direction that was along that path. This would happen at every keyboard button press, and would 
            constantly update as the game continued. I added three AI bots in order to make the project more challenging for the user, 
            that all act independently from each other. Currently, I am debugging issues related to AI overlap, making sure they do 
            not bump into each other.
         </Typography>
      </Box>
    </Box>
  )
}

export default MazeGameDescription
