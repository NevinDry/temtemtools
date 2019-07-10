import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Typography';
// import CardContent from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loading from '../loading/Loading';
import typeColors from '../../utils/typesColors'

import { getTemtem } from '../../store/actions/temtemActions';

import NextPrevTemtem from './NextPrevTemtem';

const styles = (theme => (
    {
        root: {
            flexGrow: 1,
            margin: 0
        },
        container: {
            marginTop: '20px'
        },
        card: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        }
    }));


export class TemtemInfo extends Component {

    componentDidMount() {
        this.props.getTemtem(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.getTemtem(this.props.match.params.id);
        }
    }


    render() {
        const { classes, data } = this.props;

        const temtem = data.temtem;

        if (temtem && !data.loading) {
            return (
                <Container fixed className={classes.container}>
                    <Typography align="center" style={{ color: typeColors[temtem.types[0].name] }} className={classes.title} gutterBottom variant="h2" component="h2">
                        {temtem.name}
                    </Typography>

                    <NextPrevTemtem prev={temtem.prevTemtem} next={temtem.nextTemtem}></NextPrevTemtem>

                    {/* <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} >
                            <CardContent>

                            </CardContent>
                        </Grid>
                        <Grid item xs={12} sm={6} >

                        </Grid>
                    </Grid> */}

                </Container>
            )
        } else {
            return (
                <Loading />
            )
        }
    }

}

const mapStateProps = (state) => {
    return {
        data: state.temtem,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTemtem: (temtemId) => { dispatch(getTemtem(temtemId)) }
    }
}

TemtemInfo.propTypes = {
    temtem: PropTypes.object,
    error: PropTypes.object,
    loading: PropTypes.bool
}



export default compose(
    withStyles(styles),
    connect(mapStateProps, mapDispatchToProps)
)(TemtemInfo)
