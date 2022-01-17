import "./Ptable.css";
import { useState, useEffect } from "react";
import axios from "axios";

const ENDPOINT = "http://localhost:4000";

const Ptable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getPending`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const getByref = (ref) => {
    axios
      .get(`${ENDPOINT}/api/getProductByref/${ref}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  };

  const valider = (ref) => {
    axios
      .get(`${ENDPOINT}/api/updateTo24/${ref}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="ptable">
      <h3 className="ptable-name">Name</h3>
      <h3 className="ptable-code">ref</h3>
      <h3 className="ptable-prix_reste">prix reste</h3>
      <h3 className="ptable-taille">phone</h3>
      <h3 className="ptable-prix">adress</h3>
      <h3 className="ptable-option">option</h3>
      {products &&
        products.map((product, index) => (
          <div key={index} className="pending-admin">
            <p className="ptable-name">{product.username}</p>
            <p className="ptable-code">{product.ref}</p>
            <p className="ptable-prix_reste">{product.prix_reste}</p>
            <p className="ptable-taille">{product.phone}</p>
            <p className="ptable-prix">{product.adress}</p>
            <button className="ptable-option" onClick={() => {
              valider(product.ref)
            }}>valider</button>
          </div>
        ))}
    </div>
  );
};

export default Ptable;
