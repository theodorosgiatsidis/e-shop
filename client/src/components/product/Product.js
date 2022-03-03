import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { StoreContext } from "../../context/store";
import "./product.css";

function Product(props) {
  const history = useHistory();
  const { favouriteProducts, setFavouriteProducts } = useContext(StoreContext);
  const { clothes } = useContext(StoreContext);

  const handleClick = () => {
    history.push(`/products/${props.title}`);
  };

  const addToFavorite = (id) => {
    const favouriteProduct = clothes.find((c) => c._id === id);

    setFavouriteProducts([...favouriteProducts, favouriteProduct]);
  };

  const onRemoveFavourite = (id) => {
    const filteredList = favouriteProducts.filter((c) => c._id !== id);
    setFavouriteProducts(filteredList);
  };

  const ifExists = (id) => {
    return favouriteProducts.some((item) => item._id == id);
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
            <i
              style={{ color: "red" }}
              onClick={() =>
                ifExists(props.id)
                  ? onRemoveFavourite(props.id)
                  : addToFavorite(props.id)
              }
              className={ifExists(props.id) ? "fa fa-heart" : "far fa-heart"}
            ></i>
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
