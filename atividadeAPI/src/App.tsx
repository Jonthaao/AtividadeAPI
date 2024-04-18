import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Bolsas from "./Pages/InfoBolsa/InfoBolsa";


const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/bolsa" element={<Bolsas />} />
      </Routes>
    </Router>
  );
};

export default App;