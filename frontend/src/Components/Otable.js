import "./Otable.css";
import { useState, useEffect } from "react";
import axios from "axios";
import valid from "../assets/valid.png";
import nonValid from "../assets/nonValid.png";

const ENDPOINT = "http://localhost:4000";

const Otable = () => {
  const [products, setProducts] = useState([]);
  const [showValid, setShowValid] = useState(false);
  const [client, setClient] = useState();
  const [render, setRender] = useState(false);

  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getDelivery`, {withCredentials: true})
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, [render]);

  const valider = (id) => {
    axios
      .post(`${ENDPOINT}/api/updateTo24`, {
        _id: id,
        status: "24",
      }, {withCredentials:true})
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
    axios
      .post(`${ENDPOINT}/api/addSold`, {
        customer_id: id,
      }, {withCredentials:true})
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  const returne = (product) => {
    axios
      .post(`${ENDPOINT}/api/returnD`, {
        product,
      }, {withCredentials:true})
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
    axios
      .delete(`${ENDPOINT}/api/deleteCustomer/${product.client_id}`, {withCredentials:true})
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
    axios
      .delete(`${ENDPOINT}/api/deleteSold/${product._id}`, {withCredentials:true})
      .then((res) => {
        return res.data;
      }, {withCredentials:true})
      .catch((err) => console.log(err));
    setRender(!render)
  };
  return (
    <div className="otable">
      {showValid && (
        <div className="showValid">
          <h4>client: {client.client}</h4>
          <h4>adress: {client.adress}</h4>
          <h4>phone: {client.phone}</h4>
          <button
            className="d-data-deliver"
            onClick={() => {
              valider(client.client_id);
              setRender(!render)
            }}
          >
            valider
          </button>
          <button
            className="d-data-annuler"
            onClick={() => {
              setShowValid(false);
            }}
          >
            annuler
          </button>
        </div>
      )}
      <h3 className="otable-name">Name</h3>
      <h3 className="otable-code">ref</h3>
      <h3 className="otable-taille">taille</h3>
      <h3 className="otable-color">color</h3>
      <h3 className="otable-prix">price</h3>
      <h3 className="otable-option">option</h3>
      {products &&
        products.map((product, index) => (
          <div key={index} className="on-admin">
            <p className="otable-name">{product.name}</p>
            <p className="otable-code">{product.ref}</p>
            <p className="otable-taille">{product.taille}</p>
            <div style={{backgroundColor: product.color, height: '40px', width: '40px', border: '2px solid'}} className="otable-color"></div>
            <p className="otable-prix">{product.price}</p>
            <div className="otable-option">
              <button
                onClick={() => {
                  setClient(product);
                  setShowValid(true);
                }}
              >
                <img
                  style={{ height: "35px", width: "35px" }}
                  src={valid}
                  alt=""
                />
              </button>
              <button
                onClick={() => {
                  returne(product);
                }}
              >
                <img
                  style={{ height: "35px", width: "35px", marginLeft: "15px" }}
                  src={nonValid}
                  alt=""
                />
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Otable;
