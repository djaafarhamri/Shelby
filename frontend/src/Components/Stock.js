import { useEffect, useState } from "react";
import axios from "axios";
import './Stock.css'

const ENDPOINT = "http://localhost:4000";

const Stock = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getAllProducts`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="stock">
      <div className="stock-search">
        <input type="text" placeholder="Search here" />
      </div>
      <div className="table">
        <h2>All Products</h2>
        <div className="stock-table">
          <h3 className="stock-name">Name</h3>
          <h3 className="stock-ref">Ref</h3>
          <h3 className="stock-taille">Taille</h3>
          <h3 className="stock-quantity">Quantity</h3>
          <h3 className="stock-prix">Prix</h3>
          {products &&
            products.map((product, index) => (
              <div key={index} className="stock-admin">
                <p className="stock-name">{product.username}</p>
                <p className="stock-ref">{product.ref}</p>
                <p className="stock-taille">{product.taille}</p>
                <p className="stock-quantity">{product.quantity}</p>
                <p className="stock-prix">{product.price}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Stock;
