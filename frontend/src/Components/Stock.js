import { useEffect, useState } from "react";
import axios from "axios";
import "./Stock.css";
import AddProductPage from "./AddProductPage";

const ENDPOINT = "http://localhost:4000";

const Stock = () => {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState("m");
  const [render, setRender] = useState(false);
  
  const del = (product) => {
    axios.delete(`${ENDPOINT}/api/deleteProduct/${product._id}`, {withCredentials: true})
      .then((res) => {console.log(res.data)})
      .catch((err) => {console.log(err)})
    setRender(!false)
  }
  
  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getAllProducts`, {withCredentials:true})
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, [render]);
  return (
    <>
      {selected === "m" && (
        <div className="stock">
          <div className="stock-search">
            <input type="text" placeholder="Search here" />
          </div>
          <button
            className="ajouter-btn"
            onClick={() => {
              setSelected("a");
            }}
          >
            ajouter
          </button>
          <div className="table">
            <h2>All Products</h2>
            <div className="stock-table">
              <h3 className="stock-name">Name</h3>
              <h3 className="stock-ref">Ref</h3>
              <h3 className="stock-taille">Taille</h3>
              <h3 className="stock-color">Color</h3>
              <h3 className="stock-quantity">Quantity</h3>
              <h3 className="stock-prix">Prix</h3>
              <h3 className="stock-del">Delete</h3>
              {products &&
                products.map((product, index) => (
                  <div key={index} className="stock-admin">
                    <p className="stock-name">{product.title}</p>
                    <p className="stock-ref">{product.ref}</p>
                    <p className="stock-taille">{product.taille}</p>
                    <div style={{backgroundColor: product.color, height: '40px', width: '40px', border: '2px solid'}} className="stock-color"></div>
                    <p className="stock-quantity">{product.quantity}</p>
                    <p className="stock-prix">{product.price}</p>
                    <button 
                      className="stock-del"
                      onClick={() => {del(product)}}
                      >
                        del
                        </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
      {selected === "a" && <AddProductPage setSelected={setSelected} />}
    </>
  );
};

export default Stock;
