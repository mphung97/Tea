import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Main extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="col-8 offset-2 mt-5">
          <div className="row">
            <div className="col-4">
              <Link to="/tables" className="card p-4 mb-4 w-100">
                <div
                  className="d-flex align-items-center text-left"
                  style={{ height: "100px" }}
                >
                  <span className="bg-primary text-white rounded mr-3 main-icon">
                    <i className="fas fa-utensils" />
                  </span>
                  <div>
                    <h5 className="m-0 text-primary font-weight-bold">
                      Quản lý bàn
                    </h5>
                    <small className="text-muted">28 bàn ăn</small>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-4">
              <Link to="/order" className="card p-4 mb-4 w-100">
                <div
                  className="d-flex align-items-center text-left"
                  style={{ height: "100px" }}
                >
                  <span className="bg-success text-white rounded mr-3 main-icon">
                    <i className="fas fa-wallet" />
                  </span>
                  <div>
                    <h5 className="m-0 text-success font-weight-bold">
                      Quản lý hóa đơn
                    </h5>
                    <small className="text-muted">50 hóa đơn</small>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-4">
              <Link to="/staff" className="card p-4 mb-4 w-100">
                <div
                  className="d-flex align-items-center text-left"
                  style={{ height: "100px" }}
                >
                  <span className="bg-danger text-white rounded mr-3 main-icon">
                    <i className="fas fa-user-friends" />
                  </span>
                  <div>
                    <h5 className="m-0 text-danger font-weight-bold">
                      Quản lý nhân viên
                    </h5>
                    <small className="text-muted">37 nhân viên</small>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-4">
              <Link to="/" className="card p-4 mb-4 w-100">
                <div
                  className="d-flex align-items-center text-left"
                  style={{ height: "100px" }}
                >
                  <span className="bg-info text-white rounded mr-3 main-icon">
                    <i className="fas fa-cogs" />
                  </span>
                  <div>
                    <h5 className="m-0 text-info font-weight-bold">
                      Quản lý nhà hàng
                    </h5>
                    <small className="text-muted">Bàn, thực đơn,...</small>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
