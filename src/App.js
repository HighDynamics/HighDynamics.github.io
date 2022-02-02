import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [navSelection, setNavSelection] = useState('about me');
  return (
    <>
      <Nav navSelection={navSelection} setNavSelection={setNavSelection} />
      {navSelection === 'about me' && <AboutMe />}
      {navSelection === 'portfolio' && <Portfolio />}
      {navSelection === 'contact' && <Contact />}
      {navSelection === 'resume' && <Resume />}
      <footer>CONTACT INFO</footer>
    </>
  );
}

export default App;
