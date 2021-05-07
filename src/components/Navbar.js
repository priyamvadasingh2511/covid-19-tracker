import React from 'react';
import { AppBar,Toolbar,ListItem,IconItem,Box,Typography} from '@material-ui/core';

const Navbar =() => {
    return(
       <Box component="nav">
           <AppBar >
               <Toolbar>
                  <Typography variant="h5">Covid-19 Tracker</Typography>
               </Toolbar>
           </AppBar>
       </Box>
        
    )
}
export default Navbar;