import React from "react";
import { FiLogOut } from "react-icons/fi";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/AccountActions";

import "./styles.css";

const Header = ({ title, children, logout, account }) => {
  if (!account) {
    return <Redirect to="/" />;
  }
  function handleLogout(e) {
    e.preventDefault();

    logout();
  }
  return (
    <>
      <header>
        <nav className="nav-bar">
          <ul className="nav-links">
            <li>
              <a href="#">Voltar</a>
            </li>
            <li>
              <Link to="/links">Links</Link>
            </li>
            <li>
              <button onClick={handleLogout}>
                Sair
                <FiLogOut size={20} color="#f4f3ee" />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <div className="header">
        <h1>{title}</h1>
        {children}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    account: state.account.account,
  };
};

export default connect(mapStateToProps, { logout })(Header);
