const Reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_HEADER":
      return {
        ...state,
        header: action.data,
      };
    case "CHANGE_SIDEBAR":
      return {
        ...state,
        sidebar: action.data,
      };
    case "CHANGE_TOGGLE":
      return {
        ...state,
        toggle: action.data,
      };

    default:
      return state;
  }
};
export default Reducer;
