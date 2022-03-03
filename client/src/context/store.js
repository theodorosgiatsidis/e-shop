import React, { useState, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const StoreContext = React.createContext({
  clothes: [],
  ...INITIAL_STATE,
});

export const StoreContextProvider = (props) => {
  const [clothes, setClothes] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  const [favouriteProducts, setFavouriteProducts] = useState([]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <StoreContext.Provider
      value={{
        clothes,
        setClothes,
        cartItems,
        setCartItems,
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
        favouriteProducts,
        setFavouriteProducts,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
