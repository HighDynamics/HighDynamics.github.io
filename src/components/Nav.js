import React from 'react';

const Nav = ({ navSelection, setNavSelection }) => {
  const links = ['about me', 'portfolio', 'contact', 'resume'];

  function handleClick(e) {
    setNavSelection(e.target.textContent);
  }

  return (
    <header>
      <nav>
        <ul className="nav-list">
          {links.map((link) => (
            <li className="nav-item" key={link} onClick={handleClick}>
              {link}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
