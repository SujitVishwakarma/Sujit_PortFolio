
import { useRef } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import About from './components/about/About';
import RankCard from './components/achivement/RankCard';
import Winner from './components/achivement/Winner';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import NavBar from './components/navigation/NavBar';
import Project from './components/projects/Project';
import Skills from './components/skills/Skills';


function App() {
  const contactRef = useRef(null);
  return (
    <>
      <NavBar contactRef={contactRef}/>
      <div className='container'>
        <Hero/>
        <About/>
        <Skills/>
        <Experience/>
        <RankCard/>
        <Project/>
        <Winner/>
        <Contact ref={contactRef}/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
