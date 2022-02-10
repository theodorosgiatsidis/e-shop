import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";
import Newsletter from "../../components/newsletter/Newsletter";
import { StoreContext } from "../../context/store";
import "./product.css";

const Product = () => {
  const { clothes, setClothes } = useContext(StoreContext);
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const res = clothes.find((c) => c._id === id);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="product-list">
      <NavBar />
      <div className="wrapper">
        <div className="Image">
          <img className="Img" src={res.picture} alt="" />
        </div>
        <div className="Info-Container">
          <h1 className="title">{res.title}</h1>
          <p className="desc">{res.description}</p>
          <span className="price">Price: {res.price}$</span>
        </div>
        <div className="Filter-container">
          <div className="Filter">
            <span className="Filter-Title">Color</span>
            <div
              style={{ backgroundColor: "black" }}
              className="filter-color"
            ></div>
            <div
              style={{ backgroundColor: "darkblue" }}
              className="filter-color"
            ></div>
            <div
              style={{ backgroundColor: "gray" }}
              className="filter-color"
            ></div>
          </div>
        </div>
        <div className="FilterSize">
          <select className="size-select">
            <option disabled selected>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
        </div>

        <div className="AddContainer">
          <div className="AmountContainer">
            <i
              style={{ cursor: "pointer" }}
              onClick={decrementCount}
              class="fas fa-minus"
            ></i>
            <span className="Amount">{count}</span>
            <i
              style={{ cursor: "pointer" }}
              onClick={incrementCount}
              class="fas fa-plus"
            ></i>
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
