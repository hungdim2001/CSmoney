import React from "react";
import { Context } from "../../../../store";
import "./Logged.css";
import Logout from "./Logout";
function Logged(props) {
  const [state, ] = React.useContext(Context);
  return (
    <div
      className="logged"
      style={{ display: state.isLoggedIn ? "block" : "none" }}
    >
      {state.username}
      <Logout></Logout>
    </div>
  );
}

export default Logged;
