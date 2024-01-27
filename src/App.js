import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
