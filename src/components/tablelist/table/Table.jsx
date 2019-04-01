import React from "react";
import "./style.css";

const Table = props => {
  const { status, no, onClick } = props;
  const tableStatus = "text-right text-" + status;

  return (
    <div className="col-6 col-sm-4 col-lg-2 py-2 px-3">
      <div className="card card-shadow my-2" onClick={onClick}>
        <div className="card-body text-center py-1">
          <div className={tableStatus}>
            <i className="fas fa-square-full" />
          </div>
          <div className="m-0 mb-3">
            <p className="text-muted m-0">bàn</p>
            <span className="h1 font-weight-bold">{no}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
