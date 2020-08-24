import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Header = ({ title, children }) => {
  return (
    <>
      <header>
        <nav className="nav-bar">
          <ul className="nav-links">
            <li>
              <a href="#">Voltar</a>
            </li>
            <li>
              <Link to="/links">Links</Link>
            </li>
            <li>
              <a href="#">Sair</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="header">
        <h1>{title}</h1>
        {children}
      </div>
    </>
  );
};

export default Header;
