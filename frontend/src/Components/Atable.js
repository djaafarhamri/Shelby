import { useState, useEffect } from "react";
import axios from "axios";
import "./Atable.css";
import AddVP from "./AddVP";
import Ddata from "./Ddata";
import Bon from "./Bon";

const ENDPOINT = "https://shelby-tau.vercel.app";

const Atable = ({ setRender, search }) => {
  const [products, setProducts] = useState([]);
  const [clients, setClients] = useState([]);
  const [code, setCode] = useState("");
  const [showDeliver, setShowDeliver] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showBon, setShowBon] = useState(false);
  const [showPending, setShowPending] = useState(false);
  const [render1, setRender1] = useState(false);
  const [prixPay, setPrixPay] = useState("");

  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getVendre`, { withCredentials: true })
      .then((res) => {
        setProducts(res.data.products);
        setClients(res.data.clients);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [showAdd, render1]);

  const valider = () => {
    for (let client of clients) {
      axios
        .post(
          `${ENDPOINT}/api/updateTo24`,
          {
            _id: client._id,
            status: "24",
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
      axios
        .post(
          `${ENDPOINT}/api/addSold`,
          {
            customer_id: client._id,
          },
          { withCredentials: true }
        )
        .then((res) => console.log(res.data))
        .catch((err) => {
          console.log(err);
        });
        axios
        .post(
          `${ENDPOINT}/api/addToLaCaisse`,
          {
            montant: products[clients.indexOf(client)].price,
          },
          { withCredentials: true }
          )
          .then((res) => console.log(res.data))
          .catch((err) => {
            console.log(err);
          });
        }
    setShowBon(true);
  };
  const pending = () => {
    for (let client of clients) {
      axios
        .post(
          `${ENDPOINT}/api/updateToPending`,
          {
            _id: client._id,
            status: "pending",
            prixPay,
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
    setShowBon(true);
    setRender1(!render1);
    setRender(p => !p);
  };
  const returne = (product, client) => {
    axios
      .post(
        `${ENDPOINT}/api/return`,
        {
          product,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    axios
      .delete(`${ENDPOINT}/api/deleteCustomer/${client._id}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    axios
      .delete(`${ENDPOINT}/api/deleteSold/${client._id}`, {
        withCredentials: true,
      })
      .then(
        (res) => {
          console.log(res.data);
        },
        { withCredentials: true }
      )
      .catch((err) => console.log(err));
    setRender1(!render1);
    setRender(p => !p);
  };

  return (
    <>
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
        {showPending && products.length !== 0 && (
          <div className="d-data">
            <h2>Prix paye</h2>
            <input
              type="text"
              onChange={(e) => {
                setPrixPay(e.target.value);
              }}
            />
            <button onClick={pending}>pending</button>
            <button
              onClick={() => {
                setShowPending(false);
              }}
            >
              annuler
            </button>
          </div>
        )}
        {showAdd && (
          <AddVP code={code} setCode={setCode} setShowAdd={setShowAdd} />
        )}
        {showDeliver && (
          <Ddata setRender1={setRender1} setShowDeliver={setShowDeliver} clients={clients} />
        )}
        <h3 className="atable-name">Name</h3>
        <h3 className="atable-code">Ref</h3>
        <h3 className="atable-taille">Taille</h3>
        <h3 className="atable-color">Color</h3>
        <h3 className="atable-prix">Prix</h3>
        <h3 className="atable-status">del</h3>
        {products &&
          products.map((product, index) => (
            <div key={index} className="all-products-admin">
              <p className="atable-name">{product.title}</p>
              <p className="atable-code">{product.ref}</p>
              <p className="atable-taille">{product.taille}</p>
              <p
                style={{
                  color: product.color,
                  height: "40px",
                  width: "40px",
                  border: "2px solid",
                }}
                className="atable-color"
              ></p>
              <p className="atable-prix">{product.price}</p>
              <button
                className="atable-status"
                onClick={() => {
                  returne(product, clients[index]);
                }}
              >
                <img
                  style={{ height: "40px", width: "40px" }}
                  src="https://img.icons8.com/plasticine/100/000000/filled-trash.png"
                  alt="remove"
                />
              </button>
            </div>
          ))}
      </div>
      <div className="vendre-buttons">
        <button onClick={valider}>valider</button>
        <button
          onClick={() => {
            setShowDeliver(true);
          }}
        >
          deliver
        </button>
        <button
          onClick={() => {
            setShowPending(true);
          }}
        >
          pending
        </button>
        <button
          onClick={() => {
            setShowAdd(true);
          }}
        >
          add
        </button>
      </div>
    </>
  );
};

export default Atable;
