import "./Htable.css";
import { useState, useEffect } from "react";
import axios from "axios";

const ENDPOINT = "http://localhost:4000";

const Htable = () => {
  const [products, setProducts] = useState([]);
  const [render, setRender] = useState(false);

  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/get24`, {withCredentials:true})
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, [render]);
  const returne = (product) => {
    axios
      .post(`${ENDPOINT}/api/returne`, {
          product
      }, {withCredentials:true})
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
      axios
      .delete(`${ENDPOINT}/api/deleteCustomer/${product.client_id}`, {withCredentials:true})
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
      axios
      .delete(`${ENDPOINT}/api/deleteSold/${product.client_id}`, {withCredentials:true})
      .then((res) => {
        console.log(res.data);
      }, {withCredentials:true})
      .catch((err) => console.log(err));
    setRender(!render)
  };
  return (
    <div className="htable">
      <h3 className="htable-name">Name</h3>
      <h3 className="htable-code">ref</h3>
      <h3 className="htable-taille">phone</h3>
      <h3 className="htable-prix">adress</h3>
      <h3 className="htable-prix_reste">returne</h3>
      {products &&
        products.map((product, index) => (
          <div key={index} className="h-admin">
            <p className="htable-name">{product.name}</p>
            <p className="htable-code">{product.ref}</p>
            <p className="htable-taille">{product.taille}</p>
            <p className="htable-prix">{product.price}</p>
            <button className="htable-prix_reste" onClick={() => {
              returne(product)
            }}>returne</button>
          </div>
        ))}
    </div>
  );
};

export default Htable;
