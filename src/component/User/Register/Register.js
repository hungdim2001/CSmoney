import React from "react";
import "./register.css";
// import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState,  } from "react";
function Register(props) {
  let [account, setAccount] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });
  let [errorMessage, setErrorMessage] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });
  function handelChange(e) {
    const { name, value } = e.target;
    setAccount((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function validateForm(e) {
    // validate form
    const { name, value } = e.target;
    const regexUserName = /^.{6,}$/;
    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{5,}$/;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(.\w{2,3})+$/;
    if (name === "username") {
      if (regexUserName.exec(value) !== null) {
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
    if (name === "email") {
      if (regexEmail.exec(value) !== null) {
        setErrorMessage((prevState) => ({
          ...prevState,
          [name]: "",
        }));
      } else {
        setErrorMessage((prevState) => ({
          ...prevState,
          [name]: "vui lòng nhập đúng định dạng email",
        }));
      }
    }
    if (name === "password") {
      if (regexPassword.exec(value) !== null) {
        setErrorMessage((prevState) => ({
          ...prevState,
          [name]: "",
        }));
      } else {
        setErrorMessage((prevState) => ({
          ...prevState,
          [name]: "mật khẩu phải tối thiểu 6 ký tự và có 1 chữ hoa",
        }));
      }
    }
    if (name === "rePassword") {
      if (value === account.password) {
        console.log("okay");
        setErrorMessage((prevState) => ({
          ...prevState,
          [name]: "",
        }));
      } else {
        console.log("not okay");
        setErrorMessage((prevState) => ({
          ...prevState,
          [name]: "nhập lại mật khẩu phải giống nhau",
        }));
      }
    }
  }
  function handleSubmit(e) {
    if (
      !account.username ||
      !account.password ||
      !account.email ||
      !account.rePassword
    ) {
      if (!account.username) {
        setErrorMessage((prevState) => ({
          ...prevState,
          username: "tên đăng nhập phải có tối thỉểu 6 ký tự",
        }));
        e.preventDefault();
      }
      if (!account.password) {
        setErrorMessage((prevState) => ({
          ...prevState,
          password: "mật khẩu phải tối thiểu 6 ký tự và có 1 chữ hoa",
        }));
        e.preventDefault();
      }
      if (!account.email) {
        setErrorMessage((prevState) => ({
          ...prevState,
          email: "vui lòng nhập đúng định dạng email",
        }));
        e.preventDefault();
      }
    } else {
      e.preventDefault();
      async function register() {
        try {
          const res = await axios.post("https://apicsgo.herokuapp.com/register", {
            username: account.username,
            password: account.password,
            mail: account.email,
          });
          if (res.data.success) {
            alert(res.data.message);
            setAccount({
              username: "",
              password: "",
              email: "",
              rePassword: "",
            });
            props.changeStatus();
          }
        } catch (error) {
          setErrorMessage((prevState) => ({
            ...prevState,
            username: "username đã được sử dụng",
          }));
        }
      }
      register();
    }
  }

  return (
    <div style={{ display: props.statusForm ? "block" : "none" }}>
      <form
        action=""
        className="registerForm"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="userName">
          <label htmlFor="usernameRegister">UserName:</label>
          <input
            name="username"
            type="text"
            id="usernameRegister"
            value={account ? account.username : ""}
            placeholder="User Name"
            onChange={(e) => handelChange(e)}
            onBlur={(e) => validateForm(e)}
            style={
              errorMessage.username
                ? { outline: "red solid 2px" }
                : { outline: "#aa95dc solid 2px" }
            }
          ></input>
          <span
            className="errorMessage-re"
            style={{ display: errorMessage.username ? "block" : "none" }}
          >
            {errorMessage.username}
          </span>
        </div>
        <div className="email">
          {" "}
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            type="text"
            id="email"
            value={account ? account.email : ""}
            placeholder="Email"
            onChange={(e) => handelChange(e)}
            onBlur={(e) => validateForm(e)}
            style={
              errorMessage.email
                ? { outline: "red solid 2px" }
                : { outline: "#aa95dc solid 2px" }
            }
          ></input>
          <span
            className="errorMessage-re"
            style={{ display: errorMessage.email ? "block" : "none" }}
          >
            {errorMessage.email}
          </span>
        </div>
        <div className="password">
          <label htmlFor="passwordRegister">Password:</label>
          <input
            name="password"
            placeholder="Password"
            type="password"
            id="passwordRegister"
            onChange={(e) => handelChange(e)}
            value={account ? account.password : ""}
            onBlur={(e) => validateForm(e)}
            style={
              errorMessage.password
                ? { outline: "red solid 2px" }
                : { outline: "#aa95dc solid 2px" }
            }
          ></input>
          <span
            className="errorMessage-re"
            style={{ display: errorMessage.password ? "block" : "none" }}
          >
            {errorMessage.password}
          </span>
        </div>
        <div className="rePassword">
          <label htmlFor="rePassword">Repeat Password:</label>
          <input
            onBlur={(e) => validateForm(e)}
            name="rePassword"
            placeholder="Repeat Password"
            type="password"
            id="rePassword"
            value={account ? account.rePassword : ""}
            onChange={(e) => handelChange(e)}
            style={
              errorMessage.rePassword
                ? { outline: "red solid 2px" }
                : { outline: "#aa95dc solid 2px" }
            }
          ></input>
          <span
            className="errorMessage-re"
            style={{ display: errorMessage.rePassword ? "block" : "none" }}
          >
            {errorMessage.rePassword}
          </span>
        </div>
        <div className="btn-login">
          <button>Sign up</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
