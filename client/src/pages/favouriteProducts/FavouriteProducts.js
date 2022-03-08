import React, { useContext } from "react";
import { StoreContext } from "../../context/store";
import Product from "../../components/product/Product";
import "./favouriteProducts.css";

function FavouriteProducts() {
  const { favouriteProducts } = useContext(StoreContext);

  return (
    <div className="fav-products">
      <h1>My Favourite Products</h1>
      <div className="products">
        {favouriteProducts.map((product, index) => (
          <div className="map-products" key={index}>
            <Product
              title={product.title}
              description={product.description}
              picture={product.picture}
              id={product._id}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavouriteProducts;
