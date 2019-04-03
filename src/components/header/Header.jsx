import React, { Component } from "react";
import "./style.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-12 py-3 actionbar">
          <div className="float-left">
            <a className="btn-taskbar btn btn-light">
              Tất cả <span className="badge badge-primary">28</span>
            </a>
            <a className="btn btn-light btn-taskbar">
              Đang dùng <span className="badge badge-success">8</span>
            </a>
            <a className="btn btn-light btn-taskbar">
              Đợi món <span className="badge badge-danger">10</span>
            </a>
            <a className="btn btn-light btn-taskbar">
              Trống <span className="badge badge-secondary">12</span>
            </a>
          </div>
          <div className="float-right">
            <input
              className="form-control"
              type="number"
              placeholder="Nhập bàn cần tìm..."
              style={{ width: "400px" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
