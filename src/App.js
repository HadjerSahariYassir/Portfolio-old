

import { ThemeProvider } from '@material-ui/styles';
import Navbar from './components/Navbar/Navbar';
import React from 'react';
import theme from './utils/theme';
import UpNavbar from './components/Navbar/UpNavbar';

function App() {
  return (
  
        <ThemeProvider theme={theme}>
           
           <Navbar/>
          
        </ThemeProvider>
       
    
  );
}

export default App;
