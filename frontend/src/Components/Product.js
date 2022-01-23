import { useEffect, useState } from "react";
import axios from "axios";
import image from "../assets/pro.jfif";
import Navbar from "./Navbar";
import jordan from '../assets/jordan.jpg'
const ENDPOINT = "http://localhost:4000";

const Product = () => {
  const [selected , isselected]=useState('');
  return (
    <div className="">
     <Navbar />
       <div className="grid grid-cols-1 sm:grid-cols-2 justify-center ">
         <div className="grid grid-cols-2 gap-3 order-2 sm:order-1">
           <img className="col-span-2 w-full h-full object-center object-cover lg:w-full lg:h-full xl:w-full xl:h-full" src={jordan} alt="" />
           <img className="w-full h-full object-center object-cover lg:w-full lg:h-full xl:w-full xl:h-full" src={jordan} alt="" />
           <img className="w-full h-full object-center object-cover lg:w-full lg:h-full xl:w-full xl:h-full" src={jordan} alt="" />
           <img className="w-full h-full object-center object-cover lg:w-full lg:h-full xl:w-full xl:h-full" src={jordan} alt="" />
           <img className="w-full h-full object-center object-cover lg:w-full lg:h-full xl:w-full xl:h-full" src={jordan} alt="" />
           <img className="w-full h-full object-center object-cover lg:w-full lg:h-full xl:w-full xl:h-full" src={jordan} alt="" />
           <img className="w-full h-full object-center object-cover lg:w-full lg:h-full xl:w-full xl:h-full" src={jordan} alt="" />
           <img className="w-full h-full object-center object-cover lg:w-full lg:h-full xl:w-full xl:h-full" src={jordan} alt="" />
         </div>
         <div className="order-1 sm:order-2">
         <h1 className="text-2xl font-monteserrat font-normal sm:text-6xl">NIKE AIR Jordan</h1>
         <h2 className="text-xl font-monteserrat font-normal sm:text-5xl" >High Light Smoke Grey</h2>
         <h3 className="text-xl font-monteserrat font-normal sm:text-4xl">18000DA</h3>
         <p className="text-base font-monteserrat font-normal sm:text-xl mt-2">tenesa chaba ki zebi soma dik hiya khoya mat9acha7che la ma3ejbatekche yedek fih chabaghini ngolek</p>
         <div className="flex mt-3 justify-around">
           <h3 className="font-medium font-monteserrat text-lg sm:text-2xl">-les taille:</h3>
           <span className="ring-1 ring-black w-9 px-2 py-1 text-2xl"> S</span>
           <span className="ring-1 ring-black w-9  px-1 text-2xl"> M</span>
           <span className="ring-1 ring-black w-9  px-1 text-2xl"> L</span>
           <span className="ring-1 ring-black w-9  px-1 text-2xl"> XL</span>
           <span className="ring-1 ring-black w-9  px-1 text-2xl"> XXL</span>
         </div>
         <div className="flex justify-evenly my-6">
           <button className="bg-royal text-palete text-lg sm:text-2xl  rounded-lg py-2 px-3" >Acheter</button>
           <button className="bg-royal text-palete text-lg sm:text-2xl  rounded-lg py-2 px-3" >Ajouter au panier</button>
         </div>
       </div>
       </div>
       
      
    </div>
  );
};

export default Product;
