import { Box } from "@mui/material";
import React from "react";

import HomeSticky from '../components/HomeSticky';

function Home() {
  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      <>
        <HomeSticky />
      </>
    </Box>
  );
}

export default Home;
