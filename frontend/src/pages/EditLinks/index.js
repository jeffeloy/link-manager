import React from "react";
import { FiPlusSquare } from "react-icons/fi";

import Header from "../../components/Header";

import "./styles.css";

const EditLinks = () => {
  return (
    <div className="container">
      <Header title="Editar Link" />

      <div className="content">
        <form>
          <div className="input-group">
            <label htmlFor="Label">Label</label>
            <input type="text" placeholder="Ex: Google" />
          </div>
          <div className="input-group">
            <label htmlFor="Url">Url</label>
            <input type="text" placeholder="Ex: https://google.com" />
          </div>

          <div className="input-check">
            <label>Rede Social ?</label>
            <input id="check" type="checkbox" />
          </div>

          <button className="button" id="btn-submit" type="submit">
            <FiPlusSquare size={16} color="#fc3847" />
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditLinks;
