import React, { Component } from "react";
import "./style.css";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div className="col-2 p-0">
      <div className="sidebar">
        <div className="nav flex-column bg-white clearfix">
          <a className="nav-link text-white p-3 text-center bg-primary" href="">
            <span className="rounded mr-3 float-left">
              <i className="fas fa-table" />
            </span>
            <span className="d-block">Quản lý bàn</span>
          </a>
          <a className="nav-link text-dark p-3 text-center bg-light" href="">
            <span className="rounded mr-3 float-left">
              <i className="fas fa-shopping-basket" />
            </span>
            <span className="d-block">Quản lý đơn hàng</span>
          </a>
          <a className="nav-link text-dark p-3 text-center bg-light" href="">
            <span className="rounded mr-3 float-left">
              <i className="fas fa-utensils" />
            </span>
            <span className="d-block">Quản lý thực đơn</span>
          </a>
          <a className="nav-link text-dark p-3 text-center bg-light" href="">
            <span className="rounded mr-3 float-left">
              <i className="fas fa-cubes" />
            </span>
            <span className="d-block">Quản lý hàng tồn</span>
          </a>
          <a className="nav-link text-dark p-3 text-center bg-light" href="">
            <span className="rounded mr-3 float-left">
              <i className="fas fa-user-friends" />
            </span>
            <span className="d-block">Quản lý nhân viên</span>
          </a>
          <a className="nav-link text-dark p-3 text-center bg-light" href="">
            <span className="rounded mr-3 float-left">
              <i className="fas fa-chart-line" />
            </span>
            <span className="d-block">Báo cáo</span>
          </a>
        </div>
      </div>
    </div>
    );
  }
}

export default Sidebar;
