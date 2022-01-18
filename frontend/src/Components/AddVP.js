import BarcodeReader from "react-barcode-reader";
import axios from "axios";
import "./AddVP.css";

const ENDPOINT = "http://localhost:4000";

const AddVP = ({
  code,
  setCode,
  setShowAdd,
  setProduct,
  setProducts,
  product,
  setPrixPay,
}) => {
  const ok = () => {
    axios
      .get(`${ENDPOINT}/api/getProductByref/${code}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  };

  const add = (prod) => {
    axios
      .post(`${ENDPOINT}/api/takeProduct`, {
       _id:prod._id,
      })
      .then((res) => {
        if (res.data !== "taille non exist") {
          setProducts((old) => [...old, res.data.product]);
          console.log(res.data)
          ok()
        } else {
          console.log(res.data);
        }
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
      {product &&
        product.map((prod, iprod) => (
          <div key={iprod} className="prod">
            <p>{prod.title}</p>
            <p>{prod.taille}</p>
            <p>{prod.quantity}</p>
            <p>prix payer</p>
            <input
              style={{ color: "black" }}
              type="text"
              value={product.price}
              onChange={(e) => {
                setProduct((old) => ({ ...old, prixPay: e.target.value }));
              }}
            />
            <button onClick={() => {add(prod)}}>add</button>
          </div>
        ))}
      <button
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
