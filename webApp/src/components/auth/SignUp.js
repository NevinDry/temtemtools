import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import EditOutlined from '@material-ui/icons/EditOutlined';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: "",
            passwordrepeat: "",
            passwordError: false,
        };
    }

    checkPasswordMatch = () => {

        console.log(this.state);

        if (this.state.passwordrepeat.length > 0 && this.state.password !== this.state.passwordrepeat) {
            this.setState({
                passwordError: true
            });
        } else {
            this.setState({
                passwordError: false
            });
        }
    };

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        }, () => {
            if (name === "password" || name === "passwordrepeat") {
                this.checkPasswordMatch();
            }
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

    }

    render() {
        const { classes } = this.props;

        return (
            <Dialog open={this.props.open} onClose={this.props.onClose} aria-labelledby="simple-dialog-title">
                <Container component="main" maxWidth="sm">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <EditOutlined />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        <form className={classes.form} onSubmit={this.handleSubmit} noValidate>
                        <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                autoFocus
                                onChange={this.handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={this.handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={this.handleInputChange}
                            />
                            <TextField
                                error={this.state.passwordError}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="passwordrepeat"
                                label="Confirm Password"
                                helperText={this.state.passwordError ? "Password don't match" : ""}
                                type="password"
                                id="passwordrepeat"
                                autoComplete="current-password"
                                onChange={this.handleInputChange}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign Up
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link href="#" onClick={this.props.onOpenSignIn} variant="body2">
                                        {"Already have an account? Sign In"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
            </Dialog>
        )
    }
}

export default withStyles(styles)(SignUp)
