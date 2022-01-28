import "./Ptable.css";
import { useState, useEffect } from "react";
import axios from "axios";

const ENDPOINT = "https://shelbyboutique.herokuapp.com";

const Ptable = ({search}) => {
  const [products, setProducts] = useState([]);
  const [render, setRender] = useState(false);

  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getPending`, {withCredentials:true})
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, [render]);

  const valider = (_id) => {
    axios
      .post(`${ENDPOINT}/api/updateTo24`, {
        _id,
        status: "24",
      }, {withCredentials:true})
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
    axios
      .post(`${ENDPOINT}/api/addSold`, {
        customer_id: _id,
      }, {withCredentials:true})
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
      setRender(!render)
  };
  return (
    <div className="ptable">
      <h3 className="ptable-name">Name</h3>
      <h3 className="ptable-code">ref</h3>
      <h3 className="ptable-prix_reste">prix reste</h3>
      <h3 className="ptable-taille">phone</h3>
      <h3 className="ptable-option">option</h3>
      {products &&
        products.map((product, index) => (
          <div key={index} className="pending-admin">
            <p className="ptable-name">{product.username}</p>
            <p className="ptable-code">{product.ref}</p>
            <p className="ptable-prix_reste">{product.prix_reste}</p>
            <p className="ptable-taille">{product.phone}</p>
            <button
              className="ptable-option"
              onClick={() => {
                valider(product._id);
              }}
            >
              valider
            </button>
          </div>
        ))}
    </div>
  );
};

export default Ptable;
