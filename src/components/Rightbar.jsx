import { Box, } from "@mui/material";
import React from "react";

import Frameworks from './Frameworks';
import Photos from './Photos';
import Projects from './Projects';

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Frameworks />
        <Photos />
        <Projects />
      </Box>
    </Box>
  );
};

export default Rightbar;
