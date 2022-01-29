import "./Ddata.css";
import { useState } from "react";
import axios from "axios";
const { v4 } = require('uuid')

const ENDPOINT = 'https://shelbyboutique.herokuapp.com'
const Ddata = ({ setRender1, setShowDeliver, clients }) => {
  const [nom, setNom] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [ville, setVille] = useState("");
  const [commune, setCommune] = useState("");
  const deliver = () => {
    let cid = v4();
    if (nom !== "" && adress !== "" && phone !== "") {
      for (let client of clients) {
          axios
            .post(`${ENDPOINT}/api/updateToDelivery`, {
              _id: client._id,
              client: cid,
              nom,
              adress,
              ville,
              commune,
              phone,
              status: "delivery",
            }, {withCredentials:true})
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => console.log(err));
      }  
      setRender1(p => !p)
      setShowDeliver(false)
    }
  };
  return (
    <div className="d-data">
      <h2>Deliver</h2>
      <p>nom</p>
      <input
        type="text"
        placeholder="nom"
        onChange={(e) => [setNom(e.target.value)]}
      />
      <p>ville</p>
      <input
        type="text"
        placeholder="ville"
        onChange={(e) => [setVille(e.target.value)]}
      />
      <p>commune</p>
      <input
        type="text"
        placeholder="commune"
        onChange={(e) => [setCommune(e.target.value)]}
      />
      <p>adress</p>
      <input
        type="text"
        placeholder="adress"
        onChange={(e) => [setAdress(e.target.value)]}
      />
      <p>phone</p>
      <input
        type="text"
        placeholder="phone"
        onChange={(e) => [setPhone(e.target.value)]}
      />
      <div className="d-data-buttons">
        <button onClick={deliver} className="d-data-deliver">
          deliver
        </button>
        <button
          className="d-data-annuler"
          onClick={() => {
            setShowDeliver(false);
          }}
        >
          annuler
        </button>
      </div>
    </div>
  );
};

export default Ddata;
