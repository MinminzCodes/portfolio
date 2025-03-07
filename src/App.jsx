import React from "react";
import "./App.css";

const App = () => {
  return (
    <main className="main-content">
      {/* Menú en la esquina superior derecha */}
      <div className="menu">
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </div>

      {/* Logo en la esquina superior izquierda */}
      <img src="/logo.png" alt="Logo de Jazmín" className="logo" />

      {/* Contenedor del rectángulo imaginario */}
      <div className="rect">
        {/* Parte izquierda */}
        <div className="rect-izq">
          <h1>Hey! <span className="soyjazmin">Soy Jazmín</span></h1>
          <p className="about-text">
            Diseñadora web y programadora. Me gusta crear interfaces que combinen estética y funcionalidad. Siempre persigo mis objetivos hasta lograrlos, ¿eres de los míos?
          </p>
        </div>

        {/* Parte derecha*/}
        <div className="rect-der">
          <div className="cv">
            <img className="icono-cv" src="/cv.png" alt="Icono de CV" />
            <p>¿Quieres saber más de mi?</p>
          </div>
          <div className="proyectos_flecha">
            <img className="linea" src="/linea.png" alt="linea" />
            <p>Mis proyectos :&#41;</p>
            <img className="icono-flecha" src="/flecha.png" alt="flecha" />
          </div>
        </div>
      </div>
      
      {/* Iconos de redes en el lateral derecho */}
      <div className="social-icons">
        <a href="https://github.com/MinminzCodes" target="_blank" rel="noopener noreferrer">
          <img className="social-icon" src="/github-icon.png" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/jazmin-matta/" target="_blank" rel="noopener noreferrer">
          <img className="social-icon" src="/linkedin-icon.png" alt="LinkedIn" />
        </a>
      </div>
    </main>
  );
};

export default App;
