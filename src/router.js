import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/index";
import Login from "./Components/Login/index";
import Cards from "./Components/Cards/index";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/cards" component={Cards} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
