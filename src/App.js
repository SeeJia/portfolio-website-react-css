import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">

    <div className="app">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Skills" element={<Skills />}/>
        <Route path="/Projects" element={<Projects />}/> 
     
      </Routes>
      <Footer />
     </Router>
    </div>
     
    </div>
  );
}

export default App;
