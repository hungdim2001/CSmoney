import React, { Component } from "react";
import "./Header.css";
import TopBanner from "./TopBanner/TopBanner";
import UserAndCart from "./userAndCart/UserAndCart";
import MenuBtn from "./menuBtn/MenuBtn";
import MenuResponsive from "./MenuResponsive/MenuResponsive";
import Modal from "./modal/modal";
import { connect } from "react-redux";
import {  Link  } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { openMenu: false, showWeaponItem: false };
  }
  handleOpenMenu = (status) => {
    this.setState({
      openMenu: status,
    });
    setTimeout(() => {
      this.setState({
        showWeaponItem: false,
      });
    }, 1000);
  };
  handleClose = (status) => {
    this.setState({
      openMenu: status,
    });
  };
  HandleShowWeaponItem = (status) => {
    this.setState({
      showWeaponItem: status,
    });
  };
  render() {
    return (
      <header
        className="header"
        style={{
          borderBottom:
            this.props.pageOffset === 0
              ? "none"
              : "1px solid hsla(0, 0%, 100%, 0.1)",
        }}
      >
        <div className="grid">
          <div className="wrapper_header">
            <MenuBtn handleOpenMenu={this.handleOpenMenu} />
            <MenuResponsive
              statusOpenMenu={this.state.openMenu}
              closeMenu={this.handleOpenMenu}
              handleShowWeaponItem={this.HandleShowWeaponItem}
              showWeaponItem={this.state.showWeaponItem}
            ></MenuResponsive>
            <Modal
              openMenu={this.state.openMenu}
              handleCloseModal={this.handleOpenMenu}
            />
            <Link className="logo" to="/">
              <img src="https://cs.money/svg/logo.svg" alt="cs.money" />
            </Link>
            <TopBanner />
            <UserAndCart />
          </div>
        </div>
      </header>
    );
  }
}
const mapStateToProps = (state) => {
  return { pageOffset: state.backToTop.pageYOffset };
};
export default connect(mapStateToProps, null)(Header);
