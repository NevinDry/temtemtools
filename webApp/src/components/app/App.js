import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Navbar from '../navbar/Navbar'
import Home from '../home/Home'
import TemtemInfo from '../temtemInfo/TemtemInfo'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#9568b6',
    },
    secondary: {
      main: '#fec969',
    }
  },
  status: {
    danger: "#c62828",
  },
});

export class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/temtem/:id'  component={TemtemInfo} />
          </Switch>

        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
