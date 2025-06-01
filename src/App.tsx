import { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import ConcreteServices from './sections/ConcreteServices';
import FencingServices from './sections/FencingServices';
import TreeServices from './sections/TreeServices';
import JunkRemoval from './sections/JunkRemoval';
import LandscapingServices from './sections/LandscapingServices';
import Contact from './sections/Contact';

function App() {
  // state to check if the page is scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect to add event listener every time the page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      // iof the page is scrolled more than 50px, set isScrolled to true
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        // if scrolled back to the top, set isScrolled to false
        setIsScrolled(false);
      }
    };

    // add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // remove the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navbar isScrolled={isScrolled} />
      <main>
        <Hero />
        <About />
        <ConcreteServices />
        <FencingServices />
        <TreeServices />
        <JunkRemoval />
        <LandscapingServices />
        <Contact />
      </main>
      <Footer />
    </div>
  )
  
}

export default App
