import React, { Component } from "react";
import "./listItem.css";
import { Link } from "react-router-dom";
class ListItem extends Component {
  render() {
    var liElement = this.props.data.map((item) => {
      return (
        <Link key={item.name} to={`/category/${item.name}`}>
          <li>{item.name}</li>
        </Link>
      );
    });
    return (
      <div
        className="listItem"
        style={{ display: this.props.style ? "block" : "none" }}
      >
        <ul>{liElement}</ul>
      </div>
    );
  }
}
export default ListItem;
