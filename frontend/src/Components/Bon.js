import logo from "../assets/bon_logo.png";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./Bon.css";

const Bon = ({ products, setShowBon, adress, phone, username }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const date = new Date();
  const sum = (products) => {
      var total = 0;
      for (let product of products){
          total += product.price
      }
      return total
  } 
  return (
    <div className="bonpage">
      <div ref={componentRef} className="bon">
        <img src={logo} alt="" />
        <p>Rue brahim djelloul N°04</p>
        <p>Tel: 0552363020</p>
        <p style={{marginLeft: '5px'}}>0550241868</p>
        <div style={{borderBottom: '1px solid'}}></div>
        <p>Client: {username}</p>
        <p>
          {date.getFullYear().toString()}/{date.getMonth().toString()}/
          {date.getDate().toString()} {date.getHours().toString()}:
          {date.getMinutes().toString()}
        </p>
        <div className="bon-table">
          <h4 className="bon-title">title</h4>
          <h4 className="bon-ref">taille</h4>
          <h4 className="bon-price">price</h4>
        </div>
        {products &&
          products.map((product, iprod) => (
            <div key={iprod} className="bon-table">
              <p className="bon-title">{product.title}</p>
              <p className="bon-ref">{product.taille}</p>
              <p className="bon-price">{product.price}</p>
            </div>
          ))}
          <h4 className="total">Total: {sum(products)}</h4>
      </div>
      <button className='btn-yel' onClick={handlePrint}>Print</button>
      <button className='btn-yel' onClick={() => {setShowBon(false)}}>close</button>
    </div>
  );
};

export default Bon;
