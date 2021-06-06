import { AppBar,
    Tab, 
    Tabs, 
    Typography,
    Toolbar,
    useMediaQuery,
    makeStyles,
 } from '@material-ui/core'
import React ,{useState} from 'react'
import Button from '@material-ui/core/Button';
import {Menu,MenuList,MenuItem} from '@material-ui/core';
import {useTheme} from '@material-ui/core'
import DrawerComponent from './DrawerComponent/DrawerComponent';
import UpNavbar from './UpNavbar'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles' 


const theme2 = createMuiTheme({
    palette : {
        primary : {
            main: "#fff",
            
        },
        secondary : {
            main: "#fff",
            
        }
    }
})
const useStyles = makeStyles(theme => ({
    li: {
        width: '180px',
        top: '50px',
        padding: '20px',
        textAlign: 'center',
        fontSize: '.9rem',
    },
    
     
    container: {
       /* overflow: 'hidden',
    minHeight: 48,
    WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
    display: 'flex',*/
    marginUp: '500px',
    marginBottom: '150px',
    },
   tabsContainer  : {

    
    '& button': {
        minWidth: 30
      },

      
   },
   tab  : {
    
    color : 'rgba(255,255,255,.7)',
    
   

   },

   lightWhite: {
    color : 'rgba(255,255,255,.7)',
   },
   darkWhite: {
      color : "#fff",
   },

   headerTop: {
     
    height: '60px',
    marginLeft: '12.5%',
    marginRight: '12.5%',
    fontFamily:  'sans-serif',
    fontSize: '15px',
   
    
   },
   headerDown:{
    height: '60px',
    marginLeft: '12.5%',
    marginRight: '12.5%',
    fontFamily:  'sans-serif',
    fontSize: '15px',
    
  
   },

}));


const Navbar = () => {
   

    //create state 
    const [value,setValue] = useState(0);
    const [anchorEl,setAnchorEl] = useState(null);



    const handleOpenMenu = e => {
        setAnchorEl(e.currentTarget);
    }

    function buttonClicked(){
        console.log("clicked from function")
    }



    const handleCloseMenu = e => {
        setAnchorEl(null);
    }
    

    const handleClickTab =(e,newValue) => {
          setValue(newValue);
    }
    

    const handleFocusTab=(e) => {
        console.log(e.target);
        document.getElementById('tabs').setAttribute("value",{value} );
        document.getElementById('tabs').setAttribute("onChange",{handleClickTab });
          
        var tgt= e.target;
        if (tgt.style.color="rgba(255,255,255,.7)" ){
            
            tgt.style.color='white';
        }
    }

          const handleOutTab=(e) => {
            console.log('quite Algeria');
            var tgt= e.target;
            if (tgt.style.color="white" ){

                tgt.style.color='rgba(255,255,255,.7)';
              }
       
        console.log(e.target.id);
        console.log("focuced");
       
    }
    //breakpoints
    const classes = useStyles();
    const theme = useTheme();
    
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
   
   
    return (
        <div className={classes.container}>
                <AppBar  color='secondary' position="static" >
                    <Toolbar className={classes.headerTop} >
                            <UpNavbar/>
                    </Toolbar>  
                </AppBar> 

            <AppBar color="primary" position="static">
                <Toolbar   className={classes.headerDown} >
                   
                    {isMatch ? <DrawerComponent/> : 
                      <div >
                        <ThemeProvider theme={theme2}>
                        <Tabs  
                            id='tabs'
                            className={classes.tabsContainer}
                            onMouseOver= {handleFocusTab}
                            onChange={handleClickTab }  
                            onMouseOut={handleOutTab}
                            value={value} 
                            indicatorColor="primary"
                            textColor="secondary"
                            variant = 'standard'
                            aria-label="full width tabs example"
                         >

                           <Tab className={classes.tab} id="tab1" disableRipple label="HOME" /> 
                          
                           <Tab  className={classes.tab} id="tab2" disableRipple label="ABOUT" />
                       
                           <Tab  className={classes.tab} id="tab3" disableRipple label="SKILLS" />
                      
                           <Tab  className={classes.tab} id="tab4" disableRipple label="WORKS" />
                      
                           <Tab  className={classes.tab} id="tab5" disableRipple label="PORTOLIO" />
                     
                           <Tab className={classes.tab} id="tab6" disableRipple label="EDUCATION" />
                        
                           <Tab className={classes.tab} id="tab7" disableRipple label="CONTACT" />
                           
                        
                           
                       </Tabs>
                        </ThemeProvider>
                      
                       </div>
                    }
                   
                </Toolbar>
             </AppBar>

       
          
            
        </div>
    )
}

export default Navbar
