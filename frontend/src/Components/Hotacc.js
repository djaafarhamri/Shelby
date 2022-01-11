import "./Trend.css";
import Product from "./Product";

const Hotacc = () => {
  return (
    <div className="new">
      <h2 className="newH2">HOT ACCESSOIRES</h2>
      <div className="new-products">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Hotacc;
