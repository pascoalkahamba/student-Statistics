import { useTheme } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStorage } from "./components/GlobalContext";
import Head from "./components/Head";
import Home from "./components/Home";
import { GlobalStyles, Header } from "./themes/MyStyles";

function App() {
  return (
    <GlobalStorage>
      <BrowserRouter>
        <Head />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </GlobalStorage>
  );
}

export default App;
