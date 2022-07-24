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
    case "CHANGE_PRODUCT_ID":
      return {
        ...state,
        product_id: action.data,
      };
    case "CHANGE_TEMP_NAME":
      return {
        ...state,
        temp_name: action.data,
        temp_refresh: state.temp_refresh + 1,
      };
    case "CHANGE_TEMP_LIST":
      return {
        ...state,
        temp_list: action.data,
      };
    case "CHANGE_MODAL_TYPE":
      return {
        ...state,
        modal_type: action.data,
      };
    case "CHANGE_TEMP_REFRESH":
      return {
        ...state,
        temp_refresh: action.data,
      };
    case "CHANGE_MATERIAL_TYPE":
      return {
        ...state,
        material_type: action.data,
      };
    case "TEMP_CLEAR":
      return {
        ...state,
        modal_type: undefined,
        product_id: "0",
        temp_name: "",
        temp_list: [],
        temp_refresh: 1,
        material_type: "0",
      };
    default:
      return state;
  }
};
export default Reducer;
