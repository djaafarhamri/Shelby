import { useState, useEffect } from "react";
import axios from "axios";
import "./Atable.css";
import AddVP from "./AddVP";

const ENDPOINT = "http://localhost:4000";

const Atable = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState();
  const [code, setCode] = useState("");
  const [prixPay, setPrixPay] = useState([]);
  const [taille, setTaille] = useState([]);
  const [status, setStatus] = useState("");
  const [showAdd, setShowAdd] = useState(false);

  const valider = () => {
    for (let product in products) {
      axios
        .post(`${ENDPOINT}/api/addCustomer`, {
          username: "client",
          phone: 1000000000,
          adress: "vide",
          ref: product.ref,
          prix_reste: product.prix - prixPay,
          taille,
          status,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

 

  return (
    <div className="atable">

      <button
        onClick={() => {
          setShowAdd(true);
        }}
        className="add-product"
      >
        add
      </button>
      {showAdd && (
        <AddVP
          code={code}
          setCode={setCode}
          setShowAdd={setShowAdd}
          setProduct={setProduct}
          setProducts={setProducts}
          product={product}
          taille={taille}
          setTaille={setTaille}
          setPrixPay={setPrixPay}
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
            <p className="atable-taille">{taille}</p>
            <p className="atable-prix">prix</p>
            <button className="atable-status" onClick={() => {}}>
              del
            </button>
          </div>
        ))}
      <div className="vendre-buttons">
        <button onClick={valider}>valider</button>
      </div>
    </div>
  );
};

export default Atable;
