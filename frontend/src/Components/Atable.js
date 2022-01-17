import { useState, useEffect } from "react";
import axios from "axios";
import "./Atable.css";
import BarcodeReader from 'react-barcode-reader'

const ENDPOINT = "http://localhost:4000";

const Atable = () => {
  const [products, setProducts] = useState([]);
  const [code, setCode] = useState("");
  

  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getProductByCode/${code}`)
      .then((res) => {
        res.data && setProducts((old) => [...old, res.data]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="atable">
      <BarcodeReader
          onError={() => {alert('error')}}
          onScan={(e) => setCode(e)}
          />
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
            <button className="atable-status" onClick={() => {}}>
              del
            </button>
          </div>
        ))}
    </div>
  );
};

export default Atable;
