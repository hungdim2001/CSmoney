import React from "react";
import { useState, } from "react";
import "./user.css";
import { useHistory,  } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";
function User() {
  const history = useHistory();
  var [statusForm, setStatusForm] = useState(false);
  function changeStatus() {
    setStatusForm(!statusForm);
  }


  if (!localStorage.getItem("accessToken"))
    return (
      <div className="user-login">
        <div className="user-login-container">
          <div className="typeForm">
            <div
              className="register"
              style={{ borderBottom: statusForm ? "red solid 3px" : "none" }}
              onClick={changeStatus}
            >
              Register
            </div>
            <div
              className="login"
              style={{ borderBottom: statusForm ? "none" : "red solid 3px" }}
              onClick={changeStatus}
            >
              Login
            </div>{" "}
          </div>
          <Login statusForm={statusForm}></Login>
          <Register
            statusForm={statusForm}
            changeStatus={changeStatus}
          ></Register>
        </div>
      </div>
    );
  else {
    history.push("/");
    return<></>
  }
}

export default User;
