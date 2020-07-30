import React from "react";
import {Link} from "react-router-dom";

import logoImg from "../../assets/logo.png";
import linkImg from "../../assets/link-register.svg";

import "./styles.css";

const Login = () => {
  return (
    <div className="register-container">
      <section className="form">
        <img src={logoImg} alt="Link Manager" className="logo" />

        <form>
          <h1>Cadastre a sua conta</h1>


          <input
            type="email"
            className="email"
            placeholder="E-mail"
          />

          <input
            type="password"
            className="password"
            placeholder="Senha"
          />
          <input
            type="password"
            className="confirm-password"
            placeholder="Confirmar senha"
          />

          <button type="submit" className="button">Cadastrar</button>

          <Link className="back-link" to="/">
            {/* <FiLogIn size={16} color="#E02041"/> */}
            Voltar para o login
            </Link>
        </form>
      </section>

      <img src={linkImg} alt="Link"/>
    </div>
  );
};

export default Login;
