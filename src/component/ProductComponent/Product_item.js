import React from "react";
import Item from "./item";
import "./Product_item.css";
import { useState, useEffect } from "react";
function ProductItem() {

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
            contentLabel: `Show all ${item.data.length} item`,
            amount: item.data.length,
            style: "rotate(0deg)",
          };
        });
        setListItem(dataJson);
        setStatus(listStatus);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []); //api

  const [sizeProduct, setSizeProduct] = useState(0);
  function passData(status) {
    var result = [];
    listItem.forEach((item) => {
      if (status.name === item.name) {
        if (status.status === true) {
          result = item.data;
        } else {
          result = [];
          for (let i = 0; i < sizeProduct; i++) {
            result.push(item.data[i]);
          }
        }
      }
    });
    return result;
  }
  useEffect(() => {
    let sizeDevice = window.innerWidth;
    if (sizeDevice >= 1200) {
      setSizeProduct(5);
    } else if (sizeDevice > 768 && sizeDevice < 1200) {
      setSizeProduct(4);
    } else {
      setSizeProduct(2);
    }
  }, []);
  window.onresize = function () {
    let sizeDevice = window.innerWidth;
    if (sizeDevice >= 1200) {
      setSizeProduct(5);
    } else if (sizeDevice > 768 && sizeDevice < 1200) {
      setSizeProduct(4);
    } else {
      setSizeProduct(2);
    }
  };

  function handleClick(e, id, status) {
    e.stopPropagation();
    if (status.status === false) {
      let updateStatus = [...Status];
      updateStatus[id].status = true;
      updateStatus[id].style = "rotate(180deg)";
      updateStatus[id].contentLabel = "Hide";
      setStatus(updateStatus);
    } else {
      let updateStatus = [...Status];
      updateStatus[id].style = "rotate(0deg)";
      updateStatus[id].status = false;
      updateStatus[id].contentLabel = `Show all ${status.amount} item`;
      setStatus(updateStatus);
    }
  }
  let productElement = listItem.map((item, index) => {
    var data = Status ? passData(Status[index]) : "";
    return (
      <div className={item.name} key={item.name}>
        <div className="product_title">
          <div className="title-img">
            <svg
              size={80}
              color="#EFEFF5"
              viewBox={item.viewBox}
              rotate={0}
              width="80px"
              height="80px"
            >
              
              <path
                d={item.path}
                style={{ fill: "#efeff5", transition: "fill 0.1s ease" }}
              />
            </svg>
          </div>
          <div className="title-name">{item.name}</div>
          <div className="title-line" />
          <div
            className="title-button"
            name={item.name}
            click="false"
            onClick={(e) => handleClick(e, index, Status ? Status[index] : "")}
          >
            {Status ? Status[index].contentLabel : ""}
            <div className="title-button-icon">
              <i
                className="fa fa-chevron-down"
                aria-hidden="true"
                style={{ transform: Status ? Status[index].style : "" }}
              />
            </div>
          </div>
        </div>
        <div className="product_item">
          <Item data={data ? data : []}></Item>
        </div>
      </div>
    );
  });
  return <div className="grid">{productElement}</div>;
}

export default ProductItem;
