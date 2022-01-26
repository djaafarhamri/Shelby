import "./Ddata.css";
import { useState } from "react";
import axios from "axios";
const ENDPOINT = 'http://localhost:4000'
const Ddata = ({ setShowDeliver, clients }) => {
  const [nom, setNom] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const deliver = () => {
    if (nom !== "" && adress !== "" && phone !== "") {
      for (let client of clients) {
          axios
            .post(`${ENDPOINT}/api/updateToDelivery`, {
              _id: client._id,
              nom,
              adress,
              phone,
              status: "delivery",
            }, {withCredentials:true})
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => console.log(err));
      }  
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
