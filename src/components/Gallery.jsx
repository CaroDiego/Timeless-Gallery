import React from "react";

function Gallery() {
  return (
    <section id="explore" className="gallery">
      <h3>Galería Destacada</h3>
      <div className="gallery-grid">
        {/* Aquí se agregarían las obras con imágenes */}
        <div className="art-card">
          <img src="https://via.placeholder.com/200" alt="Obra 1" />
          <p>Título de la obra - Artista</p>
        </div>
        <div className="art-card">
          <img src="https://via.placeholder.com/200" alt="Obra 2" />
          <p>Título de la obra - Artista</p>
        </div>
        {/* Añadir más tarjetas aquí */}
      </div>
    </section>
  );
}

export default Gallery;
