import { useState, useEffect } from "react";
import axios from "axios";
import "./Atable.css";
import AddVP from "./AddVP";
import Ddata from "./Ddata";
import Bon from "./Bon";

const ENDPOINT = "http://localhost:4000";

const Atable = () => {
  const [products, setProducts] = useState([]);
  const [clients, setClients] = useState([]);
  const [code, setCode] = useState("");
  const [showDeliver, setShowDeliver] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showBon, setShowBon] = useState(false);

  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getVendre`)
      .then((res) => {
        setProducts(res.data.products);
        setClients(res.data.clients);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const valider = () => {
    for (let client of clients) {
      axios
        .post(`${ENDPOINT}/api/updateTo24`, {
          _id: client._id,
          status: "24",
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
      axios
        .post(`${ENDPOINT}/api/addSold`, {
          customer_id: client._id,
        })
        .then((res) => console.log(res.data))
        .catch((err) => {
          console.log(err);
        });
    }
    setShowBon(true);
  };
  const returne = (product, client) => {
    axios
      .post(`${ENDPOINT}/api/return`, {
        product,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    axios
      .delete(`${ENDPOINT}/api/deleteCustomer/${client._id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    axios
      .delete(`${ENDPOINT}/api/deleteSold/${client._id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="atable">
      {showBon && (
        <Bon
          products={products}
          setShowBon={setShowBon}
          adress={clients[0].adress}
          phone={clients[0].phone}
          name={clients[0].username}
        />
      )}
      {showAdd && (
        <AddVP code={code} setCode={setCode} setShowAdd={setShowAdd} />
      )}
      {showDeliver && (
        <Ddata setShowDeliver={setShowDeliver} clients={clients} />
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
            <button
              className="atable-status"
              onClick={() => {
                returne(product, clients[index]);
              }}
            >
              del
            </button>
          </div>
        ))}
      <div className="vendre-buttons">
        <button onClick={valider}>valider</button>
        <button
          onClick={() => {
            setShowDeliver(true);
          }}
        >
          deliver
        </button>
        <button onClick={valider}>pending</button>
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
