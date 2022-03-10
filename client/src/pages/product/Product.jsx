import React, { useContext, useEffect, useMemo, useState } from "react";
import { StoreContext } from "../../context/store";
import axios from "axios";
import "./product.css";
import { useParams } from "react-router-dom";

const Product = () => {
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { cartItems, setCartItems } = useContext(StoreContext);
  const [products, setProducts] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    getProduct();
  }, [size]);

  const getProduct = async () => {
    const res = await axios.get("/products/" + title);
    setProducts(res.data);
  };

  const incrementCount = () => {
    setQuantity(quantity + 1);
  };

  const decrementCount = () => {
    setQuantity(quantity - 1);
  };

  const handleColor = (e) => {
    setColor(e.target.id);
  };

  const handleOption = (e) => {
    setSize(e.target.value);
  };

  const onAdd = () => {
    if (!color) {
      alert("Select a Color Option");
      return;
    }
    if (!size) {
      alert("Select a Size Option");
      return;
    }

    const productToAdd = products.find(
      (p) => p.size === size && p.color === color
    );

    if (productToAdd) {
      const exist = cartItems.find((x) => x._id === productToAdd._id);

      if (exist) {
        setCartItems(
          cartItems.map((x) =>
            x._id === productToAdd._id
              ? {
                  ...x,
                  quantity: quantity,
                }
              : x
          )
        );
      } else {
        setCartItems([...cartItems, { ...productToAdd, quantity }]);
      }
    } else {
      alert("Oops product not available");
    }
  };

  const uniqueSizes = [
    ...new Map(products.map((item) => [item.size, item.size])).values(),
  ];

  const uniqueColors = useMemo(() => {
    return [
      ...new Map(products.map((item) => [item.color, item.color])).values(),
    ];
  }, [products]);

  useEffect(() => {
    if (uniqueColors.length > 0) {
      setColor(uniqueColors[0]);
    }
  }, [uniqueColors]);

  return products && products.length > 0 ? (
    <div className="product-list">
      <div className="wrapper">
        <div>
          <h1 className="title">{products[0].title}</h1>

          <img
            className="Img"
            src={
              color
                ? products.find((p) => p.color === color).picture
                : products[0].picture
            }
          />

          <p className="desc">{products[0].description}</p>
          <span className="price">Price: {products[0].price}$</span>
        </div>

        <div className="Filter-container">
          <div className="Filter">
            <span className="Filter-Title">Color</span>
            {uniqueColors.map((x, index) => (
              <div
                onClick={handleColor}
                key={index}
                style={{ backgroundColor: x }}
                className={`filter-color ${color === x ? "bordered" : ""}`}
                id={x}
              ></div>
            ))}
          </div>
        </div>
        <div onChange={handleOption} className="FilterSize">
          <select id="Size" className="size-select">
            <option>Size</option>
            {uniqueSizes.map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
        </div>

        <div className="AddContainer">
          <div className="AmountContainer">
            <i
              style={{ cursor: "pointer" }}
              onClick={decrementCount}
              className="fas fa-minus"
            ></i>
            <span className="Amount">{quantity}</span>
            <i
              style={{ cursor: "pointer" }}
              onClick={incrementCount}
              className="fas fa-plus"
            ></i>
            <button className="cart-btn" onClick={onAdd}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Product;
