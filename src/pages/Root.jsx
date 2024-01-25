import React from "react";
import { Outlet } from "react-router-dom";

import Appbar from "../MUI-components/Appbar";
import Drawerr from "../MUI-components/Drawer";
import { Box } from "@mui/material";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
const drawerWidth = 240;
const Root = () => {
  const [myMode, setMyMode] = useState('dark'
    // localStorage.getItem('currentMode') === ' null'
    // ? 'dark'
    // :localStorage.getItem('currentMode') === 'light' 
    // ? 'light'
    // : 'dark'
  );
  const darkTheme = createTheme({
    palette: {
      mode: myMode,
      // primary:{main:'#FC9B26',}
    },
  });
  const [noneORblock, setnoneORblock] = useState('none');
  const [drawerType, setdrawerType] = useState("permanent");

  const showDrawer = () =>{
    setdrawerType('temporary')
    setnoneORblock('block')
  }

  const hideDrawer = () => {
    setdrawerType('permanent')
    setnoneORblock('none')
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Appbar drawerWidth={drawerWidth} showDrawer={showDrawer} />

        <Drawerr drawerWidth={drawerWidth} setMyMode={setMyMode} noneORblock={noneORblock} drawerType={drawerType} hideDrawer={hideDrawer} />

        <Box
          component="main"
          sx={{
            ml: { sm: `${drawerWidth}px` },
            display: " flex",
            justifyContent: "center",
            mt: "66px"
          }}
        // className="border"
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Root;
