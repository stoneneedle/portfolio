import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";

// MUI
import { styled } from '@mui/material/styles';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <>
      <Grid container className="app">
        <Grid item xs={3} className="app">
          <Item className="app">
            <Paper className="app">
              <ClickAwayListener>
                <MenuList
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  className="app"
                >
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>My account</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Item>
        </Grid>
        <Grid item xs={9}>
          <Box sx={{ m: 2 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
            </Routes>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
