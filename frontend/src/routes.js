import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ListLinks from "./pages/ListLinks";
import CreateLinks from "./pages/CreateLinks";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/links" exact component={ListLinks} />
        <Route path="/links/cadastro" component={CreateLinks} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
