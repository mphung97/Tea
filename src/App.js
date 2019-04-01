import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar, Main, TableList, Order, Staff, Login } from "./components";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/tables" component={TableList} />
          <Route path="/order" component={Order} />
          <Route path="/staff" component={Staff} />
          <Route path="/logout" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
