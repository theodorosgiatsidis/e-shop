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
  const itemsPrice = cartItems.reduce((a, c) => a + c.quantity * c.price, 0);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart-items"));
    if (cartItems) {
      setCartItems(cartItems);
    }
  }, []);

  useEffect(() => {
    const favouriteProducts = JSON.parse(localStorage.getItem("fav-products"));
    if (favouriteProducts) {
      setFavouriteProducts(favouriteProducts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart-items", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("fav-products", JSON.stringify(favouriteProducts));
  }, [favouriteProducts]);

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
        itemsPrice,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
