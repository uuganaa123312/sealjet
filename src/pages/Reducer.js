const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        userInfo: action.data,
        loggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        loggedIn: false,
      };
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
    case "SEARCH_VALUE":
      return {
        ...state,
        search_value: action.data,
      };
    case "CHANGE_CAT_ID":
      return {
        ...state,
        cat_id: action.data,
      };
    default:
      return state;
  }
};
export default Reducer;
