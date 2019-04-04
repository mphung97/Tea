import React from "react";
import "./style.css";

const Food = props => {
  return (
    <div className="food">
        <div className="card">
          <img
            className="card-img-top"
            src="https://picsum.photos/150/100"
            alt="Card cap"
          />
          <div className="card-body p-0 text-center">
            <p className="m-0 food-name">
              <span className="align-middle">Cơm sườn bì chả trứng</span>
            </p>
            <div className="clearfix p-1">
              <p className="d-inline float-left text-danger m-0">
                <b>100000đ</b>
              </p>
              <button
                type="button"
                className="d-inline float-right btn btn-link p-0"
              >
                Chọn
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Food;
