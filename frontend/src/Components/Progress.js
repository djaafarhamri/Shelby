import "./Progress.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ShowProducts from "./ShowProducts";

const ENDPOINT = "https://shelby-tau.vercel.app";

const Progress = ({setRender, search}) => {
  const [products, setProducts] = useState([]);
  const [prod, setProd] = useState([]);
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getProgress`, { withCredentials: true })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  
  return (
    <>
      {showProducts && (
        <ShowProducts cid={prod.cid} setShowProducts={setShowProducts} />
      )}
      <div className="rtable">
        <h3 className="rtable-name">Name</h3>
        <h3 className="rtable-code">phone</h3>
        <h3 className="rtable-prix_reste">adress</h3>
        <h3 className="rtable-taille">livraison</h3>
        <h3 className="rtable-option">option</h3>
        {products &&
          products.map((product, index) => (
            <div key={index} className="progress-admin">
              <p className="rtable-name">{product.client}</p>
              <p className="rtable-code">{product.phone}</p>
              <p className="rtable-prix_reste">{product.adress}</p>
              <p className="rtable-taille">{product.livraison}</p>
              <button
                className="rtable-option"
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
