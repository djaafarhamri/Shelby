import { useState, useEffect } from "react";
import axios from "axios";
import "./Atable.css";
import AddVP from "./AddVP";

const ENDPOINT = "http://localhost:4000";

const Atable = () => {
  const [products, setProducts] = useState([]);
  const [code, setCode] = useState("");
  const [prixPay, setPrixPay] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    axios.get(`${ENDPOINT}/api/getVendre`)
      .then((res) => {setProducts(res.data)})
      .catch((err) => {console.log(err)})
    
  }, [])

  const valider = () => {
    for (let product of products) {
      axios
        .post(`${ENDPOINT}/api/updateTo24`, {
          id: product._id,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  };
  const returne = (product) => {
    axios
      .post(`${ENDPOINT}/api/return`, {
          product
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    axios
      .delete(`${ENDPOINT}/api/deleteCustomer/${product._id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="atable">
      {showAdd && (
        <AddVP
          code={code}
          setCode={setCode}
          setShowAdd={setShowAdd}
        />
      )}
      <h3 className="atable-name">Name</h3>
      <h3 className="atable-code">Ref</h3>
      <h3 className="atable-taille">Taille</h3>
      <h3 className="atable-prix">Prix</h3>
      <h3 className="atable-status">del</h3>
      {products &&
        products.map((product, index) => (
          <div key={index} className="all-products-admin">
            <p className="atable-name">{product.title}</p>
            <p className="atable-code">{product.ref}</p>
            <p className="atable-taille">{product.taille}</p>
            <p className="atable-prix">{product.price}</p>
            <button className="atable-status" onClick={() => {returne(product)}}>
              del
            </button>
          </div>
        ))}
      <div className="vendre-buttons">
        <button onClick={valider}>valider</button>
        <button
          onClick={() => {
            setShowAdd(true);
          }}
        >
          add
        </button>
      </div>
    </div>
  );
};

export default Atable;
