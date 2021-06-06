import { ThemeProvider } from '@material-ui/styles';
import Navbar from './components/Navbar/Navbar';
import React from 'react';
import theme from './utils/theme';
import UpNavbar from './components/Navbar/UpNavbar';
import About from './components/About'
import {makeStyles} from '@material-ui/core'
import Skills from './components/Skills'
import Works from './components/Works'
import Portfolio from './components/Portfolio'

const useStyles = makeStyles( theme => ({
  container: {
     height: 'auto',
     marginLeft: '12.5%',
     marginRight: '12.5%',
     fontFamily:  'sans-serif',
     fontSize: '15px',
     position: 'relative',
     display: 'block',
     
   },
   page : {
      backgroundColor: '#e3e3e3'
   }
  
})
)

function App() {
     
  const classes = useStyles();
  return (
      <div className={classes.page}>
           <ThemeProvider theme={theme}>
           <Navbar/>
           <div className={classes.container}> 
              <About/>
              <Skills/>
              <Works/>
              <Portfolio/>
           </div>
        
        </ThemeProvider>
      </div>
       
       
    
     );
  


}

export default App;
