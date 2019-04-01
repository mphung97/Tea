import React, { Component } from "react";
import "./style.css";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div className="col-3 border">
        <div className="sidebar py-2">
          <button className="card p-3 mb-2 w-100">
            <div className="d-flex align-items-center text-left">
              <span
                className="bg-primary text-white rounded mr-3"
                style={{ padding: "5px 10px" }}
              >
                <i className="fas fa-home" />
              </span>
              <div>
                <h5 className="m-0 text-primary font-weight-bold">
                  Quản lý bàn
                </h5>
                <small className="text-muted">28 bàn ăn</small>
              </div>
            </div>
          </button>
          <button className="card p-3 mb-2 w-100">
            <div className="d-flex align-items-center text-left">
              <span
                className="bg-success text-white rounded mr-3"
                style={{ padding: "5px 10px" }}
              >
                <i className="fas fa-shopping-cart" />
              </span>
              <div>
                <h5 className="m-0 text-succes font-weight-bold">
                  Quản lý hóa đơn
                </h5>
                <small className="text-muted">50 hóa đơn</small>
              </div>
            </div>
          </button>
          <button className="card p-3 mb-2 w-100">
            <div className="d-flex align-items-center text-left">
              <span
                className="bg-danger text-white rounded mr-3"
                style={{ padding: "5px 10px" }}
              >
                <i className="fas fa-users" />
              </span>
              <div>
                <h5 className="m-0 text-danger font-weight-bold">
                  Quản lý nhân viên
                </h5>
                <small className="text-muted">37 nhân viên</small>
              </div>
            </div>
          </button>
          <button className="card p-3 mb-2 w-100">
            <div className="d-flex align-items-center text-left">
              <span
                className="bg-info text-white rounded mr-3"
                style={{ padding: "5px 10px" }}
              >
                <i className="fas fa-cogs" />
              </span>
              <div>
                <h5 className="m-0 text-info font-weight-bold">
                  Quản lý nhà hàng
                </h5>
                <small className="text-muted">Bàn, thực đơn,...</small>
              </div>
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default Sidebar;
