import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ListLinks from "./pages/ListLinks";
import CreateLinks from "./pages/CreateLinks";
import EditLinks from "./pages/EditLinks";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/links" exact component={ListLinks} />
        <Route path="/links/cadastro" component={CreateLinks} />
        <Route path="/links/editar" component={EditLinks} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
