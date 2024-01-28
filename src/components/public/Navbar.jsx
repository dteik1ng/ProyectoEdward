import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Css/NavbarStyle.css";
import logo from "../../img/logo.png";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCategoriesMenuOpen, setCategoriesMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleCategoriesMenu = () => {
    setCategoriesMenuOpen(!isCategoriesMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img className="logo-page" src={logo} alt="" />
      </div>

      {/* Barra de Busqueda */}
      <div className="search-bar">
        <div className="text">
          Buscar <span className="separador">|</span>
        </div>
        <div className="text" onClick={toggleCategoriesMenu}>
          Categorías <span className="separador">|</span>
          {isCategoriesMenuOpen && (
            <div className="dropdown-menu">
              <ul className="menu-categories">
                <li>
                  <Link to="/">Casas Familiares</Link>
                </li>
                <li>
                  <Link to="/">Cabañas</Link>
                </li>
                <li>
                  <Link to="/">Casas de Arbol</Link>
                </li>
                <li>
                  <Link to="/">Casas Modernas</Link>
                </li>
                <li>
                  <Link to="/">Casas del Lago</Link>
                </li>
                <li>
                  <Link to="/">Ver Mas...</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <input type="text" placeholder="Casas de Medellín" />
        <FaSearch className="search-icon" />
      </div>


      {/* Menu desplegable de la derecha */}
      <div className={`menu ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes className="icon-menu" /> : <FaBars className="icon-menu" />}
        <img className="user-logo" src={logo} alt="" />
      </div>
      {isMenuOpen && (
        <div className="dropdown-menu-second">
          <ul className="menu-user">
            <li>
              <Link to="/">Ver Perfil</Link>
            </li>
            <li>
              <Link to="/">Favoritos</Link>
            </li>
            <li>
              <Link to="/">Iniciar Sesion</Link>
            </li>
            <li>
              <Link to="/">Registrarse</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
