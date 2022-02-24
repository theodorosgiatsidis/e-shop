import React from "react";
import Products from "../../components/products/Products";
import "./productlist.css";

const ProductList = () => {
  return (
    // <div className="product-list">
    //   <div className="Title">
    //     <h1>Dresses</h1>
    //   </div>
    //   <div className="filter-container">
    //     <div className="filter">
    //       <div className="filterText">Filter Products:</div>

    //       <select>
    //         <option disabled>Color</option>
    //         <option>White</option>
    //         <option>Black</option>
    //         <option>Red</option>
    //         <option>Blue</option>
    //         <option>Yellow</option>
    //         <option>Green</option>
    //       </select>
    //       <select>
    //         <option disabled>Size</option>
    //         <option>XS</option>
    //         <option>S</option>
    //         <option>M</option>
    //         <option>L</option>
    //         <option>XL</option>
    //         <option>XXL</option>
    //       </select>
    //     </div>

    //     <div className="filter">
    //       Sort Products:
    //       <select>
    //         <option disabled>Newest</option>
    //         <option>Price (asc)</option>
    //         <option>Price (desc)</option>
    //       </select>
    //     </div>
    //   </div>
    <div className="products">
      <Products />
    </div>
  );
};

export default ProductList;
