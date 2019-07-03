import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import loading from '../../assets/loading.png'
 
const styles = (theme => ({
      root: {
        margin: 'auto',
        display: 'block',
        animation: '$loading 1.5s linear infinite',

      },
      '@keyframes loading': {
        from :{ 
          transform: 'rotate(0)'
        },
        to :{ 
          transform: 'rotate(360deg)'
        }
       }
  }));


export class Loading extends Component {


    render() {
        const { classes } = this.props;

        return (
            <img className={classes.root} src={loading} alt="loading..." /> 
        )
    }
}

export default (withStyles(styles)(Loading));

