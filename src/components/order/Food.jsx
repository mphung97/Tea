import React from "react";

const Food = props => {
  const { name, price } = props;
  return (
    <div className="col-3 p-4">
      <div className="card">
        <img
          className="card-img-top"
          src="https://picsum.photos/200/100"
          alt="Card cap"
        />
        <div className="card-body py-2 text-center">
          <h4 className="card-title mb-1">{name}</h4>
          <div className="clearfix">
            <h5 className="float-left text-danger">{price}</h5>
            <h6 className="float-right">/phần</h6>
          </div>
          <a href="/" className="btn btn-success">
            Chọn món
          </a>
        </div>
      </div>
    </div>
  );
};

export default Food;
