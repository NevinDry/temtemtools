import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

import TemtemList from '../temtemList/TemtemList';
import { connect } from 'react-redux';

  const styles = (theme => ({
    card: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
  }));

export class Home extends Component {
    render() {
        const { classes } = this.props;
        const { temtemList } = this.props;
        return (
            <Container maxWidth="xl">
                
                <TemtemList temtems={temtemList}></TemtemList>
            </Container>
        )
    }
}

const mapStateProps = (state) => {
    return {
        temtemList : state.temtemList.temtems
    }
}
export default connect(mapStateProps)(withStyles(styles)(Home));

