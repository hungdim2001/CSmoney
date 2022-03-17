import React from "react";
import "./modal.css";
function Modal(props) {
  const { openMenu, handleCloseModal } = props;
  function handleClose() {
    handleCloseModal(false);
  }
  return (
    <div
      className="modal"
      style={{
        display: openMenu ? "block" : "none",
      }}
      onClick={handleClose}
    >
      <div
        className="modal_overlay "
        style={{
          display: openMenu ? "block" : "none",
        }}
      ></div>
    </div>
  );
}

export default Modal;
