import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStorage } from "./components/GlobalContext";
import Head from "./components/Head";
import Home from "./components/Home";
import PageNumberDisciplines from "./components/PageNumberDisciplines";

function App() {
  return (
    <GlobalStorage>
      <BrowserRouter>
        <Head />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="number-disciplines-students"
            element={<PageNumberDisciplines />}
          />
        </Routes>
      </BrowserRouter>
    </GlobalStorage>
  );
}

export default App;
