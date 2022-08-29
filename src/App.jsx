import './App.css';

// React-Router
import { Routes, Route, useNavigate } from "react-router-dom";

// Pages
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

// MUI
import { styled } from '@mui/material/styles';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Grid container className="app">
        <Grid item xs={2} className="app">
          <Item className="app">
            <Paper className="app">
              <ClickAwayListener>
                <MenuList
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  className="app"
                >
                  <MenuItem><Button onClick={() => navigate('/')}>Home</Button></MenuItem>
                  <MenuItem><Button onClick={() => navigate('/about')}>About</Button></MenuItem>
                  <MenuItem><Button onClick={() => navigate('/contact')}>Contact Me</Button></MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Item>
        </Grid>
        <Grid item xs={10}>
          <Box sx={{ m: 2 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
