import React from "react";
import { Toolbar, AppBar, Avatar, Link, IconButton } from "@mui/material";
import {Menu} from '@mui/icons-material';

const Appbar = ({ drawerWidth,showDrawer }) => {
  return (
    <AppBar
      sx={{ width: {sm:`calc(100% - ${drawerWidth}px)`}, ml: { xs:0,sm:`${drawerWidth}px`} }}
      position="static"
    
    >
      <Toolbar>
        <IconButton onClick={()=>{
          showDrawer()
        }} sx={{
          mr : '9px',
          display : {sm:'none'}
        }} >
         <Menu/>
        </IconButton>
      <Link
         sx={{flexGrow:1,"&hover":{fontSize:'22px'}}}
          href="/"
          
        
          
          underline="hover"
          color="inherit"
          
        >
           <Avatar variant="square" src="./imges/logo/h-white.png"  alt="" sx={{ width:'100px',display:{xs:'none',sm:'block'}}} />
           <Avatar variant="square" src="./imges/logo/logo-white-mui.png"  alt="" sx={{ width:'30px',display:{xs:'block',sm:'none'}}} />
        </Link>
        
        <Avatar src="./imges/avatar/3d-avatar-male_lg.png" alt="" sx={{ width: {sm:'50px',xs:'30px'}, height: {sm:'50px',xs:'30px'} }} />
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
