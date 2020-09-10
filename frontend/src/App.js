import React, { useEffect } from "react";
import { connect } from "react-redux";
import Routes from "./routes";

import { initAccount } from "./actions/AccountActions";
import "./global.css";

const App = ({ initAccount }) => {
  useEffect(() => {
    initAccount();
  }, [initAccount]);
  return <Routes />;
};

const mapStateToProps = (state) => {
  return { account: state.account.account };
};
export default connect(mapStateToProps, { initAccount })(App);
