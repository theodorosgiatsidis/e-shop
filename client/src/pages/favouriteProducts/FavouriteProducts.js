import React, { useContext } from "react";
import { StoreContext } from "../../context/store";

function FavouriteProducts() {
  const { favouriteProducts } = useContext(StoreContext);

  return (
    <div className="fav-products">
      <h1>Favourite Products</h1>
      {favouriteProducts.map((product, index) => (
        <div key={index}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <img src={product.picture} />
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default FavouriteProducts;
