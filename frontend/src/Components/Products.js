import Product from "./Product";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";
import Navbar from "./Navbar";
const ENDPOINT = "http://localhost:4000";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getAllProducts`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const [filter1,isopen1]=useState(false);
  const [filter2,isopen2]=useState(false);
  const [filter3,isopen3]=useState(false);
  return (
    <div className="products-page">
      <Navbar />

      <div className="flex border-b-2 border-black justify-around">
         <div className="flex-auto relative">
           <p onClick={()=>isopen1(!filter1)} className="font-monteserrat text-2xl" > Categorie</p>
           {filter1 && <ul className="absolute">
             <li>Classic</li>
             <li>Sport</li>
             <li></li>
           </ul>}
         </div>
         <div className="flex-auto relative">
           <p onClick={()=>isopen2(!filter2)} className="font-monteserrat text-2xl"> Pointure</p>
           {filter2 && <ul className="absolute">
             <li>Classic</li>
             <li>Sport</li>
             <li></li>
           </ul>}

         </div>
         <div className="flex-auto relative">
           <p onClick={()=>isopen3(!filter3)} className="font-monteserrat text-2xl"> Marque</p>
           {filter3 && <ul className="absolute">
             <li>Classic</li>
             <li>Sport</li>
             <li></li>
           </ul>}

         </div>
       </div>
 
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {products &&
          products.map((product, index) => (
            <div key={index} className="products-map">
              <Product title={product.title} marque={product.marque} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
