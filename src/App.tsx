import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStorage } from "./components/GlobalContext";
import Home from "./components/Home";

function App() {
  return (
    <GlobalStorage>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </GlobalStorage>
  );
}

export default App;
