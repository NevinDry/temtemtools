import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Navbar from '../navbar/Navbar'
import Home from '../home/Home'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#9568b6',
    },
    secondary: {
      main: '#fec969',
    },
  },
  status: {
    danger: "#c62828",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>

        <Navbar />
        <Home />

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
