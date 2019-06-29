import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from '../../assets/images/logo.jpg'

import './Navbar.css'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor:"#9568b6" 
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar} >
        <Toolbar>
          <img className="logo" edge="start" alt="temtemtools" src={logo} />
          <Typography variant="h6" className={classes.title}>
            TemTemTools
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}