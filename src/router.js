import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/index";
import Login from "./Components/Login/index";
import Cards from "./Components/Cards/index";
import Produto from "./Components/Produtos/produto";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/cards" component={Cards} />
      <Route path="/produtos" component={Produto} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
