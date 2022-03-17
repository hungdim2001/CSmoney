const initialSate = {
  pageYOffset: 0,
};

const backToTopReducer = (state = initialSate, action) => {
  switch (action.type) {
    case "BACK_TO_TOP": {
      const newState = { ...state };
      newState.pageYOffset = action.payload;
      return newState;
    }
    default: {
      return state;
    }
  }
};
export default backToTopReducer;
