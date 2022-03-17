import React from "react";
import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
function Login(props) {
  //validate form
  const history = useHistory();
  let [account, setAccount] = useState({ username: "", password: "" });
  let [errorMessage, setErrorMessage] = useState({
    username: "",
    password: "",
  });
  function validate(e) {
    const regex = /^.{6,}$/;
    const { name, value } = e.target;
    if (name === "username") {
      if (regex.exec(value) !== null) {
        setErrorMessage((prevState) => ({
          ...prevState,
          [name]: "",
        }));
      } else {
        setErrorMessage((prevState) => ({
          ...prevState,
          [name]: "tên đăng nhập phải có tối thiểu 6 ký tự",
        }));
      }
    }
    if (name === "password") {
      if (regex.exec(value) !== null) {
        setErrorMessage((prevState) => ({
          ...prevState,
          [name]: "",
        }));
      } else {
        setErrorMessage((prevState) => ({
          ...prevState,
          [name]: "mật khẩu phải có tối thiểu 6 ký tự",
        }));
      }
    }
  }
  function handelChange(e) {
    const { name, value } = e.target;
    if (name === "checked") {
      console.log(e.target.checked);
      setAccount((pre) => ({
        ...pre,
        [name]: name.checked,
      }));
    } else {
      setAccount((pre) => ({
        ...pre,
        [name]: value,
      }));
    }
  }
  function handleSubmit(e) {
    if (!account.username || !account.password) {
      if (!account.username) {
        setErrorMessage((prevState) => ({
          ...prevState,
          username: "tài khoản phải có tối thiểu 6 ký tự",
        }));
        e.preventDefault();
      }
      if (!account.password) {
        setErrorMessage((prevState) => ({
          ...prevState,
          password: "mật khẩu phải có tối thiểu 6 ký tự",
        }));
        e.preventDefault();
      }
    } else {
      e.preventDefault();
      async function login() {
        try {
          const res = await axios.post("https://apicsgo.herokuapp.com/login", {
            username: account.username,
            password: account.password,
          });
          if (res.data.success) {
            alert(res.data.message);
            setAccount({
              username: "",
              password: "",
            });
            localStorage.setItem("accessToken", res.data.accessToken);

            history.push("/");
            window.location.reload();
          }
        } catch (error) {
          setErrorMessage((prevState) => ({
            ...prevState,
            username: "username hoặc password không đúng",
          }));
        }
      }
      login();
    }
  }
  return (
    <div style={{ display: props.statusForm ? "none" : "block" }}>
      <form action="" className="loginForm" onSubmit={(e) => handleSubmit(e)}>
        <div className="userName">
          <label htmlFor="username">UserName:</label>
          <input
            onBlur={(e) => validate(e)}
            value={account ? account.username : ""}
            name="username"
            onChange={(e) => handelChange(e)}
            type="text"
            id="username"
            placeholder="User Name"
            style={
              errorMessage.username
                ? { outline: "red solid 2px" }
                : { outline: "#aa95dc solid 2px" }
            }
          ></input>
          <span
            className="errorMessage"
            style={{ display: errorMessage.username ? "block" : "none" }}
          >
            {errorMessage.username}
          </span>
        </div>
        <div className="password">
          <label htmlFor="password">Password:</label>
          <input
            value={account ? account.password : ""}
            style={
              errorMessage.password
                ? { outline: "red solid 2px" }
                : { outline: "#aa95dc solid 2px" }
            }
            onBlur={(e) => validate(e)}
            name="password"
            onChange={(e) => handelChange(e)}
            placeholder="Password"
            type="password"
            id="password"
          ></input>
          <span
            className="errorMessage"
            style={{ display: errorMessage.password ? "block" : "none" }}
          >
            {errorMessage.password}
          </span>
        </div>
        <div className="rememberPassword">
          <input
            name="checked"
            type="checkbox"
            id="rememberPw"
            onChange={(e) => handelChange(e)}
            checked={account ? account.checked : false}
          />
          <label htmlFor="rememberPw">Remember Password</label>
        </div>
        <div className="btn-login">
          <button>Sign in</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
