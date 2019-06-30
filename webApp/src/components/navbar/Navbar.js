import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar'
import logo from '../../assets/images/logo.jpg'
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';


import './Navbar.css'
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';

const styles = (theme => ({
  root: {
    flexGrow: 1
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
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
            <img className="logo" edge="start" alt="temtemtools" src={logo} />
            <Hidden only="xs">
              <Typography variant="h6" className={classes.title}>
                TemTemTools
              </Typography>
            </Hidden>
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
