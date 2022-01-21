import Product from "./Product";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import pic from "../assets/hero.png";
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
    <div className="">
      <Navbar />

      <div className='flex border-b-2 border-black justify-around'>
         <div className=" relative">
           <p onClick={()=>isopen1(!filter1)} className="font-monteserrat text-2xl" > Categorie</p>
           {filter1 && <ul className="absolute">
             <li>Classic</li>
             <li>Sport</li>
             <li></li>
           </ul>}
         </div>
         <div className=" relative">
           <p onClick={()=>isopen2(!filter2)} className="font-monteserrat text-2xl"> Pointure</p>
           {filter2 && <ul className="absolute">
             <li>Classic</li>
             <li>Sport</li>
             <li></li>
           </ul>}

         </div>
         <div className=" relative">
           <p onClick={()=>isopen3(!filter3)} className="font-monteserrat text-2xl"> Marque</p>
           {filter3 && <ul className="absolute">
             <li>Classic</li>
             <li>Sport</li>
             <li></li>
           </ul>}

         </div>
       </div>
 
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-5">
        <div className="">
          <img className="object-center object-cover lg:w-full lg:h-full" src={pic} alt="" />
          <p className="font-bold font-monteserrat text-xl">Mark of product</p>
          <p className="font-monteserrat">little details</p>
          <p className="font-bold font-monteserrat text-center">Price</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
