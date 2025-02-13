import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#home">Inicio</a>
        </li>
        <li>
          <a href="#explore">Explorar</a>
        </li>
        <li>
          <a href="#about">Acerca de</a>
        </li>
        <li>
          <a href="#favourites">Favourites</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
