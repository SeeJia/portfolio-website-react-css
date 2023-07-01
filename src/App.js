import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer /> 
     
    </div>
  );
}

export default App;
