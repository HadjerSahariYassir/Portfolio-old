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


const useStyles = makeStyles(theme => ({
    li: {
        width: '180px',
        top: '50px',
        padding: '20px',
        textAlign: 'center',
        fontSize: '.9rem',
    },
    contact: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent:'flex-end', 
        marginLeft: "600px",
    },
   
     
    container: {
       /* overflow: 'hidden',
    minHeight: 48,
    WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
    display: 'flex',*/
    marginUp: '500px',
    },
   tabsContainer  : {
   
    '& button': {
        minWidth: 30
      },
   },
   tab : {
    
    color : '#ffffff85',
   

   },
   header: {
     
    height: '60px',
    marginLeft: '12.5%',
    fontFamily:  'sans-serif',
    fontSize: '15px',
   }

}));

const Navbar = () => {
   

    //create state 
    const [value,setValue] = useState(0);
    const [anchorEl,setAnchorEl] = useState(null);

    const handleOpenMenu = e => {
        setAnchorEl(e.currentTarget);
    }

    const handleCloseMenu = e => {
        setAnchorEl(null);
    }
    

    const handleClickTab =(e,newValue) => {
          setValue(newValue);
          
    }
    //breakpoints
    const classes = useStyles();
    const theme = useTheme();
    
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
   
   
    return (
        <div className={classes.container}>
            <AppBar color='primary'  >
                <Toolbar>
                        <ul className={classes.contact}> 
                            <li className={classes.li}>
                                        
                                +88017 195 76666
                            </li>
                            <li className={classes.li}>
                                    
                                mail@alrayhan.com
                            </li>
                    </ul>
                </Toolbar>  
                <Toolbar   className={classes.header}>
                    <Typography>
                        
                    </Typography>
                    {isMatch ? <DrawerComponent/> : 
                      <div >
                        <Tabs  
                        className={classes.tabsContainer}
                        onChange={handleClickTab
                       }  
                         value={value} 
                         indicatorColor="secondary"
                         textColor="secondary"
                         variant = 'standard'
                         aria-label="full width tabs example"
                         >
                           <Tab  className={classes.tab} disableRipple label="HOME" /> 
         
                           <Tab   className={classes.tab} disableRipple label="ABOUT" />
                       
                           <Tab  className={classes.tab} disableRipple label="SKILLS" />
                      
                           <Tab className={classes.tab} disableRipple label="WORKS" />
                      
                           <Tab className={classes.tab} disableRipple label="PORTOLIO" />
                     
                           <Tab className={classes.tab} className={classes.tab}disableRipple label="EDUCATION" />
                        
                           <Tab className={classes.tab} className={classes.tab}disableRipple label="BLOG" />

                           <Tab className={classes.tab} className={classes.tab}disableRipple label="PRICING" />

                           <Tab className={classes.tab} className={classes.tab}disableRipple label="CLIENT" />

                           <Tab className={classes.tab} className={classes.tab}disableRipple label="CONTACT" />
                           
                          {/*
                           <Button
                              onClick= {handleOpenMenu}
                              aria-controls ='menu'
                              disableRipple
                             variant="contained"
                             color="secondary"
                              >
                              profile
                              </Button>
                          */}
                           
                       </Tabs>
                       </div>
                    }
                   
                </Toolbar>
             </AppBar>

             <Menu id="menu"
              style={{marginTop: '50px'}}
              onClose={handleCloseMenu}
               anchorEl={anchorEl}
                open={Boolean(anchorEl)}>
                   <MenuItem onClick={handleCloseMenu}>My Acount</MenuItem>
                   <MenuList onClick={handleCloseMenu}>My Acount</MenuList>
                   <MenuList onClick={handleCloseMenu}>My Acount</MenuList>
            </Menu>
           
           
        </div>
    )
}

export default Navbar
