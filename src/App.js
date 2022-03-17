import React, { Component } from "react";
import Header from "./component/HeaderComponent/Header";
import Footer from "./component/FooterComponent/Footer";
import Home from "./component/Home/Home";
import User from "./component/User/User";
import CategoryDetail from "./component/CategoryDetail/CategoryDetail";
import BackToTop from "./component/BackToTop/BackToTop";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Context from "./store/Context";
import axios from "axios";
import { actions } from "./store/";
import NotFound from "./component/NotFound/notFound";

class App extends Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    const accessToken = localStorage.getItem("accessToken");
    const [state, dispatch] = this.context;
    this.setState({ data: state });
    if (!accessToken) {
      dispatch(actions.checkLogin({ isLoggedIn: false, username: null }));
    } else {
      axios
        .post("https://apicsgo.herokuapp.com/token", {
          token: accessToken,
        })
        .then(function (response) {
          const result = response.data;
          if(!result.success){
            localStorage.removeItem("accessToken");
          }
          dispatch(
            actions.checkLogin({
              isLoggedIn: result.success,
              username: result.data.username,
            })
          );
        })
        .catch(function (err) {
          console.log(err);
          dispatch(actions.checkLogin({ isLoggedIn: false, username: null }));
          localStorage.removeItem("accessToken");
        });
    }
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route exact path="/user">
            <User/>
          </Route>
          <Route path="/category">
            <CategoryDetail />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <BackToTop />
        <Footer />
      </div>
    );
  }
}
export default App;
