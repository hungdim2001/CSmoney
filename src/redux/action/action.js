export const backToTop = (pageYOffset) => {
  return {
    type: "BACK_TO_TOP",
    payload: pageYOffset,
  };
};
export const isLoggedIn = (payload) => {
  return {
    type: "LOG_IN",
    payload: payload,
  };
};
