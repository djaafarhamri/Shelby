import Navbar from "./Navbar";
import { useState } from "react";
import jordan from '../assets/jordan.jpg';
const Checkout = () => {
    const[value,setvalue]=useState("");
    const[toggle,settoggle]=useState(1);

    const toggletab = (index) => {
        settoggle(index);
      };

    return (  
        <div>
            <Navbar />
            <div className="grid justify-center ">
                <div className="flex tex-monteserrat text-2xl mb-3 ">
                <button
          className={toggle === 1 ? "border-2 border-solid bg-royal text-palete  " : "border-2 border-solid"}
          onClick={() => toggletab(1)}
        >
          Le panier
        </button>
        <button
          className={toggle === 2 ? "border-2 border-solid bg-royal text-palete  " : "border-2 border-solid"}
          onClick={() => toggletab(2)}
        >
          Les information
        </button>

                </div>
            <div className={toggle === 1 ? "block" : "hidden" }>
                <h1 className="text-center text-monteserrat text-2xl mb-4">vérifier les produit selectioner</h1>
                <div className="grid grid-cols-2 gap-1">
                    <img className="object-cover object-center w-full h-full" src={jordan} alt="" />
                    <div>
                        <h1 className=" text-xl font-monteserrat" >Jordan Air max</h1>
                        <p className="text-lg font-monteserrat" >price:</p>
                        <p className="text-lg font-monteserrat">pointure:</p>
                    </div>
                    <img className="object-cover object-center w-full h-full" src={jordan} alt="" />
                    <div>
                        <h1 className=" text-xl font-monteserrat" >Jordan Air max</h1>
                        <p className="text-lg font-monteserrat" >price:</p>
                        <p className="text-lg font-monteserrat">pointure:</p>
                    </div>
                </div>
                <div className="flex justify-center font-monteserrat">
                <button className="mt-6 bg-royal text-palete text-2xl px-1 py-2 rounded-lg " onClick={()=>toggletab(2)}>Next</button>
                </div>
            </div>
            <div  className={toggle === 2 ? "block" : "hidden"}>
                <div className="grid gap-3 font-monteserrat">
                    <h1 className="text-center text-2xl">Remplissez le formulaire de demande </h1>
                    <label className=" text-xl">Nom:</label>
                    <input type="text" placeholder="Entrer votre nom" className="py-1 px-2 text-xl border-2" />
                    <label className=" text-xl">Prénom:</label>
                    <input type="text" placeholder="Entrer votre prénom" className="py-1 px-2 text-xl border-2" />
                    <label className=" text-xl">Ville:</label>
                    <input type="text" placeholder="Entrer votre ville" className="py-1 px-2 text-xl border-2" />
                    <label className=" text-xl">Adresse:</label>
                    <input type="text" placeholder="Entrer votre Adresse" className="py-1 px-2 text-xl border-2" />
                    <label className=" text-xl">Type de livraison:</label>
                    <div className="flex justify-around">
                        <label className="text-xl">
                    <input type="radio" className="h-3 w-3" checked={value ==="maison"} onChange={()=> setvalue("maison")} value="maison" className="" />
                    a la maison (550DA)
                        </label>
                        <label className="text-xl">
                    <input type="radio" checked={value === "bureau"} onChange={()=> setvalue("bureau")} className=" " />
                    a le bureau (1000DA)
                        </label>   
                    </div>
                </div>
                <div className="flex justify-center">
                <button className="mt-6 bg-royal text-palete text-2xl px-1 py-2 rounded-lg ">Acheter</button>
                </div>
            </div>
            </div>
        </div>
    );
}
 
export default Checkout;
