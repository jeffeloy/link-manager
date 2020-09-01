import React from "react";
import { Link, Redirect } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { connect } from "react-redux";
import { register } from "../../actions/AccountActions";

import logoImg from "../../assets/logo.png";
import linkImg from "../../assets/link-register.svg";

import "./styles.css";
import { getFormData } from "../../helpers/form";

const Register = (props) => {
  const { account, register } = props;

  function handleSubmit(e) {
    e.preventDefault();

    const data = getFormData(e);
    register(data);
  }

  if (account) {
    return <Redirect to="/links" />;
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
    account: state.account.account,
  };
};

export default connect(mapStateToProps, { register })(Register);
