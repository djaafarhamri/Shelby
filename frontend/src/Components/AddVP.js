import { useEffect, useRef, useState } from "react";
import BarcodeReader from "react-barcode-reader";
import axios from "axios";
import "./AddVP.css";

const ENDPOINT = "http://localhost:4000";

const AddVP = ({ code, setCode, setShowAdd }) => {
  const [product, setProduct] = useState([]);
  const scan = useRef(null);
  useEffect(() => {
    scan.current.focus();
  }, []);
  const ok = (ref) => {
    axios
      .get(`${ENDPOINT}/api/getProductByref/${ref}`, { withCredentials: true })
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  };

  const add = (prod) => {
    axios
      .post(
        `${ENDPOINT}/api/takeProduct`,
        {
          _id: prod._id,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data !== "taille non exist") {
          ok(code);
        }
      })
      .catch((err) => console.log(err));
    axios
      .post(`${ENDPOINT}/api/addCustomer`, {
        id: prod._id,
        username: "client",
        phone: 1000000000,
        adress: "vide",
        ref: prod.ref,
        status: "vendre",
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="addvp">
      <h2>Scan</h2>
      <BarcodeReader
        onError={() => {
          alert("error");
        }}
        onScan={(e) => setCode(e)}
      />
      <input
        style={{ color: "black" }}
        ref={scan}
        type="text"
        onChange={(e) => {
          setCode(e.target.value);
        }}
      />
      <button className="btn-yel" onClick={() => {ok(code)}}>search</button>
      <div className="prod">
        <h4 className="prod-title">title</h4>
        <h4 className="prod-taille">taille</h4>
        <h4 className="prod-quantity">quantity</h4>
        <h4 className="prod-price">price</h4>
        <h4 className="prod-add">add</h4>
      </div>
      {product &&
        product.map((prod, iprod) => (
          <div key={iprod} className="prod">
            <p className="prod-title">{prod.title}</p>
            <p className="prod-taille">{prod.taille}</p>
            <p className="prod-quantity">{prod.quantity}</p>
            <p className="prod-price">{prod.price}</p>
            <button
              className="prod-add-btn"
              onClick={() => {
                add(prod);
              }}
            >
              add
            </button>
          </div>
        ))}
      <button
        className="btn-yel"
        onClick={() => {
          setShowAdd(false);
        }}
      >
        done
      </button>
    </div>
  );
};

export default AddVP;
