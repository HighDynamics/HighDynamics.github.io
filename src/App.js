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
      <footer>
        <hr />
        <div id="footer-contact">
          <a href="mailto:highdynamics@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://github.com/highdynamics"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/danielryandenton"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
