import { BACK_TO_TOP, CHECK_LOGIN, ADD_TO_CART, REMOVE_CART } from "./constant";

export const backToTop = (pageYOffset) => {
  return {
    type: BACK_TO_TOP,
    payload: pageYOffset,
  };
};

export const checkLogin = (isLoggedIn) => {
  return {
    type: CHECK_LOGIN,
    payload: isLoggedIn,
  };
};

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};
export const removeCart = (data) => {
  return {
    type: REMOVE_CART,
    payload: data,
  };
};
