import React, { useContext, useEffect } from "react";
import { StoreContext } from "../../context/store";
import Product from "../product/Product";
import axios from "axios";
import "./products.css";

const Products = () => {
  const { clothes, setClothes } = useContext(StoreContext);

  useEffect(() => {
    getClothes();
  }, []);

  const getClothes = async () => {
    const res = await axios.get("/products");
    setClothes(res.data);
  };

  return (
    <div className="products">
      {clothes.map((c) => (
        <Product
          key={c._id}
          title={c.title}
          description={c.description}
          picture={c.picture}
          id={c._id}
          price={c.price}
        />
      ))}
    </div>
  );
};

export default Products;
