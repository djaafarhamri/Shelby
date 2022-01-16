import Product from "./Product";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";
import Navbar from "./Navbar";
const ENDPOINT = "http://localhost:4000";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getAllProducts`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="products-page">
      <Navbar />

      <h1>Products</h1>
      <div className="products">
        {products &&
          products.map((product, index) => (
            <div key={index} className="products-map">
              <Product title={product.title} marque={product.marque} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
