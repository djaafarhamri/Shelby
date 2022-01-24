import Navbar from "./Navbar";
import { useState } from "react";
const Checkout = () => {
    const[toggle,settoggle]=useState(1);

    const toggletab = (index) => {
        settoggle(index);
      };

    return (  
        <div>
            <Navbar />
            <div className=" ">
                <div className="flex">
                <button
          className={toggle === 1 ? "border-2 border-solid active:bg-royal active:text-palete focus:bg-royal focus:text-palete " : "border-2 border-solid"}
          onClick={() => toggletab(1)}
        >
          Le panier
        </button>
        <button
          className={toggle === 2 ? "border-2 border-solid active:bg-royal active:text-palete focus:bg-royal focus:text-palete " : "border-2 border-solid"}
          onClick={() => toggletab(2)}
        >
          Les information
        </button>
                </div>
            </div>
        </div>
    );
}
 
export default Checkout;
