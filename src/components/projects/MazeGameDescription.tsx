import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const MazeGameDescription = () => {
  const mazeGitHub = () => {
    window.open('https://github.com/forrester-aidan/maze_game', '_blank')
  }

  return (
    <Box>
      <Box sx={{display: 'flex', marginLeft: 3, alignItems: 'top'}}>
        <Box sx={{flex: 9}}>
          <Typography variant='h3' sx={{textAlign: 'left', alignItems: 'top', fontFamily: 'League Spartan',
          fontWeight: 500}}>
              Maze Game vs. AI
          </Typography>
        </Box>
         <Box sx={{flex: 1}}>
          <Button onClick={mazeGitHub} sx={{
            fontFamily: 'League Spartan', 
            fontWeight: 700, 
            fontSize: 18, 
            background: 'linear-gradient(135deg, red 5%, purple 95%)', 
            color: 'white'}}>
              GITHUB
          </Button>
         </Box>  
      </Box>
      <Box sx={{margin: 3}}>
         <Typography variant='body1' sx={{textAlign: 'left', alignItems: 'top', fontFamily: 'Titillium Web',
        fontWeight: 300}}>
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
