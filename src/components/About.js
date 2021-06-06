import React from 'react'
import {makeStyles, Typography} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import { green, purple } from '@material-ui/core/colors';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles' 
import Avatar from '@material-ui/core/Avatar';

const themeButton = createMuiTheme({
    palette: {
        primary : {
            main: '#2196f3',
        },
        secondary :  green
        
    }
})
const useStyles = makeStyles( theme => ({
      aboutMe: {
          
          marginBottom: '150px',
      
      
          width: '100%',
          backgroundColor: '#fff',
          maxHeight: '800px',
          minHeight: '580px',
         
        
      },
      name: {
           lineHeight: '52px',
           fontWeight: 'bold',
           fontSize: '35px',
           opacity: '.7'
      },
      job : {
          fontSize: '18px',
          color : '#8a8a8b',
          lineHeight: '34px',
          marginBottom: '25px',
      },
      divDesc : {
         width: '60%',
         marginBottom: '40px'
         
      },
      disc: {
        textAlign:'center',
        lineHeight: '27px',
        margin:'10px 0',
        opacity: '0.7',
        padding: '0 10px'
        
      },
      links: {
          textTransform:'uppercase'
      },
      btn : {
           margin : theme.spacing(1)
      },
      contLinks: {
          
      },
      link: {
         
      },
      imgCont: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '-120px'
      },
      img: {
           width: '160px',
           height:'160px',
           borderRadius: '50%',   

      }


   })

)

function About() {
    const classes = useStyles();
    return (
        <div>    
             
            
            <Grid container 
                  className={classes.aboutMe}
                  justify= 'center'
                  direction="column"
                  alignItems='center'
                
                 >
                      <div className={classes.imgCont}>
                       <img src="././img.jpg" className={classes.img} alt='hadjer'/>
                     </div>

                   
                     <Grid item >
                        <h2 className={classes.name}>Al Rayhan</h2>
 
                     </Grid>
                     <Grid item >
                        <div className={classes.job}>
                        Creative Director of DeviserWeb
                        
                         </div>
                     </Grid>
                     <Grid container item  
                              justify= 'center'
                              alignItems='center'
                     >

                        <Grid item className={classes.divDesc} >
                            <p  className={classes.disc}>
                            Hello everyone, My name is Al Rayhan. I am User Interface Designer from Bangladesh. I started designing things about 5 years ago. I love to explore design and interact people with it. I design Website, Icons, Logos, Print Templates, Mobile & Desktop App.
                            </p>
                     
                         </Grid>
                     </Grid>

                     <Grid item  container
                        direction='row'
                        justify="center" 
                        alignItems="center"
                        
                        className={classes.contLinks}
                         
                     >
                        <Grid item   className={classes.link} xs={5} container
                               justify='flex-end'
                               alignItems='center'
                        >
                            
                            <Grid item>
                            <ThemeProvider theme={themeButton} >
                                <Button className={classes.links}  variant='contained' color="primary" size='large' href='#' className={classes.btn}>
                                    download cv
                                </Button>
                                </ThemeProvider>
                            </Grid>
                           
                         
                            
                            
                            </Grid>
                            <Grid item  container className={classes.link} xs={5} 
                              
                               justify='flex-start'
                               alignItems='center'
                            >
                               <Grid item>
                               <ThemeProvider theme={themeButton} >
                                <Button className={classes.links} variant='contained' color="secondary" size='large' href='#'  className={classes.btn}>
                                    contact me
                                </Button>
                                </ThemeProvider>
                               </Grid>
                             
                                

                            </Grid>
                     </Grid>
                   

                </Grid>
               
     
             
        </div>
    )
}

export default About
