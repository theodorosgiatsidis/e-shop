import React, { useContext } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "./product.css";

function Product(props) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/products/${props.title}`);
  };

  return (
    <div className="product">
      <div className="Wrapper">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <img src={props.picture} alt="" />
        <div className="info">
          <div className="p-icon">
            <i onClick={handleClick} className="fas fa-shopping-cart"></i>
          </div>
          <div className="p-icon">
            <i className="fas fa-search"></i>
          </div>
          <div className="p-icon">
            <i className="far fa-heart"></i>
          </div>
        </div>
        <div className="price">
          <span>Price: {props.price}$</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
