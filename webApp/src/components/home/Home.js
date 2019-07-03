import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

import TemtemList from '../temtemList/TemtemList';

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
        return (
            <Container maxWidth="xl">               
                <TemtemList></TemtemList>
            </Container>
        )
    }
}

export default (withStyles(styles)(Home));

