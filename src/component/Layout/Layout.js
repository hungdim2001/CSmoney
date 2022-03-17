import React, { Component } from "react";
import Header from "../HeaderComponent/Header";
import Home from "../Home/Home";
import Footer from "../FooterComponent/Footer";
import BackToTop from "../BackToTop/BackToTop"
import { Route, Switch, Redirect } from "react-router-dom";
import User from "../User/User";
import CategoryDetail from "../CategoryDetail/CategoryDetail";
class Layout extends Component {
  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route exact path="/user">
            <User />
          </Route>
          <Route path ="/category">
            <CategoryDetail/>
          </Route>
        </Switch>
        <BackToTop />
        <Footer />
       
      </div>
    );
  }
}
export default Layout;
