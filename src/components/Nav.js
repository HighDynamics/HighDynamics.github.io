import React from 'react';

const Nav = ({ navSelection, setNavSelection }) => {
  const links = ['about me', 'portfolio', 'contact', 'resume'];

  function handleClick(e) {
    setNavSelection(e.target.textContent);
  }

  return (
    <header>
      <span id="header-name">Daniel Denton</span>
      <nav>
        <ul className="nav-list">
          {links.map((link) => (
            <li
              className={`nav-item ${navSelection === link && 'nav-active'}`}
              key={link}
              onClick={handleClick}
            >
              {link}
            </li>
          ))}
        </ul>
      </nav>
      <hr />
    </header>
  );
};

export default Nav;
