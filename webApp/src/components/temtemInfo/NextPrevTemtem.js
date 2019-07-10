import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import LibraryAdd from '@material-ui/icons/LibraryAdd';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'react-router-dom';

const styles = (theme => (
    {
        root: {
            flexGrow: 1
        },
        button: {
            width: '100%'
        },
        arrowRight: {
            float: "right"
        },
        arrowLeft: {
            float: "left"
        },
        link: {
            textDecoration: 'none',
            color: 'unset',
            flexGrow: 1
        },
    }));

export class NextPrevTemtem extends Component {

    render() {
        const { prev, next, classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={2} >

                    <Hidden only={['md', 'lg', 'xl']}>
                        <Grid item xs={12}>

                            <Button variant="contained" className={classes.button} color="primary">
                                Add to my team
                            <LibraryAdd />
                            </Button>

                        </Grid>
                    </Hidden>

                    <Grid item xs={6} sm={6} md={4}>

                        <Button variant="contained" className={classes.button} color="secondary">
                            <Link to={'/temtem/' + prev.ref.id} className={classes.link}>

                                <ArrowLeft className={classes.arrowLeft} />

                                <span>
                                    Previous Temtem #{prev.no}
                                </span>
                            </Link>
                        </Button>

                    </Grid>

                    <Hidden only={["xs", "sm"]}>
                        <Grid item sm={4}>

                            <Button variant="contained" className={classes.button} color="primary">
                                Add to my team
                            <LibraryAdd />
                            </Button>

                        </Grid>
                    </Hidden>

                    <Grid item xs={6} sm={6} md={4}>

                        <Button variant="contained" className={classes.button} color="secondary">
                            <Link to={'/temtem/' + next.ref.id} className={classes.link}>

                                <span >
                                    Next Temtem #{next.no}
                                </span>

                                <ArrowRight className={classes.arrowRight} />
                            </Link>
                        </Button>

                    </Grid>
                </Grid>
            </div>
        )
    }
}

NextPrevTemtem.propTypes = {
    next: PropTypes.object,
    prev: PropTypes.object,
}


export default withStyles(styles)(NextPrevTemtem)
