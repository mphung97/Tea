import React, { Component } from "react";
import "./style.css";
import Food from "./Food";

class Order extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-8">
            <div className="row">
              <Food name="Chó hấp" price="51000đ" />
              <Food name="Chó nướng" price="71000đ" />
              <Food name="Chó lẩu" price="100000đ" />
              <Food name="Chó xào" price="120000đ" />
            </div>
          </div>
          <div className="col-4 bg-white">
            <div className="clearfix pt-3 px-3">
              <h4 className="float-left m-0">Hóa đơn: 12345</h4>
              <h4 className="float-right">
                Bàn: <span className="badge badge-danger">12</span>
              </h4>
            </div>
            <hr className="m-1" />
            <div className="card border">
              <h5>Hủ tiếu xá xíu</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
