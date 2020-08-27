import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { connect } from "react-redux";
import { register } from "./RegisterActions";

import logoImg from "../../assets/logo.png";
import linkImg from "../../assets/link-register.svg";

import "./styles.css";

const Register = (props) => {
  const { account, register } = props;

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    register(data);
  }
  return (
    <div className="register-container">
      <section className="form">
        <img src={logoImg} alt="Link Manager" className="logo" />

        <form onSubmit={handleSubmit}>
          <h1>Cadastre a sua conta</h1>

          <input
            type="email"
            className="email"
            placeholder="E-mail"
            name="email"
          />

          <input
            type="password"
            className="password"
            placeholder="Senha"
            name="password"
          />
          <input
            type="password"
            className="confirm-password"
            placeholder="Confirmar senha"
            name="password_confirmation"
          />

          <button type="submit" className="button">
            Cadastrar
          </button>

          <Link className="back-link" to="/">
            <FiLogIn size={16} color="#fc3847" />
            Voltar para o login
          </Link>
        </form>
      </section>

      <img src={linkImg} alt="Link" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    account: state.register.account,
  };
};

export default connect(mapStateToProps, { register })(Register);
