import "./Trend.css";
import Product from "./Product";

const Trend = () => {
  return (
    <div className="new">
      <h2 className="newH2">TRENDING</h2>
      <div className="new-products">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Trend;
