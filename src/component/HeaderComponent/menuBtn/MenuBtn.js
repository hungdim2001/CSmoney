import React from "react";
import "./MenuBtn.css";

function MenuBtn(props) {
  const { handleOpenMenu } = props;
  function onHandleClick() {
    handleOpenMenu(true);
  }
  return (
    <div className="menuBtn" onClick={onHandleClick}>
      <i className="fa fa-bars" aria-hidden="true"></i>
    </div>
  );
}

export default MenuBtn;
