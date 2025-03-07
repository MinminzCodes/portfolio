// src/components/HamburgerMenu.jsx
import React, { useState } from 'react';
import './HamburgerMenu.css'; // Asegúrate de tener el CSS en un archivo separado.

const HamburgerMenu = () => {
  // Estado para controlar si el menú está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="hamburger-menu">
      {/* Icono de tres rayas */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
      </div>

      {/* Menú desplegable */}
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
