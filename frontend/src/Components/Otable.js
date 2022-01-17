import "./Otable.css";
import { useState, useEffect } from "react";
import axios from "axios";

const ENDPOINT = "http://localhost:4000";

const Otable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getPending`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const valider = (ref) => {
    axios
      .get(`${ENDPOINT}/api/updateTo24/${ref}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  };

  const returne = (ref, taille) => {
    axios
      .post(`${ENDPOINT}/api/return`, {
          ref,
          taille
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
    axios
      .delete(`${ENDPOINT}/api/deleteCustomer/${ref}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="otable">
      <h3 className="otable-name">Name</h3>
      <h3 className="otable-code">ref</h3>
      <h3 className="otable-taille">phone</h3>
      <h3 className="otable-prix">adress</h3>
      <h3 className="otable-option">option</h3>
      {products &&
        products.map((product, index) => (
          <div key={index} className="on-admin">
            <p className="otable-name">{product.username}</p>
            <p className="otable-code">{product.ref}</p>
            <p className="otable-taille">{product.phone}</p>
            <p className="otable-prix">{product.adress}</p>
            <div className="otable-option">
              <button
                onClick={() => {
                  valider(product.ref);
                }}
              >
                valider
              </button>
              <button
                onClick={() => {
                  returne(product.ref, product.taille);
                }}
              >
                return
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Otable;
