import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/store";
import Product from "../product/Product";
import axios from "axios";
import "./products.css";

const Products = () => {
  const { clothes, setClothes } = useContext(StoreContext);
  const [page, setPage] = useState(1);
  const [limit] = useState(11);

  useEffect(() => {
    getClothes();
  }, [page]);

  const getClothes = async () => {
    const res = await axios.get(`/products?page=${page}&limit=${limit}`);
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

  const prevClick = () => {
    setPage(page - 1);
  };

  const nextClick = () => {
    setPage(page + 1);
  };

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
      {page > 1 && (
        <button onClick={prevClick} className="prev-button">
          Previous
        </button>
      )}
      {page < 3 && (
        <button onClick={nextClick} className="next-button">
          Next
        </button>
      )}
    </div>
  );
};

export default Products;
