import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#explore">Explorar</a>
        </li>
        <li>
          <a href="#about">My collections</a>
        </li>
        <li>
          <a href="#favourites">Favourites</a>
        </li>
        <li>
          <a href="#home">Perfil</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
