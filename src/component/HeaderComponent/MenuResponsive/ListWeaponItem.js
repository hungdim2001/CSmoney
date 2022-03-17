import React from "react";
import "./ListWeaponItem.css";
import { Link } from "react-router-dom";
ListWeaponItem.propTypes = {};

function ListWeaponItem(props) {
  function handleClick() {
    props.closeMenu();
  }
  const { weaponItem, showWeaponItem, handleBackMenu } = props;
  let weaponElement = weaponItem.map((item) => {
    return (
      <Link key={item.name} to={`/category/${item.name}`} onClick={handleClick}>
        <li>{item.name}</li>
      </Link>
    );
  });
  function handleBack() {
    handleBackMenu(true);
  }
  return (
    <div
      className="ListWeaponItem"
      style={{
        visibility: showWeaponItem ? "visible" : "hidden",
        left: showWeaponItem ? "0" : "100%",
      }}
    >
      <div className="backBtn" onClick={handleBack}>
        <i className="fa fa-angle-left" aria-hidden="true"></i> Back
      </div>
      <div className="wrapWeaponItem">
        {" "}
        <ul>{weaponElement}</ul>
      </div>
    </div>
  );
}

export default ListWeaponItem;
