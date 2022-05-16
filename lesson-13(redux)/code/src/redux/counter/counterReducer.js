const counterReducer = (state = 150, action) => {
  switch (action.type) {
    case "incrementAction":
      return state + action.payload;
    case "decrementAction":
      return state - action.payload;
    case "resetAction":
      return 100;
    default:
      return state;
  }
};

export default counterReducer;
