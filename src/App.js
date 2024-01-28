import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/public/Navbar";
import Footer from "./components/public/Footer";
import Cards from "./components/public/Cards";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Cards/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
