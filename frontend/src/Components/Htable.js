import "./Htable.css";
import { useState, useEffect } from "react";
import axios from "axios";

const ENDPOINT = "http://localhost:4000";

const Htable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/get24`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const returne = (product) => {
    axios
      .post(`${ENDPOINT}/api/return`, {
          product
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
    axios
      .delete(`${ENDPOINT}/api/deleteCustomer/${product._id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="htable">
      <h3 className="htable-name">Name</h3>
      <h3 className="htable-code">ref</h3>
      <h3 className="htable-prix_reste">prix reste</h3>
      <h3 className="htable-taille">phone</h3>
      <h3 className="htable-prix">adress</h3>
      {products &&
        products.map((product, index) => (
          <div key={index} className="h-admin">
            <p className="htable-name">{product.username}</p>
            <p className="htable-code">{product.ref}</p>
            <p className="htable-prix_reste">{product.prix_reste}</p>
            <p className="htable-taille">{product.phone}</p>
            <p className="htable-prix">{product.adress}</p>
          </div>
        ))}
    </div>
  );
};

export default Htable;
