const initialSate = {
  isLoggedIn: false,
  username: null,
};

const LoggedReducer = (state = initialSate, action) => {
  switch (action.type) {
    case "LOG_IN": {
      const newState = { ...state };
      newState.isLoggedIn = action.payload.isLoggedIn;
      newState.username = action.payload.username;
      console.log(newState);
      return newState;
    }
    default: {
      return state;
    }
  }
};
export default LoggedReducer;
