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

  const newClothes = clothes.reduce((total, current) => {
    if (!total[current.title]) {
      const { size, color, ...rest } = current;
      total[current.title] = rest;
      total[current.title].variants = [{ size, color }];
    } else {
      const { size, color } = current;
      total[current.title].variants.push({ size, color });
    }

    return total;
  }, {});

  const x = Object.values(newClothes);

  return (
    <div className="products">
      {x.map((item) => (
        <Product
          key={item._id}
          title={item.title}
          description={item.description}
          picture={item.picture}
          id={item._id}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Products;
