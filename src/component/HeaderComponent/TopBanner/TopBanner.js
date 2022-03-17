import React from "react";
import "./TopBanner.css";
import ListItem from "./listItem/ListItem";
import { useState, useEffect } from "react";
function TopBanner() {
  let [listItem, setListItem] = useState([]);
  let [Status, setStatus] = useState();
  useEffect(() => {
    async function getData() {
      try {
        const data = await fetch("https://apicsgo.herokuapp.com/category");
        const dataJson = await data.json();

        const listStatus = await dataJson.map((item, index) => {
          return {
            name: item.name,
            status: false,
          };
        });
        setListItem(dataJson);
        setStatus(listStatus);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []); // api

  window.onclick = (e) => {
    let index = Status.findIndex((i) => i.status === true);
    removeDropDown(index);
  };
  function removeDropDown(index) {
    if (index !== -1) {
      const newStatus = [...Status];
      newStatus[index].status = !Status[index].status;
      setStatus(newStatus);
    }
  }
  function onClick(e, index, status) {
    e.stopPropagation();
    if (
      Status.findIndex((i) => i.status === true) !== -1 &&
      Status.findIndex((i) => i.status === true) === index
    ) {
      const newStatus = [...Status];
      newStatus[index].status = !status.status;
      setStatus(newStatus);
      return;
    } else {
      removeDropDown(Status.findIndex((i) => i.status === true));
    }
    if (status.status) {
      const newStatus = [...Status];
      newStatus[index].status = !status.status;
      setStatus(newStatus);
    } else {
      const newStatus = [...Status];
      newStatus[index].status = !status.status;
      setStatus(newStatus);
    }
  }
  function passData(name) {
    var result;
    listItem.forEach((item) => {
      if (item.name === name) {
        result = item.data;
      }
    });
    return result;
  }
  var itemBanner = listItem;
  itemBanner = itemBanner.map((item, index) => {
    var data = passData(item.name);
    var result = (
      <div
        className="topBanner_item"
        id={item.name}
        key={item.name}
        onClick={(e) => onClick(e, index, Status[index])}
        style={{
          color: Status ? (Status[index].status ? "#aa95dc" : "") : "",
        }}
        // api
      >
        {item.name}
        <div className="dropDown">
          <i
            className="fa fa-chevron-down"
            aria-hidden="true"
            style={{
              transform: Status
                ? Status[index].status
                  ? "rotate(180deg)"
                  : "rotate(0deg)"
                : "rotate(0deg)",
            }} //api
          ></i>
        </div>
        <ListItem
          style={Status ? Status[index].status : "false"} // api
          data={data}
        ></ListItem>
      </div>
    );
    return result;
  });
  return (
    <div className="topBanner">
      <div className="topBanner_wrapper"> {itemBanner}</div>
    </div>
  );
}

export default TopBanner;
