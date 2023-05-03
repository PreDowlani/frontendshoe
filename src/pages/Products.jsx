import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Products = () => {
  const [shoes, setShoes] = useState([]);

  //we use the useefect to get all the productos from the backend and show it in the frontend though axios get.
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND + "/api/productos")
      .then((response) => {
        setShoes(response.data);
      })
      .catch((error) => {
        setShoes(error.response.data);
      });
  }, []);

  return (
    <div className="map-productos">
      {shoes.map((product) => {
        return (
          <div className="products-container">
            <div className="product-image">
              <image src={product.image} alt="nike" />
            </div>
            <div className="product-details">
              <h1>{product.id}</h1>
              <h1>{product.nombre}</h1>
              <h2>{product.marca}</h2>
              <p>{product.categoria}</p>
              <p className="precio"> €{product.precio}</p>
              <button className="button">Añadir al carrito</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
