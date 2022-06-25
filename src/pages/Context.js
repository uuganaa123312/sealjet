import React, { useContext, useReducer } from "react";
import Reducer from "../pages/Reducer";

const Context = React.createContext();

const initialState = {
  header: false,
  sidebar: false,
  toggle: false,
  search_value: "",
  cat_id: 0,
  productList: [],
};

export const useSealState = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useState нь ContextProvider дотор ашиглагдах ёстой.");
  }
  return context;
};

const ContextProvider = ({ children }) => {
  const [state, setState] = useReducer(Reducer, initialState);

  return (
    <Context.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default React.memo(ContextProvider);
