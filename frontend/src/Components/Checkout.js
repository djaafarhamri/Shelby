import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/panier";
import axios from "axios";
const { v4 } = require('uuid')

const ENDPOINT = "http://localhost:4000";

const Checkout = () => {
  const [value, setvalue] = useState("");
  const [toggle, settoggle] = useState(1);
  const [nom, setNom] = useState("");
  const [prenom, setPreNom] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [cart, setCart] = useContext(CartContext);
  const acheter = () => {
    var cid = v4()
    for (let product of cart) {
      axios
      .post(`${ENDPOINT}/api/takeProduct`, {
        _id: product._id,
      }, {withCredentials:true})
      .then((res) => {
          console.log(res.data);
      })
      .catch((err) => console.log(err));
      axios.post(`${ENDPOINT}/api/addCustomer`, {
        id: product._id,
        client: cid,
        username: nom + prenom,
        phone,
        adress,
        livrason: value,
        ref: product.ref,
        status: 'progress'
      }, {withCredentials:true});
    }
  };
  const toggletab = (index) => {
    settoggle(index);
  };

  return (
    <div className="bg-check h-screen">
      <div>
        
        <div className="grid justify-center md:hidden ">
          <div className="flex justify-center mt-3 tex-monteserrat text-2xl mb-3 ">
            <button
              className={
                toggle === 1
                  ? "border-2 px-2  rounded-full border-solid border-crevet bg-crevet text-palete  text-3xl "
                  : "border-2 px-2  rounded-full border-solid border-crevet"
              }
              onClick={() => toggletab(1)}
            >
              1
            </button>
            <div className="h-1 w-20 bg-crevet mt-4"></div>
            <button
              className={
                toggle === 2
                  ? "border-2 border-solid border-crevet px-2  rounded-full bg-crevet text-palete text-3xl"
                  : "border-2 px-2  rounded-full border-solid border-crevet"
              }
              onClick={() => toggletab(2)}
            >
              2
            </button>
          </div>
          <div className={toggle === 1 ? "block" : "hidden"}>
            <h1 className="text-center text-monteserrat font-medium text-5xl mb-4">
              Panier
            </h1>
            {cart &&
              cart.map((product, i) => (
                <div key={i} className="grid grid-cols-2 gap-1 ">
                  <img
                    className="object-cover object-center w-full h-full"
                    src={`${ENDPOINT}/${product.main_image}`}
                    alt=""
                  />
                  <div className="relative">
                    <h1 className=" text-2xl font-monteserrat">
                      {product.title}
                    </h1>
                    <p className="text-2xl font-monteserrat">
                      {product.price} DA
                    </p>
                    {product.category === "Shoes" ? (
                      <p className="text-2xl font-monteserrat">
                        pointure: {product.taille}
                      </p>
                    ) : (
                      <p className="text-2xl font-monteserrat">
                        taille: {product.taille}
                      </p>
                    )}
                    <svg
                      className="w-6 h-6 absolute right-0 top-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      ></path>
                    </svg>
                  </div>
                </div>
              ))}
            <div className="flex justify-center font-monteserrat">
              <button
                className="mt-6 bg-royal text-palete text-2xl px-6 py-2 font-semibold rounded-lg "
                onClick={() => toggletab(2)}
              >
                Next
              </button>
            </div>
          </div>
          <div className={toggle === 2 ? "block" : "hidden"}>
            <div className="grid gap-3 font-monteserrat">
              <h1 className="text-center font-medium text-4xl">
                Paiement{" "}
              </h1>
              <label className=" text-xl font-semibold">Nom</label>
              <input
                onChange={(e) => {
                  setNom(e.target.value);
                }}
                type="text"
                placeholder="Entrer votre nom"
                className="py-1 px-2 rounded-xl text-xl border-2"
              />
              <label className=" text-xl  font-semibold">Prénom</label>
              <input
                onChange={(e) => {
                  setPreNom(e.target.value);
                }}
                type="text"
                placeholder="Entrer votre prénom"
                className="py-1 px-2 rounded-xl text-xl border-2"
              />
              <label className=" text-xl font-semibold">Telephone</label>
              <input
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                type="text"
                placeholder="Entrer votre nombre de tel"
                className="py-1 px-2 text-xl rounded-xl border-2"
              />
              <label className=" text-xl font-semibold">Ville</label>
              <input
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                type="text"
                placeholder="Entrer votre Ville"
                className="py-1 px-2 text-xl rounded-xl border-2"
              />
              <label className=" text-xl font-semibold">Commume</label>
              <input
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                type="text"
                placeholder="Entrer votre Commume"
                className="py-1 px-2 text-xl rounded-xl border-2"
              />
              <label className=" text-xl font-semibold">Adresse</label>
              <input
                onChange={(e) => {
                  setAdress(e.target.value);
                }}
                type="text"
                placeholder="Entrer votre Adresse"
                className="py-1 px-2 text-xl rounded-xl border-2"
              />
              <label className=" text-xl font-semibold">Type de livraison</label>
              <div className="flex justify-around">
                <label className="text-xl">
                  <input
                    type="radio"
                    className="h-5 w-5"
                    checked={value === "maison"}
                    onChange={() => setvalue("maison")}
                    value="maison"
                  />
                  a la maison (1000DA)
                </label>
                <label className="text-xl">
                  <input
                    type="radio"
                    checked={value === "bureau"}
                    onChange={() => setvalue("bureau")}
                    className="h-5 w-5"
                  />
                  a le bureau (550DA)
                </label>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="mt-6 bg-royal text-palete text-2xl px-6 py-2 font-semibold rounded-lg ">
                Acheter
              </button>
            </div>
          </div>
        </div>
        <div className=" hidden md:grid md:grid-cols-2 md:gap-3 ">
          <div className="font-monteserrat mt-6 ml-5">
            <div className="flex">
              <svg
                className="w-9 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                ></path>
              </svg>
              <h1 className="text-4xl ml-4">Panier</h1>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <label className=" text-xl mt-5 font-semibold">Nom</label>
                <label className=" text-xl mt-5 font-semibold ">Prénom</label>
                <input
                onChange={(e) => {setNom(e.target.value)}}
                  type="text"
                  placeholder="Entrer votre nom"
                  className="py-1 px-2 text-xl bg-gri rounded-xl md:text-lg"
                />
              
               
                <input
                onChange={(e) => {setPreNom(e.target.value)}}
                type="text"
                  placeholder="Entrer votre prénom"
                  className="py-1 px-2 text-xl bg-gri rounded-xl md:text-lg"
                />
              
            
              <label className=" text-xl mt-5 font-semibold">Telephone</label> <br />
              <input
                onChange={(e) => {setPhone(e.target.value)}}
                type="text"
                placeholder="Entrer votre Numéro de Tel "
                className="py-1 px-2 text-xl bg-gri rounded-xl md:text-lg"
              />{" "}
              <br />
              <label className=" text-xl mt-5 font-semibold">Ville</label> <label className=" text-xl mt-5 font-semibold">Commune</label> 
              <input
                onChange={(e) => { (e.target.value)}}
                type="text"
                placeholder="Entrer votre VILLE "
                className="py-1 px-2 text-xl rounded-xl md:text-lg"
              />{" "}
              <input
                onChange={(e) => { (e.target.value)}}
                type="text"
                placeholder="Entrer votre Commune "
                className="py-1 px-2 text-xl  rounded-xl md:text-lg"
              />{" "}
              <label className=" text-xl mt-5 font-semibold">Adresse</label> <br />
              <input
                onChange={(e) => {setAdress(e.target.value)}}
                type="text"
                placeholder="Entrer votre Adresse"
                className="py-1 px-2 text-xl rounded-xl md:text-lg"
              />{" "}
              <br />
            </div>
            <label className=" text-xl font-semibold">Type de livraison:</label> <br />
            <div className="flex justify-around mt-4">
              <label className="text-xl ">
                <input
                  type="radio"
                  className="h-5 w-6 checked:bg-sfar border-sfar "
                  checked={value === "maison"}
                  onChange={() => setvalue("maison")}
                  value="maison"
                />
                a la maison (1000DA)
              </label>
              <label className="text-xl">
                <input
                  type="radio"
                  checked={value === "bureau"}
                  onChange={() => setvalue("bureau")}
                  className="h-5 w-6 bg-sfar "
                />
                a le bureau (500DA)
              </label>
            </div>
            <div className="flex justify-center">
              <button
                onClick={acheter}
                className="mt-6 bg-royal text-palete text-2xl px-8 font-semibold py-3 rounded-lg "
              >
                Acheter
              </button>
            </div>
          </div>
          <div className="font-monteserrat ml-3 ">
            <h1 className=" text-4xl mb-5">la commande</h1>
            <div className="ring-1 ring-gray rounded-xl bg-gri">
              <div className=" rounded-xl divide-y divide-solid">
                {cart &&
                  cart.map((product, i) => (
                    <div key={i} className="grid grid-cols-3  mb-4">
                      <img
                        className="object-cover object-center w-full h-full overflow-hidden rounded-xl col-span-1 "
                        src={`${ENDPOINT}/${product.main_image}`}
                        alt=""
                      />
                      <div className="relative col-span-2">
                        <h1 className=" text-4xl font-semibold mt-2 font-monteserrat ">
                          {product.title}
                        </h1>
                        <p className="font-light"></p>
                        <p className="text-3xl mt-2 font-monteserrat ">
                          {product.price} DA
                        </p>
                        {product.category === "Shoes" ? (
                          <p className="text-3xl mt-2 font-monteserrat ">
                            pointure: {product.taille}
                          </p>
                        ) : (
                          <p className="text-3xl mt-2 font-monteserrat ">
                            taille: {product.taille}
                          </p>
                        )}
                        <svg
                          className="w-6 h-6 absolute top-0 right-0 mt-2 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  ))}

                <h1 className="text-3xl py-3 ">Prix Total:</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
