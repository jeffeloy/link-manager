import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FiPlusSquare, FiEdit, FiTrash2 } from "react-icons/fi";

import Header from "../../components/Header";
import { linkList } from "../../actions/LinkActions";

import imageDefault from "../../assets/image.jpg";
import "./styles.css";

const ListLinks = ({ links, linkList }) => {
  useEffect(() => {
    linkList();
  }, [linkList]);

  return (
    <div className="container">
      <Header
        title="Links"
        children={
          <Link className="back-link" id="add-link" to="/links/cadastro">
            <FiPlusSquare size={16} color="#fc3847" />
            Adicionar
          </Link>
        }
      ></Header>
      {links && links.length
        ? links.map((link) => {
            return (
              <div className="content-links">
                <div className="link-content">
                  <img src={imageDefault} alt="Imagem" />
                  <div className="info-link">
                    <span className="link-label">{link.label}</span>
                    <a className="link-url" target="blank" href={link.url}>
                      {link.url}
                    </a>
                  </div>
                </div>

                <section>
                  <Link className="edit-link" to="/links/editar/:id">
                    <FiEdit size={16} color="#fc3847" />
                    Editar
                  </Link>
                  <button className="delete-link">
                    <FiTrash2 size={16} color="#fc3847" />
                    Deletar
                  </button>
                </section>
              </div>
            );
          })
        : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    links: state.link.links,
  };
};

export default connect(mapStateToProps, { linkList })(ListLinks);
