import BarcodeReader from "react-barcode-reader";
import axios from "axios";
import { useEffect, useState } from "react";
import "./AddVP.css";

const ENDPOINT = "http://localhost:4000";

const AddVP = ({
  code,
  setCode,
  setShowAdd,
  setProduct,
  setProducts,
  product,
  taille,
  setTaille,
  setPrixPay,
}) => {
  const ok = () => {
    axios
      .get(`${ENDPOINT}/api/getProductByCode/${code}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  };

  const add = () => {
    axios
      .post(`${ENDPOINT}/api/takeProduct`, {
        code,
        taille,
      })
      .then((res) => {
        if (res.data !== "taille non exist") {
          setProducts((old) => [...old, res.data]);
          setShowAdd(false);
        } else {console.log(res.data)}
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
        type="text"
        onChange={(e) => {
          setCode(e.target.value);
        }}
      />
      <button onClick={ok}>ok</button>
      {product && (
        <>
          <h2>{product.title}</h2>
          <p>taille</p>
          <input
            style={{ color: "black" }}
            type="text"
            onChange={(e) => {
              setProduct((old) => ({...old, taille: e.target.value}));
            }}
          />
          <p>prix payer</p>
          <input
            style={{ color: "black" }}
            type="text"
            value={product.price}
            onChange={(e) => {
              setProduct((old) => ({...old, prixPay: e.target.value}));
            }}
          />
        </>
      )}
      <button
        onClick={() => {
          setShowAdd(false);
        }}
      >
        anuller
      </button>
      <button onClick={add}>add</button>
    </div>
  );
};

export default AddVP;
