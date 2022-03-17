import { BACK_TO_TOP, CHECK_LOGIN, ADD_TO_CART, REMOVE_CART } from "./constant";
const initialSate = {
  pageYOffset: 0,
  isLoggedIn: false,
  username: null,
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};
function reducer(state, action) {
  let newState, newCart, isFound;
  switch (action.type) {
    case BACK_TO_TOP:
      newState = { ...state };
      newState.pageYOffset = action.payload;
      return newState;
    case CHECK_LOGIN:
      newState = { ...state };
      newState.isLoggedIn = action.payload.isLoggedIn;
      newState.username = action.payload.username;
      return newState;
    case ADD_TO_CART:
      newState = { ...state };
      newCart = [...state.cart];
      isFound = newCart.findIndex(
        (element, index) => element.name === action.payload.name
      );
      if (isFound === -1) {
        action.payload.amount = 1;
        newCart.push(action.payload);
      } else {
        newCart[isFound].amount = newCart[isFound].amount + 1;
      }
      newState.cart = newCart;
      localStorage.setItem("cart", JSON.stringify(newState.cart));
      return newState;
    case REMOVE_CART:
      newState = { ...state };
      newCart = [...state.cart];
      isFound = newCart.findIndex(
        (element, index) => element.name === action.payload.name
      );
      newCart.splice(isFound, 1);
      newState.cart = newCart;
      localStorage.setItem("cart", JSON.stringify(newState.cart));
      return newState;
    default:
      break;
  }
}
export default reducer;
export { initialSate };
