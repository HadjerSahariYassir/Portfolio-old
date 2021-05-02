import React ,{useState} from 'react'

import {Drawer,
    List,
    ListItemText,
    ListItem,
    ListItemIcon,
    IconButton,
    makeStyles,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
    menuIconContainer: {
        marginRight: 'auto',
    },
    list:{
        width: '200px',
    }
}));

const DrawerComponent = () => {
    const [openDrawer,setOpenDrawer]= useState(false);
    
    const classes = useStyles();
   
    
    return (
        <>
        <Drawer 
          open={openDrawer}
          onClose ={()=>setOpenDrawer(false)}
          anchor="left"
        >
            <List className={classes.list}>
                <ListItem divider button>
                <ListItemIcon >
                        <ListItemText>HOME</ListItemText>
                    </ListItemIcon>
                </ListItem>

                <ListItem divitrueder button>
                <ListItemIcon >
                        <ListItemText>ABOUT</ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem divider button>
                <ListItemIcon >
                        <ListItemText>SKILLS</ListItemText>
                    </ListItemIcon>
                </ListItem>

                <ListItem divider button>
                <ListItemIcon >
                        <ListItemText>WORKS</ListItemText>
                    </ListItemIcon>
                </ListItem>

                <ListItem divider button>
                <ListItemIcon >
                        <ListItemText>PORTFOLIO</ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem divider button>
                <ListItemIcon >
                        <ListItemText>PORTFOLIO</ListItemText>
                    </ListItemIcon>
                </ListItem>

                <ListItem divider button>
                <ListItemIcon >
                        <ListItemText>EDUCATION</ListItemText>
                    </ListItemIcon>
                </ListItem>

                <ListItem divider button>
                <ListItemIcon >
                        <ListItemText>BLOG</ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem divider button>
                <ListItemIcon >
                        <ListItemText>PRICING</ListItemText>
                    </ListItemIcon>
                </ListItem>

                <ListItem divider button>
                <ListItemIcon >
                        <ListItemText>CLIENT</ListItemText>
                    </ListItemIcon>
                </ListItem>

                <ListItem divider button>
                <ListItemIcon >
                        <ListItemText>CONTACT</ListItemText>
                    </ListItemIcon>
                </ListItem>
            </List>

         </Drawer>
         <IconButton 
           className={classes.menuIconContainer}
           onClick={()=>
            setOpenDrawer(!openDrawer)} >
      
                <MenuIcon/>
             </IconButton>
         </>

    )
}

export default DrawerComponent