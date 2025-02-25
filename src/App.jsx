import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "./page/MainPage";
import Navbar from "./page/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <MainPage />
    </Router>
  );
}

export default App;
