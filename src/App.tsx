import { useTheme } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStorage } from "./components/GlobalContext";
import Home from "./components/Home";

function App() {
  const theme = useTheme();
  return (
    <GlobalStorage>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </GlobalStorage>
  );
}

export default App;
