import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
} from "@mui/icons-material";
import {
  Icon,
  IconButton,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";

const Sidebar = ({ mode, setMode }) => {
  return (
    <>
      <Box p={1} sx={{ display: {xs: "block", sm: "none" } }}>
        <Box position="fixed">
          <List>
            <ListItem disablePadding>
              <IconButton alignItems="center" justifyContent="center" sx={{display: {xs: 'block'}, marginLeft: "auto", marginRight: "auto"}}>
                <Icon>
                  <Home />
                </Icon>
              </IconButton>
            </ListItem>
            <ListItem disablePadding>
              <IconButton alignItems="center" justifyContent="center" sx={{display: {xs: 'block'}, marginLeft: "auto", marginRight: "auto"}}>
                <Icon>
                  <Article />
                </Icon>
              </IconButton>
            </ListItem>
            <ListItem disablePadding>
              <IconButton alignItems="center" justifyContent="center" sx={{display: {xs: 'block'}, marginLeft: "auto", marginRight: "auto"}}>
                <Icon>
                  <Group />
                </Icon>
              </IconButton>
            </ListItem>
            <ListItem disablePadding>
              <IconButton alignItems="center" justifyContent="center" sx={{display: {xs: 'block'}, marginLeft: "auto", marginRight: "auto"}}>
                <Icon>
                  <AccountBox />
                </Icon>
              </IconButton>
            </ListItem>
            <ListItem disablePadding>
              <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")} />
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed">
          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <ListItemText primary="CV" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <Group />
                </ListItemIcon>
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <AccountBox />
                </ListItemIcon>
                <ListItemText primary="About Me" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <ModeNight />
                </ListItemIcon>
                <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
