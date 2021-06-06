import { makeStyles,withStyles } from '@material-ui/core/styles'
import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import {Skill, H2, SubSection,Calendar, Bar, Html,H3} from './ExterneStyle' 
import {GiGears} from 'react-icons/gi' ; 
import {FiCalendar} from 'react-icons/fi';
import LinearProgress from '@material-ui/core/LinearProgress';
import {useState} from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles' 

const useStyles = makeStyles(theme =>({
    container: {
           marginBottom: '150px'
    }, 

    name :{
     display: 'flex',
     justifyContent: 'center',
     alignItems : 'flex-start',
     opacity: ".7",
     fontSize: '20px',
     fontWeight :'normal',
     marginTop: '-100px',
    },

    section : {
        width: '100%',
        maxHeight: '1000px',
        minHeight: '450px',
        backgroundColor: '#2196f3',
    },
   inline : {
       
      position: 'absolute',
       width: '5%',
       marginTop: '95px',  
       marginLeft: '10%',
       marginRight: '10%'

   },

   span : {
       /*
       height: '2px',
       float: 'left',
       background: '#2187e7',*/
      
       backgroundColor:'#353b84',
       display: 'block',
       height: '2px',
       border : '1px solid rgba(0,0,0,0.3)',
       borderRadius: '3px',
       overflow: 'hidden',
       boxShadow: '0 0 10px #2187e7b3',
   }
  
}))

const themeProgress = createMuiTheme({
    palette: {
        primary : {
            main: '#fff',
        },
        secondary : {
           main: '#0000ff'
        } 
        
    }
})


const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 4,
      borderRadius: 5,
      width: '100%',
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 600 : 700],
    },
    bar: {
      borderRadius: 2,
      backgroundColor: '#fff',
    },
  }))(LinearProgress);


function Skills() {
    const classes = useStyles();
    const [level, setLevel] = useState(20);
    return ( 
        <div>
           <div className={classes.name}>
                <h2> <GiGears/> Skills</h2>
            </div>
          <Grid container className={classes.container}>
              <Grid container item className={classes.section}
               justify='flex-start'
               align-items='flex-start'
              >

                 <Grid item xs={12} sm={6} >
                          <Calendar>
                      
                              <span className={classes.inline}> <FiCalendar size='2em' color='white' /></span>
                          
                              <SubSection>
                                      <ThemeProvider theme={themeProgress}>
                                      <H3>Professional Skills</H3>
                                          <Skill>Adobe Photoshop</Skill>
                                          <BorderLinearProgress variant="determinate" value={70} /> 
                                          {/*<Skill className={classes.span}>HTML <Bar><Html></Html></Bar></Skill>*/}
                                          <Skill>HTMl</Skill>
                                          <BorderLinearProgress variant="determinate" value={95} />   
                                          <Skill>CSS
                                          </Skill>
                                          <BorderLinearProgress variant="determinate" value={90} />   
                                          <Skill>Javascript
                                              </Skill>   
                                              <BorderLinearProgress variant="determinate" value={85} />   
                                   </ThemeProvider>
                                  
                                       
                              </SubSection>
                          </Calendar>
                          
                     </Grid>
                   
                     
                        

                    <Grid  item xs={12} sm={6} >
                     
                        <Calendar>
                            
                            <div className={classes.inline}> <FiCalendar size='2em' color='white' /></div>
                            
                                <SubSection >
                                <ThemeProvider theme={themeProgress}>
                                <H3>Personal Skills</H3>
                                        <Skill>Communication</Skill>
                                        <BorderLinearProgress variant="determinate" value={60} />   
                                        <Skill>Team Work</Skill>
                                        <BorderLinearProgress variant="determinate" value={50} />   
                                        <Skill>Creativity</Skill>
                                        <BorderLinearProgress variant="determinate" value={10} />   
                                        <Skill>Dedication</Skill> 
                                        <BorderLinearProgress variant="determinate" value={80} />    
                                        </ThemeProvider>
                                </SubSection> 
                                </Calendar>
                       
                      
                     </Grid>
              </Grid>
          </Grid>
           
        </div>
    )
}

export default Skills
