import React, { Component } from "react";
import Context from "../../../../store/Context";
import CartDetail from "./CartDetail";
import "./cart.css";
class Cart extends Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {};
  }
  numberOfProduct = () => {
    const amount = this.context[0].cart.reduce(
      (amount, item) => {
        return amount + item.amount;
      },
      0
    );
    return amount;
  };
  render() {
    return (
      <div className="cart">
        <div className="numberOfProduct">{this.numberOfProduct()}</div>
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        <CartDetail numberOfProduct={this.context[0].cart.length}></CartDetail>
      </div>
    );
  }
}
export default Cart;
