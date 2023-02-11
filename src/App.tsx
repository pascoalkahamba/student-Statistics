import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStorage } from "./components/GlobalContext";
import Home from "./components/Home";

function App() {
  return (
    <GlobalStorage>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </GlobalStorage>
  );
}

export default App;
