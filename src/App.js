import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";

// MUI
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <h1>Test</h1>

      <Button variant="contained">Hello World</Button>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
