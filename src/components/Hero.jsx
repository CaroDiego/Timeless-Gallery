import React, { useState } from "react";

function Hero() {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <section id="home" className="hero">
      <h2>Descubre el arte de Harvard</h2>
      <p>
        Explora una colección de miles de obras de arte de diferentes épocas y
        estilos.
      </p>
      <input
        type="text"
        placeholder="Buscar por artista, obra, año..."
        value={search}
        onChange={handleSearchChange}
      />
      <button onClick={() => alert("Buscar: " + search)}>Buscar</button>
    </section>
  );
}

export default Hero;
