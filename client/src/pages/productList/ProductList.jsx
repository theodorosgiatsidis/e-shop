import React from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";
import Newsletter from "../../components/newsletter/Newsletter";
import Products from "../../components/products/Products";
import "./productlist.css";

const ProductList = () => {
  return (
    <div className="product-list">
      <NavBar />
      <div className="Title">
        <h1>Dresses</h1>
      </div>
      <div className="filter-container">
        <div className="filter">
          <div className="filterText">Filter Products:</div>

          <select>
            <option disabled selected>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select>
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

        <div className="filter">
          Sort Products:
          <select>
            <option disabled selected>
              Newest
            </option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>
      <div className="products">
        <Products />
      </div>
      <div className="newsletter">
        <Newsletter />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ProductList;
