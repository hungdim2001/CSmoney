import React, { Component } from "react";
import "./item.css";
import { Link } from "react-router-dom";
class Item extends Component {
  render() {
    let item = this.props.data.map((item, index) => {
      return (
        <div className="col-5 col-4 col-2" key={item.name}>
          <Link key={item.name} to={`/category/${item.name}`}>
            <div className="product_item-skin hover">
              <img src={item.image} alt={item.className} />
              <div className="product_item-skin-name">{item.name}</div>
              <div className="product_item-skin-amount">
                {item.amount} skins
              </div>
            </div>{" "}
          </Link>
        </div>
      );
    });

    return <div className="row">{item}</div>;
  }
}
export default Item;
