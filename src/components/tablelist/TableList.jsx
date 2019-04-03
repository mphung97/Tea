import React, { Component } from "react";
import { Sidebar, Header, Table } from "../index";
import "./style.css";

const data = require("../fakedata.json");

class TableList extends Component {
  state = {
    tables: data
  };

  click = () => {
    console.log("click");
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-10">
            <Header />
            <div className="row tables">
              {this.state.tables.map(t => (
                <Table key={t.no} {...t} onClick={() => this.click()} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TableList;
