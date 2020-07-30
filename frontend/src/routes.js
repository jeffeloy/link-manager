import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Login from "./pages/Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
