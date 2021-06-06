import React , {useState} from 'react'
import './style.css'
import {FaThList} from 'react-icons/fa'
import {Tabs,Tab, Paper} from '@material-ui/core'
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles' 
import Grid from '@material-ui/core/Grid'

const themeTab = createMuiTheme({
    palette : {
        primary : {
            main: 'rgba(0,0,0,.7)',
            
        },
        secondary : {
            main: "#656565",
            
        }
    }
})
 const useStyles = makeStyles (theme =>({
    tabsContainer  : {
        '& button': {
            minWidth: 30
          },
          
            

       },
 }))
function Portfolio() {
    const classes = useStyles();
    const [value,setValue]= useState(0);


    const handleClickTab= (e,newValue)=>{
           setValue(newValue);
    }

    return (
        <div>
             <div className='section-title'>
                <div><h2><FaThList size='25px' className='icon'/>Portfolio</h2></div>
            </div>
                 <div className='bar'>
                     <Grid container
                        justify="center"
                        alignItems="flex-start"

                     >
                         <Grid item>
                             <ThemeProvider  theme={themeTab}>
                                <Tabs className={classes.tabsContainer}
                                            variant = 'standard'
                                             value= {value}
                                            indicatorColor="secondary"
                                            textColor="primary"
                                            variant = 'standard'
                                            aria-label="full width tabs example"
                                            onChange= {handleClickTab}
                                        >
                                            <Tab label='SHOW' disableRipple></Tab>
                                            <Tab label='ART' disableRipple></Tab>
                                            <Tab label='WEB DESIGN' disableRipple></Tab>
                                            <Tab label='MATERIALS' disableRipple></Tab>
                                    </Tabs>
                             </ThemeProvider> 
                             
                         
                         </Grid>
                     </Grid>
                    
                 </div>
                 <Grid container xs={12}  spacing={2}    
                    >
                        <Grid  item xs={12} sm={3}> 
                             <div>xx</div>
                        </Grid>
                        <Grid  item xs={12} sm={3}>
                             <Paper>
                                  tt
                             </Paper>
                        </Grid>
                        <Grid  item xs={12} sm={3}>
                             <Paper>
                                 mm
                             </Paper>Grid
                        </Grid>
                        <Grid  item xs={12} sm={3}>
                             <Paper>
                                  ww
                             </Paper>
                        </Grid>

                 </Grid>
               
             </div> 
       
    )
}

export default Portfolio
