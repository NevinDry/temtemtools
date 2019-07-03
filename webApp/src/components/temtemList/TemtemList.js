import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Loading from '../loading/Loading';
import { connect } from 'react-redux';

const styles = (theme => ({
    root: {
        flexGrow: 1,
        margin: 0
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
}));

export class TemtemList extends Component {
    render() {
        const { classes } = this.props;
        const { temtemList } = this.props;

        if (temtemList) {
            return (
                <Grid container className={classes.root} spacing={2}>
                    {
                        temtemList && temtemList.map(temtem => {
                            return (
                                <Grid item xs={12} sm={6} md={4} xl={2} >

                                    <Card className={classes.card}>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image={"https://firebasestorage.googleapis.com/v0/b/temtemtools.appspot.com/o/temtems%2F" + temtem.name + ".jpg?alt=media"}
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {temtem.name}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
{/* 
                                                    {
                                                        temtem.types.map(type => {
                                                            type.get().then((typeObj) => {
                                                                console.log(typeObj.data().name);
                                                                return (
                                                                    "DFGSDFG"
                                                                );
                                                            })
                                                        })
                                                    } */}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                Add to your team
                                        </Button>
                                            <Button size="small" color="primary">
                                                Learn More
                                     </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>

            )
        } else {
            return (
                <Loading />
            )
        }
    }
}

const mapStateProps = (state) => {
    console.log(state);
    return {
        temtemList: state.firestore.ordered.temtems
    }
}


export default compose(
    withStyles(styles),
    connect(mapStateProps),
    firestoreConnect([
        {
            collection: 'temtems',
        }
    ])
)(TemtemList)
