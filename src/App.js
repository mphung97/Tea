import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { TableList, Order, Staff } from "./components";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TableList} />
          <Route path="/order" component={Order} />
          <Route path="/staff" component={Staff} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
