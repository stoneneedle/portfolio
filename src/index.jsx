// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { BrowserRouter } from "react-router-dom";
// import App from './App';
// import Typography from "@mui/material/Typography";



// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';

// const theme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#793fb5',
//     },
//     secondary: {
//       main: '#e8e522',
//     },
//   },
// });


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <ThemeProvider theme={theme}>
//     <CssBaseline />
//     <Typography>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Typography>
//   </ThemeProvider>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// React-Router
import { BrowserRouter, } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <App />

    </BrowserRouter>
  </React.StrictMode>
);

