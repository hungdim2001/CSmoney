import React, { Component } from "react";
import "./search.css";
import SearchResult from "./SearchResult";
class Search extends Component {
  constructor(props) {
    super(props);
    this.timeTyping = React.createRef(null);
    this.state = {
      styleSearch: {
        position: "absolute",
        width: "100%",
        height: "100%",
        left: "0",
        justifyContent: "space-between",
      },
      styleInput: {
        display: "block",
        width: "100%",
      },
      styleCloseSearch: {
        display: "block",
      },
      statusSearch: false,
      sizeDevice: window.innerWidth,
      keyword: "",
      data: [],
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  updateDimensions = () => {
    this.setState({
      sizeDevice: window.innerWidth,
    });
    if (this.state.sizeDevice <= 767) {
      this.setState({
        keyword: "",
        data: [],
      });
    }
  };
  handleClick = (e) => {
    this.setState({
      statusSearch: true,
      keyword: "",
      data: [],
    });
  };

  handleClose = () => {
    this.setState({
      statusSearch: false,
      keyword: "",
      data: [],
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
  };

  onChange = (e) => {
    var _this = this;
    function setStateAsync(state) {
      return new Promise((resolve) => {
        _this.setState({ data: state });
      });
    }
    this.setState({
      keyword: e.target.value,
    });

    if (this.timeTyping.current) {
      clearTimeout(this.timeTyping.current);
    }

    this.timeTyping.current = setTimeout(() => {
      let keyword = this.state.keyword;
      async function getData() {
        try {
          if (keyword.length > 0) {
            const dataJson = await fetch(
              `https://apicsgo.herokuapp.com/category/search?key=${keyword}`
            );
            const data = await dataJson.json();
            await setStateAsync(data);
          } else {
            setStateAsync([]);
          }
        } catch (err) {
          console.log("err: " + err);
        }
      }

      getData();
    }, 500);
  };

  render() {
    return (
      <div
        className="search"
        style={this.state.statusSearch ? this.state.styleSearch : {}}
      >
        <form
          onSubmit={(e) => {
            this.onSubmit(e);
          }}
          action=""
          className="search-form"
          style={this.state.statusSearch ? this.state.styleSearch : {}}
        >
          <div
            className="search_icon"
            onClick={this.state.sizeDevice <= 767 ? this.handleClick : () => {}}
          >
            <i className="fa fa-search" aria-hidden="true"></i>
          </div>
          <input
            className="input"
            type="text"
            placeholder="Search..."
            style={this.state.statusSearch ? this.state.styleInput : {}}
            value={this.state.keyword}
            onChange={(e) => {
              this.onChange(e);
            }}
          />
          <div
            className="closeSearch"
            onClick={this.handleClose}
            style={this.state.statusSearch ? this.state.styleCloseSearch : {}}
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        </form>
        <SearchResult result={this.state.data} />
      </div>
    );
  }
}
export default Search;
