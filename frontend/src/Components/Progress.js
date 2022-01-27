import "./Ptable.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ShowProducts from "./ShowProducts";

const ENDPOINT = "http://localhost:4000";

const Progress = ({search}) => {
  const [products, setProducts] = useState([]);
  const [prod, setProd] = useState([]);
  const [showProducts, setShowProducts] = useState(false);
  const [render, setRender] = useState(false);

  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getProgress`, { withCredentials: true })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, [render]);

  
  return (
    <>
      {showProducts && (
        <ShowProducts cid={prod.cid} setShowProducts={setShowProducts} />
      )}
      <div className="ptable">
        <h3 className="ptable-name">Name</h3>
        <h3 className="ptable-code">ref</h3>
        <h3 className="ptable-prix_reste">taille</h3>
        <h3 className="ptable-taille">livraison</h3>
        <h3 className="ptable-option">option</h3>
        {products &&
          products.map((product, index) => (
            <div key={index} className="pending-admin">
              <p className="ptable-name">{product.client}</p>
              <p className="ptable-code">{product.phone}</p>
              <p className="ptable-prix_reste">{product.adress}</p>
              <p className="ptable-taille">{product.livraison}</p>
              <button
                className="ptable-option"
                onClick={() => {
                  setProd(product);
                  setShowProducts(true);
                  // valider(product);
                }}
              >
                valider
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Progress;
