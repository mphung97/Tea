import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import { TableList, Order, Staff } from "./components";
import "./App.css";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <TableList />
  },
  {
    path: "/order",
    main: () => <Order />
  },
  {
    path: "/food",
    main: () => <h2>Foods</h2>
  },
  {
    path: "/stock",
    main: () => <h2>Stock</h2>
  },
  {
    path: "/employee",
    main: () => <h2>Employee</h2>
  },
  {
    path: "/report",
    main: () => <h2>Report</h2>
  }
];

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2 p-0">
              <div className="sidebar">
                <div className="nav flex-column bg-white clearfix">
                  <Link
                    to="/"
                    className="nav-link text-white p-3 text-center bg-primary"
                  >
                    <span className="rounded mr-3 float-left">
                      <i className="fas fa-table" />
                    </span>
                    <span className="d-block">Quản lý bàn</span>
                  </Link>
                  <Link
                    to="/order"
                    className="nav-link text-dark p-3 text-center bg-white"
                  >
                    <span className="rounded mr-3 float-left">
                      <i className="fas fa-shopping-basket" />
                    </span>
                    <span className="d-block">Quản lý đơn hàng</span>
                  </Link>
                  <Link
                    to="/food"
                    className="nav-link text-dark p-3 text-center bg-white"
                  >
                    <span className="rounded mr-3 float-left">
                      <i className="fas fa-utensils" />
                    </span>
                    <span className="d-block">Quản lý thực đơn</span>
                  </Link>
                  <Link
                    to="/stock"
                    className="nav-link text-dark p-3 text-center bg-white"
                  >
                    <span className="rounded mr-3 float-left">
                      <i className="fas fa-cubes" />
                    </span>
                    <span className="d-block">Quản lý hàng tồn</span>
                  </Link>
                  <Link
                    to="/employee"
                    className="nav-link text-dark p-3 text-center bg-white"
                  >
                    <span className="rounded mr-3 float-left">
                      <i className="fas fa-user-friends" />
                    </span>
                    <span className="d-block">Quản lý nhân viên</span>
                  </Link>
                  <Link
                    to="/report"
                    className="nav-link text-dark p-3 text-center bg-white"
                  >
                    <span className="rounded mr-3 float-left">
                      <i className="fas fa-chart-line" />
                    </span>
                    <span className="d-block">Báo cáo</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-10">
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
