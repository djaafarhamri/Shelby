import Product from "./Product";
import "./New.css";

const New = () => {
  return (
    <div className="new">
      <h2 className="newH2">NEW COLLECTION</h2>
      <div className="new-products">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default New;
