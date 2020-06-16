import React from "react";

const Navbar = ({ name, items }) => {
  return (
    <nav className="navbar navbar-light navbar-expand bg-light">
      <span className="navbar-brand">{name}</span>
      <div className="navbar-nav">
        <a key="People" className="nav-item nav-link" href="/People">
          People
        </a>
        <a key="planets" className="nav-item nav-link" href="/planets">
          Planets
        </a>
        <a key="Starships" className="nav-item nav-link" href="/Starships">
          Starships
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
