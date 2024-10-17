import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Menu } from '@mui/material';

const NavBar = () => {
  return (
    <div>
      <AppBar position="static" style={{backgroundColor: '#5D737E'}}>
      <Toolbar style={{justifyContent: 'right'}}>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Signup</Button>
      </Toolbar>
    </AppBar>
    </div>
  )
}

export default NavBar
