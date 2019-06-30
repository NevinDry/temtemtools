import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid, { GridSpacing } from '@material-ui/core/Grid';


const styles = (theme => ({
    root: {
        flexGrow: 1,
        margin :0
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
        const { temtems } = this.props;
        console.log(temtems);
        return (
            <Grid container className={classes.root} spacing={2}>
            {
                    temtems && temtems.map(temtem => {
                        return (
                            <Grid item xs={12} sm={2}>

                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {temtem.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {/* {
                                    temtem.types.forEach(type => {
                                    return ( type );
                                })} */}
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
    }
}

export default withStyles(styles)(TemtemList)
