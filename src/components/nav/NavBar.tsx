import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Menu } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();


  const projectClick = () => {
    navigate('/projects');
  }

  const homeClick = () => {
    navigate('/')
  }

  return (
    <div>
      <AppBar position="static" style={{backgroundColor: '#5D737E'}}>
      <Toolbar style={{justifyContent: 'right'}}>
        <Button color="inherit" sx={{marginLeft: 2, marginRight: 2}} onClick={homeClick}>Home</Button>
        <Button color="inherit" sx={{marginLeft: 2, marginRight: 2}} onClick={projectClick}>Projects</Button>
        <Button color="inherit" sx={{marginLeft: 2, marginRight: 2}}>Contact</Button>
        <Button color="inherit" sx={{marginLeft: 2, marginRight: 2}}>LinkedIn</Button>
      </Toolbar>
    </AppBar>
    </div>
  )
}

export default NavBar
