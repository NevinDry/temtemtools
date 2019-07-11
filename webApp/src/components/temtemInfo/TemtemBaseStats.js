import React, { Component } from 'react'
import Divider from '@material-ui/core/Divider';
// import BorderLinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { getStatsBackColor } from '../../utils/statsColors';

const styles = (theme => (
    {
        statItem: {
            marginTop: theme.spacing(1),
            '& > div': {
                '&:first-child': {
                    // backgroundColor: "#9568b67a",
                    color: "black",
                    fontWeight: "bold",
                    textAlign: "left"
                },
                '&:last-child': {
                    // backgroundColor: "#9568b67a",
                    color: "white"

                }
            },

        },
        statBar: {
            width: "100%",
            backgroundColor: "#f5f5f5"
        },
        statBarValue: {
            height: "21px",


        }
    }));

export class TemtemBaseStats extends Component {

    render() {

        const { baseStats, classes } = this.props;

        return (
            <div>
                <Typography variant="h5" color="primary">
                    Base Stats
        </Typography>
                <Divider />
                <Grid container spacing={0}>
                    {Object.keys(baseStats).map((statKey, i) => {
                        return (
                            <Grid key={i} className={classes.statItem} container spacing={0}>

                                <Grid item xs={2} >
                                    {statKey}
                                </Grid>
                                <Grid item xs={10}>
                                    <div className={classes.statBar}>
                                        <div 
                                            style={{ 
                                                backgroundColor: getStatsBackColor(baseStats[statKey]),
                                               width: baseStats[statKey] + "%"
                                            }} 
                                            className={classes.statBarValue}>
                                                         <Typography align="center">
                                                         {baseStats[statKey]}
        </Typography>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>

                        )
                    })}
                </Grid>
            </div>
        )
    }
}

TemtemBaseStats.propTypes = {
    baseStats: PropTypes.object,
}


export default withStyles(styles)(TemtemBaseStats)