
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import theme from "../theme";
import Greetings from "./Greetings";
import {Route, Routes, Link} from 'react-router-dom'
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import MiniDrawer from "./NavigationDrawer";
import { CABoard } from "../pages/CABoard";
import Notification from "../pages/Notification";
export default function App(): JSX.Element {
  return (
    // Setup theme and css baseline for the Material-UI app
    // https://mui.com/customization/theming/
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        <main>
          <MiniDrawer />   
          <Routes>  
            <Route path="/" element={<Home />}/>
            <Route path="/greetings" element={<Greetings />}/>
            <Route path="/contacts" element={<Contact />}/>
            <Route path="/CABoard" element={<CABoard />}/>
            <Route path="/notification" element={<Notification />}/>
          </Routes> 
        </main>
      </Box>
    </ThemeProvider>
  );
}
