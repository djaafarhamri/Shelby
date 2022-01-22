import Product from "./Product";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import pic from "../assets/jordan.jpg";
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
 
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-5">
        <div className="group relative rounded-md shadow-2xl ">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 ">
                <img
                  src={pic}
                  alt=""
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full xl:w-full xl:h-full"
                />
              </div>
              <div className="mt-4  ">
                <div>
                  <h3 className="text-xl font-bold text-center font-monteserrat">                   
                      Jordan Air force
                  </h3>
                  <p className="mt-1 pr-1 text-md font-monteserrat">description de produit</p>
                  <p className="text-lg font-extrabold text-center font-monteserrat">18000DA</p>
                </div>
                
              </div>
            </div>
      </div>
    </div>
  );
};

export default Products;
