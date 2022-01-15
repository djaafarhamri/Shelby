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
      <h3 className="atable-name">Name</h3>
      <h3 className="atable-code">Code</h3>
      <h3 className="atable-taille">Taille</h3>
      <h3 className="atable-prix">Prix</h3>
      <h3 className="atable-status">Status</h3>
      {products &&
        products.map((product, index) => (
          <div key={index} className="all-products-admin">
              <p className="atable-name">{product.title}</p>
              <p className="atable-code">{product.codeBar}</p>
              <p className="atable-taille">{product.taille}</p>
              <p className="atable-prix">{product.price}</p>
              <p className="atable-status">{product.state}</p>
          </div>
        ))}
    </div>
  );
};

export default Atable;
