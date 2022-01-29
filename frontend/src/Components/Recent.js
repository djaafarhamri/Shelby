import { useState, useEffect } from "react";
import axios from "axios";
import "./Recent.css";

const ENDPOINT = "https://shelby-tau.vercel.app";

const Recent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      axios.get(`${ENDPOINT}/api/getTodaysSolds`, {withCredentials:true})
      .then((res) => {setProducts(res.data)})
      .catch(err => {console.log(err)})
  }, [])
 
  return (
    <div className="recent">
      <h3 className="recent-name">Name</h3>
      <h3 className="recent-ref">Ref</h3>
      <h3 className="recent-taille">Taille</h3>
      <h3 className="recent-price">Prix</h3>
      <h3 className="recent-profit">Profit</h3>
      {products &&
        products.map((product, index) => (
            <div key={index} className="recent-admin">
            <p className="recent-name">{product.name}</p>
            <p className="recent-code">{product.ref}</p>
              <p className="recent-taille">{product.taille}</p>
            <p className="recent-price">{product.price}</p>
            <p className="recent-profit">{product.profit}</p>
          </div>
        ))}
    </div>
  );
};

export default Recent;
