import React from "react";
import logoImg from "../../assets/logo.png";
import { FiPower } from "react-icons/fi";

import "./styles.css";

const Header = () => {
  return (
    <header>
      <nav className="nav-bar">
        <ul className="nav-links">
          <li>
            <a href="#">Voltar</a>
          </li>
          <li>
            <a href="#">Links</a>
          </li>
          <li>
            <a href="#">Sair</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
