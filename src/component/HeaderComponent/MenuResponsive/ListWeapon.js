import React from "react";
import { useState,useEffect } from "react";
import "./ListWeapon.css";

import { Link } from "react-router-dom";
function ListWeapon(props) {
  const [weapon, setWeapon] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const data = await fetch("https://apicsgo.herokuapp.com/category");
        const dataJson = await data.json();
        setWeapon(dataJson);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []); //api
  function passData(name) {
    var result;
    var listItem = weapon;
    listItem.forEach((item) => {
      if (item.name === name) {
        result = item.data;
      }
    });
    return result;
  }
  function handleUserClick() {
    props.closeMenu();
  }
  let data;
  function showWeaponItem(e, name) {
    data = passData(name);
    props.getWeaponItem(data);
  }
  let listWeapon = weapon.map((item, index) => {
    return (
      <li
        key={index}
        onClick={(e) => {
          showWeaponItem(e, item.name);
        }}
      >
        {item.name} <i className="fa fa-angle-right" aria-hidden="true"></i>
      </li>
    );
  });
  return (
    <ul
      className="weapon"
      style={{
        transform: props.showWeaponItem ? "translateX(-100%)" : "translateX(0)",
      }}
    >
      {listWeapon}
      <Link to="/user" style={{ color: "#efeff5" }}>
        {" "}
        <li onClick={handleUserClick}>USER</li>
      </Link>
    </ul>
  );
}

export default ListWeapon;
