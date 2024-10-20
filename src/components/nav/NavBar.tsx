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

  const contactClick = () => {
    navigate('/contact')
  }

  const linkedInClick = () => {
    window.open('https://www.linkedin.com/in/aidan-forrester/', '_blank')
  }

  return (
    <div>
      <AppBar position="static" style={{backgroundColor: '#5D737E'}}>
      <Toolbar style={{justifyContent: 'right'}}>
        <Button color="inherit" sx={{marginLeft: 2, marginRight: 2}} onClick={homeClick}>Home</Button>
        <Button color="inherit" sx={{marginLeft: 2, marginRight: 2}} onClick={projectClick}>Projects</Button>
        <Button color="inherit" sx={{marginLeft: 2, marginRight: 2}} onClick={contactClick}>Contact</Button>
        <Button color="inherit" sx={{marginLeft: 2, marginRight: 2, background: 'linear-gradient(135deg, #5f615f 5%, #02111B 95%)',}} onClick={linkedInClick}>LinkedIn</Button>
      </Toolbar>
    </AppBar>
    </div>
  )
}

export default NavBar
