import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Authors from "./components/authorList";
import Author from "./components/authorProfile";

const routes = () => {
  return (
    <Switch>
      <Route path="/authors/:id" component={Author} />
      <Route path="/authors" component={Authors} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default routes;
