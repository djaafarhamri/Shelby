import { useEffect, useState } from "react";
import axios from "axios";
import "./ShowProducts.css";

const ENDPOINT = "https://shelby-tau.vercel.app";

const ShowProducts = ({ cid, setShowProducts }) => {
  const [products, setProducts] = useState([]);
  const [clients, setClients] = useState([]);
  useEffect(() => {
    console.log(cid);
    axios
      .get(`${ENDPOINT}/api/getProductsByclient/${cid}`, {
        withCredentials: true,
      })
      .then((res) => {
        setProducts(res.data.products);
        console.log('res', res.data.client[0].commune);
        setClients(res.data.client);
      })
      .catch((err) => console.log(err));
  }, [cid]);
  const valider = (products) => {
    console.log("progress: ", products);
    for (let client of clients) {
      axios
        .post(
          `${ENDPOINT}/api/updateToDelivery`,
          {
            _id: client._id,
            nom: client.username,
            adress: client.adress,
            ville: client.ville,
            commune: client.commune,
            phone: client.phone,
            status: "delivery",
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
    setShowProducts(false);
  };
  return (
    <div className="show-products">
      <h2>Products</h2>
      <div className="show">
        <h4 className="show-title">name</h4>
        <h4 className="show-taille">taille</h4>
        <h4 className="show-quantity">color</h4>
        <h4 className="show-price">price</h4>
      </div>
      {products &&
        products.map((prod, iprod) => (
          <div key={iprod} className="show">
            <p className="show-title">{prod.title}</p>
            <p className="show-taille">{prod.taille}</p>
            <div
              style={{
                backgroundColor: prod.color,
                height: "20px",
                width: "20px",
                border: "1px solid",
              }}
              className="show-quantity"
            ></div>
            <p className="show-price">{prod.price}</p>
          </div>
        ))}
        <h3>Ville</h3>
        <p>{clients.length && clients[0].ville}</p>
        <h3>Commune</h3>
        <p>{clients.length && clients[0].commune}</p>
        <h3>Adress</h3>
        <p>{clients.length && clients[0].adress}</p>
      <button
        className="d-data-deliver"
        onClick={() => {
          valider(products);
          setShowProducts(false);
        }}
      >
        valider
      </button>
      <button
        className="d-data-annuler"
        onClick={() => {
          setShowProducts(false);
        }}
      >
        annuler
      </button>
    </div>
  );
};

export default ShowProducts;
