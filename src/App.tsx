import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddingDisciplines from "./components/AddingDisciplines";
import FinalResults from "./components/FinalResults";
import { GlobalStorage } from "./components/GlobalContext";
import Head from "./components/Head";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
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
          <Route path="adding-diciplines" element={<AddingDisciplines />} />
          <Route path="*" element={<NotFound />} />
          <Route path="final-results" element={<FinalResults />} />
        </Routes>
      </BrowserRouter>
    </GlobalStorage>
  );
}

export default App;
