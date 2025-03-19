import './App.css';
import { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Preload from './components/Preload';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingData = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 8000);
    }
    loadingData();
  }, [])

  return isLoading ? (
    <Preload /> 
  ) : (
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
