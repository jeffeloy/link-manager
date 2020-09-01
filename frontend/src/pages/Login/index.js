import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/AccountActions";

import { FiLogIn } from "react-icons/fi";
import logoImg from "../../assets/logo.png";
import linkImg from "../../assets/link.svg";

import "./styles.css";
import { getFormData } from "../../helpers/form";

const Login = (props) => {
  const { account, login } = props;

  function handleSubmit(e) {
    e.preventDefault();

    const data = getFormData(e);
    login(data);
  }
  if (account) {
    return <Redirect to="/links" />;
  }

  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Link Manager" className="logo" />

        <form onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>

          <input
            type="email"
            className="input"
            name="email"
            placeholder="E-mail"
          />

          <input type="password" name="password" placeholder="Senha" />

          <button type="submit" className="button">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#fc3847" />
            Cadastre-se
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

export default connect(mapStateToProps, { login })(Login);
