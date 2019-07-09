import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.jpg'

import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';

const styles = (theme => ({
  root: {
    flexGrow: 1
  },
  logo: {
    height: '50px',
    borderRadius: '30px',
    marginRight: '10px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link:{
    flexGrow: 1,
    textDecoration: 'none',
    color: 'white',
    display: 'flex',
    position: 'relative',
    alignItems: 'center'
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: theme.palette.secondary.main,
  },
}));

export class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInOpen: false,
      signUpOpen: false
    };
  }

  closeSignInModal() {
    this.setState({ signInOpen: false });
  };

  closeSignUpModal() {
    this.setState({ signUpOpen: false });
  };

  render() {
    const { classes } = this.props;


    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.bar} >
          <Toolbar>
            <Link to={'/'} className={classes.link}>
              <img className={classes.logo} edge="start" alt="temtemtools" src={logo} />
              <Hidden only="xs">
                <Typography variant="h6" className={classes.title}>
                  TemTemTools
              </Typography>
              </Hidden>
            </Link>
            <Avatar className={classes.orangeAvatar}>N</Avatar>
            <Button color="inherit" onClick={() => this.setState({ signInOpen: true })}>Login</Button>
            <Button color="inherit" onClick={() => this.setState({ signUpOpen: true })}>Sign Up</Button>
          </Toolbar>
          <SignIn open={this.state.signInOpen} onClose={() => this.closeSignInModal()} onOpenSignUp={() => this.setState({ signUpOpen: true, signInOpen: false })} />
          <SignUp open={this.state.signUpOpen} onClose={() => this.closeSignUpModal()} onOpenSignIn={() => this.setState({ signInOpen: true, signUpOpen: false })} />
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar)
