import { useState, useEffect } from "react";
import axios from "axios";
import "./Atable.css";
import BarcodeReader from 'react-barcode-reader'

const ENDPOINT = "http://localhost:4000";

const Atable = () => {
  const [products, setProducts] = useState([]);
  const [code, setCode] = useState("");
  const [prixPay, setPrixPay] = useState(0);
  const [taille, setTaille] = useState('');
  const [status, setStatus] = useState('');
  

  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getProductByCode/${code}`)
      .then((res) => {
        res.data && setProducts((old) => [...old, res.data]);
      })
      .catch((err) => console.log(err));
  }, [code]);

  const valider = () => {
    for (let product in products){
      axios
      .get(`${ENDPOINT}/api/addCustomer`, {
        username: 'client',
        phone: 1000000000,
        adress: 'vide',
        ref: product.ref,
        prix_reste: product.prix - prixPay,
        taille,
        status,
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => console.log(err));
    }
  }

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
            <input type="text" className="atable-taille" />
            <input type="text" className="atable-prix" value={product.price} />
            <button className="atable-status" onClick={() => {}}>
              del
            </button>
          </div>
        ))}
        <div className="vendre-buttons">
          <button onClick={() => {
            setProducts([])
          }}>anuuler</button>
          <button onClick={valider}>valider</button>
        </div>
    </div>
  );
};

export default Atable;
