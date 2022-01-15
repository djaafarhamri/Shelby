import { useState, useEffect } from "react";
import axios from "axios";
import "./Atable.css";

const ENDPOINT = "http://localhost:4000";

const Atable = () => {
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
    <div className="atable">
      <h3 className="name">Name</h3>
      <h3 className="code">Code</h3>
      <h3 className="prix">Prix</h3>
      <h3 className="status">Status</h3>
      {products &&
        products.map((product, index) => (
          <div key={index} className="all-products-admin">
              <p className="name">{product.title}</p>
              <p className="code">{product.codeBar}</p>
              <p className="prix">{product.price}</p>
              <p className="status">{product.state}</p>
          </div>
        ))}
    </div>
  );
};

export default Atable;
