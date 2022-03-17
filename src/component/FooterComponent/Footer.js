import React, { Component } from "react";
import "./footer.css";
import SocialIcon from "./SocialIcon";
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="grid">
          <div className="footer_wrapper">
            <div className="footer-block1">
              <div className="wrapper-copyright">
                ©2016-2021
                <a href="http://cs.money">“CS.MONEY” </a> ALL RIGHTS RESERVED. CS:GO
                trading service
              </div>
              <div className="wrapper-privacy">
                <span>·</span>
                <a href="/" className="privacy">
                  privacy
                </a>
                <span>·</span>
                <a href="/" className="terms">
                  terms
                </a>
              </div>
            </div>
            <SocialIcon></SocialIcon>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
