import React from "react";
import { Link } from "react-router-dom";
import { FiPlusSquare, FiEdit, FiTrash2 } from "react-icons/fi";

import Header from "../../components/Header";

import "./styles.css";

const Links = () => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <div className="header">
          <h1>Links</h1>
          <Link className="back-link" id="add-link" to="/links">
            <FiPlusSquare size={16} color="#fc3847" />
            Adicionar
          </Link>
        </div>
        <div className="link-img">
          <img src="" alt="" />
        </div>

        {/* <div className="link-content">
          <span className="link-label">Label</span>
          <span className="link-url">Url</span>
        </div>

        <Link className="back-link" to="/links/:id">
          <FiEdit size={16} color="#fc3847" />
          Editar
        </Link>
        <Link className="back-link" to="/links/:id">
          <FiTrash2 size={16} color="#fc3847" />
          Deletar
        </Link> */}
      </div>
    </div>
  );
};

export default Links;
