import React, { Component } from "react";
import "./Product.css";
import ProductItem from "./Product_item";
class Product extends Component {
  render() {
    return (
      <div className="product">
        <ProductItem />
      </div>
    );
  }
}
export default Product;
