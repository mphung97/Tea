import React, { Component } from "react";
import "./style.css";
import Food from "./Food";

class Order extends Component {
  render() {
    return (
       <div className="row">
        <div className="col-8">
          <div className="row bg-white" style={{ height: "56px" }} />
          <div className="row" style={{ overflowX: "scroll", height: "90vh" }}>
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
          </div>
        </div>
        <div className="col-4 p-0 bg-white">
          <div className="table-responsive">
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th style={{ padding: "8px 15px" }}>Bàn</th>
                  <th style={{ padding: "8px 15px" }}>Hóa đơn</th>
                  <th style={{ padding: "8px 15px" }}>Created</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12</td>
                  <td>1324</td>
                  <td>áda</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
