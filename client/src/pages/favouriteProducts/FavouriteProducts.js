import React, { useContext } from "react";
import { StoreContext } from "../../context/store";
import Product from "../../components/product/Product";

function FavouriteProducts() {
  const { favouriteProducts } = useContext(StoreContext);

  return (
    <div className="fav-products">
      <h1>Favourite Products</h1>
      {favouriteProducts.map((product, index) => (
        <div key={index}>
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
  );
}

export default FavouriteProducts;
