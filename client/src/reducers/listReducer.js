const listReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "REMOVE":
      return state.filter((item, index) => index !== action.payload);

    default:
      return state;
  }
};

export default listReducer;
