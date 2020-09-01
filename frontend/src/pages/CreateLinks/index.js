import React from "react";
import { FiPlusSquare } from "react-icons/fi";

import Header from "../../components/Header";
import { getFormData } from "../../helpers/form";

import "./styles.css";

const CreateLinks = () => {
  function handleSubmit(e) {
    e.preventDefault();

    const data = getFormData(e);
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
            <input id="check" name="is-social" type="checkbox" />
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

export default CreateLinks;
