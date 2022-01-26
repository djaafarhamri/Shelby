import "./Ptable.css";
import { useState, useEffect } from "react";
import axios from "axios";

const ENDPOINT = "http://localhost:4000";

const Progress = () => {
  const [products, setProducts] = useState([]);
  const [render, setRender] = useState(false);

  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getProgress`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, [render]);

  const valider = (_id) => {
    axios
      .post(`${ENDPOINT}/api/updateToDelivery`, {
        _id,
        status: "delivery",
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));

    setRender(!render)
  };
  return (
    <div className="ptable">
      <h3 className="ptable-name">Name</h3>
      <h3 className="ptable-code">ref</h3>
      <h3 className="ptable-prix_reste">taille</h3>
      <h3 className="ptable-taille">color</h3>
      <h3 className="ptable-option">option</h3>
      {products &&
        products.map((product, index) => (
          <div key={index} className="pending-admin">
            <p className="ptable-name">{product.name}</p>
            <p className="ptable-code">{product.ref}</p>
            <p className="ptable-prix_reste">{product.taille}</p>
            <div style={{backgroundColor: product.color, height: '40px', width: '40px', border: '2px solid'}} className="ptable-taille"></div>
            <button
              className="ptable-option"
              onClick={() => {
                valider(product.client_id);
              }}
            >
              valider
            </button>
          </div>
        ))}
    </div>
  );
};

export default Progress;
