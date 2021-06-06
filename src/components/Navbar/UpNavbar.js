import { AppBar, 
     Toolbar ,
     makeStyles,
    } from '@material-ui/core';
import React from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { findByLabelText } from '@testing-library/dom';
import { BorderAll } from '@material-ui/icons';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import {FaEnvelope, FaPhoneAlt} from 'react-icons/fa';
import {Phone, Mail} from '../ExterneStyle';

const useStyles= makeStyles (theme => ({
  root: {
    flexGrow: 1,
  
  },
  globalGrid: {
      height: "80px",
      color : "rgba(0,0,0,0.67)",
      lineHeight: "1.5",
      fontWeight: "normal",
      backroundColor: "#1e88e5",
     
  },
   mail: {
        marginLeft : '20px',
        
        
   },
 
    
  }
)
)
/*
+88017 195 76666
mail@alrayhan.com
*/
const UpNavbar = () => {
   const classes =useStyles();
    return (
       <>
         <div className={classes.root}>
     
        <Grid container 

          
          justify="flex-end"
          alignItems="center"
          

          className={classes.globalGrid}>
          
        
          <Grid item  >
             <Phone>
                <FaPhoneAlt /> 
             </Phone> 
            </Grid>

            <Grid item className={classes.mail}>
               <Mail>
                  <FaEnvelope/>
               </Mail>
              
              
            </Grid>
          
          </Grid>
    
    </div>
              
            
             
        
       </>
        
      
    )
}

export default UpNavbar;
