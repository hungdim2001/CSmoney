import React from "react";
import SocialIcon from "./SocialIconMenu";
import ListWeapon from "./ListWeapon";
import ListWeaponItem from "./ListWeaponItem";
import "./MenuResponsive.css";
import { useState } from "react";

function MenuResponsive(props) {
  const { statusOpenMenu, closeMenu, showWeaponItem, handleShowWeaponItem } =
    props;
  const [weaponItem, setWeaponItem] = useState([]);
  function handleCloseMenu(data) {
    closeMenu(false);
  }
  function getWeaponItem(data) {
    setWeaponItem(data);
    handleShowWeaponItem(true);
  }
  function handleBack() {
    handleShowWeaponItem(false);
  }
  return (
    <div
      className="menuResponsive"
      style={{ left: statusOpenMenu ? "0" : "-100%" }}
    >
      <div className="closeMenuResponsive" onClick={handleCloseMenu}>
        <i className="fa fa-times" aria-hidden="true"></i>
      </div>

      <ListWeapon
        getWeaponItem={getWeaponItem}
        showWeaponItem={showWeaponItem}
        closeMenu={handleCloseMenu}
      ></ListWeapon>

      <SocialIcon showWeaponItem={showWeaponItem} />

      <ListWeaponItem
        closeMenu={handleCloseMenu}
        weaponItem={weaponItem}
        showWeaponItem={showWeaponItem}
        handleBackMenu={handleBack}
      />
    </div>
  );
}

export default MenuResponsive;
