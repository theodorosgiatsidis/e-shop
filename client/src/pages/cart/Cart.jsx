import React from "react";
import NavBar from "../../components/navbar/NavBar";
import "./cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <NavBar />
      <div className="cartWrapper">
        <h1 className="cart-title">Your Bag</h1>
        <div className="cartTop">
          <button className="TopButton">Continue Shopping</button>
          <span>Shopping Bag</span>
          <span>Your Wishlist</span>
          <button style={{ backgroundColor: "black", color: "white" }}>
            CHECKOUT NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
