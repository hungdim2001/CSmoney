import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import "./categoryDetail.css";
import Context from "../../store/Context";
import { addToCart } from "../../store/action";
import Parser from "html-react-parser";
function CategoryDetail(props) {
  const [, dispatch] = useContext(Context);
  const history = useHistory();
  let param = useLocation();
  var name = param.pathname.slice(
    param.pathname.lastIndexOf("/") + 1,
    param.pathname.lastIndexOf("")
  );
  let [showMethod, setShowMethod] = useState(false);
  let [sort, setSort] = useState("up");
  let styleSort = "";
  let [listItem, setListItem] = useState([]);
  function changeMethod(method) {
    setShowMethod(!showMethod);
    setSort(method);
  }
  let item;
  useEffect(() => {
    async function getData() {
      try {
        const dataJson = await fetch(
          `https://apicsgo.herokuapp.com/category/weapon?name=${name}&sort=${sort}`
        );
        const data = await dataJson.json();
        setListItem(data);
          } catch (err) {
        history.push("/my404page");
        window.location.reload();
        console.log("err: " + err);
      }
    }
    getData();
  }, [sort,name,history]);
  if (sort === "up") {
    styleSort =
      '<span>Price <i className="fa fa-angle-up" aria-hidden="true"></i> </span>';
  } else if (sort === "down") {
    styleSort =
      '<span>Price <i className="fa fa-angle-down" aria-hidden="true"></i> </span>';
  } else styleSort = "<span> Name";
  function showMethodSort() {
    setShowMethod(!showMethod);
  }

  function addCart(e, item) {
    dispatch(addToCart(item));
    e.preventDefault();
  }
  item = listItem.map((item) => {
    let nameItem = item.name.slice(
      item.name.indexOf(" ") + 1,
      item.name.lastIndexOf("")
    );
    return (
      <div className=" col-5 col-4 col-2" key={item.name}>
        <div className=" product_item-skin hover">
          <div className="name">{name}</div>
          <div className="detailName">{nameItem}</div>
          <img src={item.image} alt={item.name} />
          <div className="price">{item.price} $</div>
          <button className="buy-btn" onClick={(e) => addCart(e, item)}>
            Thêm vào giỏ
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="categoryDetail">
      <div className="grid">
        <div className="navigationAndSort">
          <div className="navigation">
            <span>
              <Link to="/" style={{ fontWeight: "bold", fontSize: "2rem" }}>
                Home
              </Link>
            </span>
            <span>/ {name}</span>
          </div>

          <div className="sort">
            <div className="method" onClick={showMethodSort}>
              {Parser(styleSort)}
            </div>
            <div
              className="methodSort"
              style={{ display: showMethod ? "flex" : "none" }}
            >
              <span onClick={(e) => changeMethod("down")}>
                Price
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </span>

              <span onClick={(e) => changeMethod("name")}>Name</span>
              <span onClick={(e) => changeMethod("up")}>
                Price
                <i className="fa fa-angle-up" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="row">{item}</div>
      </div>
    </div>
  );
}

export default CategoryDetail;
