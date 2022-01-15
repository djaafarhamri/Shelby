import './Ptable.css'
import { useState, useEffect } from "react";
import axios from "axios";

const ENDPOINT = "http://localhost:4000";

const Ptable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getAllPendingProducts`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="ptable">
      <h3 className="ptable-name">Name</h3>
      <h3 className="ptable-code">Code</h3>
      <h3 className="ptable-taille">Taille</h3>
      <h3 className="ptable-prix">Prix Reste</h3>
      <h3 className="ptable-status">Status</h3>
      {products &&
        products.map((product, index) => (
          <div key={index} className="pending-admin">
              <p className="ptable-name">{product.title}</p>
              <p className="ptable-code">{product.codeBar}</p>
              <p className="ptable-taille">{product.taille}</p>
              <p className="ptable-prix">{product.price}</p>
              <p className="ptable-status">{product.state}</p>
          </div>
        ))}
    </div>
  );
};

export default Ptable;
