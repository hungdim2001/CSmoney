import React, { Component,  } from "react";
import "./userLogin.css";
import { Link } from "react-router-dom";
import Context from "../../../../store/Context";
import Logged from "./Logged";
class UserLogin extends Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Link
          to="/user"
          className="userLogin"
          style={{ display: this.context[0].isLoggedIn ? "none" : "block" }}
        >
          <i className="fa fa-user" aria-hidden="true"></i>
        </Link>
        <Logged></Logged>
      </div>
    );
  }
}
export default UserLogin;
