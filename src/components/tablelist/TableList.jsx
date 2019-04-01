import React, { Component } from "react";
import Table from "./table/Table";
import Header from "./header/Header";
import "./style.css";

const data = require("./data.json");

class TableList extends Component {
  state = {
    tables: data
  };

  click = () => {
    console.log("click");
  };

  render() {
    const h = window.innerHeight - 100;
    return (
      <div className="container-fluid">
        <div className="col-12">
          <div className="row">
            <Header />
          </div>
          <div className="row px-5" style={{ overflowY: "scroll", height: h }}>
            {this.state.tables.map(t => (
              <Table key={t.no} {...t} onClick={() => this.click()} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TableList;
