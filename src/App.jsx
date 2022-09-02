import React from 'react';

// MUI
import CssBaseline from '@mui/material/CssBaseline';
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";

// Components
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";

// React-Router
import { Outlet } from 'react-router-dom';

// React-Router
import { Routes, Route, } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Feed3 from './components/Feed3';

// React Context API
export const AppContext = React.createContext();

function App() {
  const [mode, setMode] = useState("light");

  const jgTheme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#793fb5',
      },
      secondary: {
        main: '#e8e522',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 740,
        md: 900,
        lg: 1200,
        xl: 1536,
      }
    }
  });

  return (
    <ThemeProvider theme={jgTheme}>
      <CssBaseline />
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Outlet />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<></>} />
            <Route path="/" element={<Feed3 />} />
          </Routes>
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;

