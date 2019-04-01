import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Taskbar = props => {
  return (
    <div className="col-12">
      <div className="d-flex justify-content-between py-2">
        <div>
          <Link to="/" className="btn btn-dark btn-back rounded-0">
            <i className="fas fa-chevron-left" />
          </Link>
          <button className="btn btn-light btn-width rounded-0">Tất cả</button>
          <button className="btn btn-light btn-width rounded-0">
            Đang dùng <span className="badge badge-success">8</span>
          </button>
          <button className="btn btn-light btn-width rounded-0">
            Đợi món <span className="badge badge-danger">10</span>
          </button>
          <button className="btn btn-light btn-width rounded-0">
            Trống <span className="badge badge-secondary">12</span>
          </button>
        </div>
        <div>
          <input
            className="form-control"
            type="number"
            placeholder="Nhập bàn cần tìm..."
            style={{ width: "500px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
