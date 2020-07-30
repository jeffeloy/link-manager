import React from "react";

import logoImg from "../../assets/logo.png";
import linkImg from "../../assets/link.svg";

import "./styles.css";

const Login = () => {
  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Link Manager" className="logo" />

        <form>
          <h1>Faça seu login</h1>


          <input
            type="email"
            className="input"
            placeholder="E-mail"
          />

          <input
            type="password"
            placeholder="Senha"
          />

          <button type="submit" className="button">Entrar</button>

          <a className="back-link" href="/register">
            {/* <FiLogIn size={16} color="#E02041"/> */}
            Cadastre-se
            </a>
        </form>
      </section>

      <img src={linkImg} alt="Link"/>
    </div>
  );
};

export default Login;
