import React from "react";
import "./CartDetail.css";
import empty from "../../../../img/empty-cart.png";
import Context from "../../../../store/Context";
import { useContext } from "react";
import { removeCart } from "../../../../store/action";
function CartDetail(props) {
  const [state, dispatch] = useContext(Context);
  function removeItem(item) {
    dispatch(removeCart(item));
  }

  let Cart;
  if (props.numberOfProduct === 0) {
    Cart = <img src={empty} alt={empty} />;
  } else {
    Cart = state.cart.map((item, index) => {
      return (
        <div className="detailItem" key={item.name}>
          <img
            className="imgCart"
            alt={item.name}
            src={item.image}
            style={{ width: "20%" }}
          />
          <div
            className="itemCart"
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "20px",
            }}
          >
            {item.name}

            <div
              className="amount"
              style={{
                display: item.amount !== 1 ? "block " : "none",
                color: "red",
                marginLeft: "10px",
              }}
            >
              x{item.amount}
            </div>
          </div>{" "}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
             style={{ color: "#fff", marginLeft: "10px" }}
            onClick={() => {
              removeItem(item);
            }}
          </svg> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            style={{ color: "#fff", width: "1.6rem" }}
            onClick={() => {
              removeItem(item);
            }}
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      );
    });
  }

  return <div className="cartDetail">{Cart}</div>;
}

export default CartDetail;
