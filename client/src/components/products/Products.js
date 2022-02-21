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

  const newClothes = clothes.reduce((acc, current) => {
    if (!acc[current.title]) {
      const { size, color, ...rest } = current;
      acc[current.title] = rest;
      acc[current.title].variants = [{ size, color }];
    } else {
      const { size, color } = current;
      acc[current.title].variants.push({ size, color });
    }

    return acc;
  }, {});

  const x = Object.values(newClothes);

  // console.log(arrayUniqueByKey);

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
