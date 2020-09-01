import React from "react";
import { FiPlusSquare } from "react-icons/fi";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { linkCreate } from "../../actions/LinkActions";
import Header from "../../components/Header";
import { getFormData } from "../../helpers/form";

import "./styles.css";

const CreateLinks = ({ link, linkCreate }) => {
  function handleSubmit(e) {
    e.preventDefault();

    const data = getFormData(e);
    linkCreate(data);
  }
  if (link) {
    return <Redirect to="/links" />;
  }
  return (
    <div className="container">
      <Header title="Novo Link" />

      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="Label">Label</label>
            <input type="text" name="label" placeholder="Ex: Google" />
          </div>
          <div className="input-group">
            <label htmlFor="Url">Url</label>
            <input
              type="text"
              name="url"
              placeholder="Ex: https://google.com"
            />
          </div>

          <div className="input-check">
            <label>Rede Social ?</label>
            <input id="check" name="isSocial" type="checkbox" />
          </div>

          <button className="button" id="btn-submit" type="submit">
            <FiPlusSquare size={16} color="#fc3847" />
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    link: state.link.link,
  };
};

export default connect(mapStateToProps, { linkCreate })(CreateLinks);
