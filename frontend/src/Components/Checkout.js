import Navbar from "./Navbar";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/panier";
import axios from "axios";
import { useNavigate } from "react-router";
const { v4 } = require("uuid");

const ENDPOINT = "http://localhost:4000";

const Checkout = () => {
  const nav = useNavigate()
  const [value, setvalue] = useState("");
  const [toggle, settoggle] = useState(1);
  const [nom, setNom] = useState("");
  const [prenom, setPreNom] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [commune, setCommune] = useState("");
  const [ville, setVille] = useState("");
  const [total, setTotal] = useState();
  const [err, setErr] = useState(false);
  const [cart, setCart] = useContext(CartContext);
  useEffect(() => {
    setTotal(0);
    let t = 0;
    for (let p of cart) {
      t = t + p.price;
    }
    if (value === "maison") {
      t = t + 1000;
    } else if (value === "bureau") {
      t = t + 550;
    }
    setTotal(t);
  }, [cart, value]);
  const acheter = () => {
    if (
      nom === "" ||
      prenom === "" ||
      phone === "" ||
      ville === "" ||
      commune === "" ||
      adress === "" ||
      value === ""
    ) {
      setErr(true);
    } else {
      var cid = v4();
      for (let product of cart) {
        axios
          .post(
            `${ENDPOINT}/api/takeProduct`,
            {
              _id: product._id,
            },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => console.log(err));
        axios.post(
          `${ENDPOINT}/api/addCustomer`,
          {
            id: product._id,
            client: cid,
            username: nom + prenom,
            phone,
            adress,
            commune,
            ville,
            livrason: value,
            ref: product.ref,
            status: "progress",
          },
          { withCredentials: true }
        );
      }
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
                    <button
                      onClick={() => {
                        let c = cart.filter((t) => t._id !== product._id);
                        setCart(c);
                      }}
                    >
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
                    </button>
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
              <h1 className="text-center font-medium text-4xl">Paiement </h1>
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
                  setVille(e.target.value);
                }}
                type="text"
                placeholder="Entrer votre Ville"
                className="py-1 px-2 text-xl rounded-xl border-2"
              />
              <label className=" text-xl font-semibold">Commume</label>
              <input
                onChange={(e) => {
                  setCommune(e.target.value);
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
              <label className=" text-xl font-semibold">
                Type de livraison
              </label>
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
              <button
                onClick={acheter}
                className="mt-6 bg-royal text-palete text-2xl px-6 py-2 font-semibold rounded-lg "
              >
                Acheter
              </button>
            </div>
          </div>
        </div>
        <div className=" hidden md:grid md:grid-cols-2 md:gap-3 ">
          <div className="font-monteserrat mt-6 ml-5">
            <div className="flex">
              <button onClick={() => {
                nav(-1)
              }}>
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
              </button>
              <h1 className="text-4xl ml-4 font-semibold font-mont">Panier</h1>
            </div>
            <div className="grid grid-cols-2 gap-3 font-medium font-mont">
              <label className=" text-xl mt-5 font-semibold">Nom</label>
              <label className=" text-xl mt-5 font-semibold ">Prénom</label>
              <input
                onChange={(e) => {
                  setNom(e.target.value);
                }}
                type="text"
                placeholder="Entrer votre nom"
                className="py-1 px-2 text-xl bg-gri rounded-xl md:text-lg"
              />
              <input
                onChange={(e) => {
                  setPreNom(e.target.value);
                }}
                type="text"
                placeholder="Entrer votre prénom"
                className="py-1 px-2 text-xl bg-gri rounded-xl md:text-lg"
              />
              <label className=" text-xl mt-5 font-semibold">Telephone</label>{" "}
              <br />
              <input
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                type="text"
                placeholder="Entrer votre Numéro de Tel "
                className="py-1 px-2 text-xl bg-gri rounded-xl md:text-lg"
              />{" "}
              <br />
              <label className=" text-xl mt-5 font-semibold">Ville</label>{" "}
              <label className=" text-xl mt-5 font-semibold">Commune</label>
              <input
                onChange={(e) => {
                  setCommune(e.target.value);
                }}
                type="text"
                placeholder="Entrer votre VILLE "
                className="py-1 px-2 text-xl rounded-xl md:text-lg"
              />{" "}
              <input
                onChange={(e) => {
                  setVille(e.target.value);
                }}
                type="text"
                placeholder="Entrer votre Commune "
                className="py-1 px-2 text-xl  rounded-xl md:text-lg"
              />{" "}
              <label className=" text-xl mt-5 font-semibold">Adresse</label>{" "}
              <br />
              <input
                onChange={(e) => {
                  setAdress(e.target.value);
                }}
                type="text"
                placeholder="Entrer votre Adresse"
                className="py-1 px-2 text-xl rounded-xl md:text-lg"
              />{" "}
              <br />
            </div>
            <label className=" text-2xl font-semibold font-mont">Type de livraison:</label>{" "}
            <br />
            <div className="flex justify-around mt-4 font-mont">
              <label className="text-xl font-medium">
                <input
                  type="radio"
                  className="h-5 w-6 checked:bg-sfar border-sfar mx-1 "
                  checked={value === "maison"}
                  onChange={() => setvalue("maison")}
                  value="maison"
                />
               A la maison 
              </label>
              <label className="text-xl font-medium">
                <input
                  type="radio"
                  checked={value === "bureau"}
                  onChange={() => setvalue("bureau")}
                  className="h-5 w-6 mx-1 bg-sfar "
                />
                Au Bureau (Yalidine) 
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
          <div className="font-mont ml-3 ">
            <h1 className=" text-4xl mb-5 mt-6 font-semibold">La Commande</h1>
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
                      <div className="relative col-span-2 ml-4">
                        <h1 className=" text-3xl font-semibold mt-2 font-mont ">
                          {product.title}
                        </h1>
                        <h1 className=" text-3xl font-light mt-2 font-mont ">
                          {product.title}
                        </h1>
                        
                        {product.category === "Shoes" ? (
                          <p className="text-2xl mt-2 font-mont ">
                            Pointure {product.taille}
                          </p>
                        ) : (
                          <p className="text-2xl mt-2 font-mont font-normal">
                            Taille {product.taille}
                          </p>
                        )}
                        
                        <p className="text-2xl mt-2 font-mont font-semibold">
                          {product.price} DA
                        </p>
                        <button
                          onClick={() => {
                            let c = cart.filter((t) => t._id !== product._id);
                            setCart(c);
                          }}
                        >
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
                        </button>
                      </div>
                    </div>
                  ))}

                <h1 className="text-3xl py-3 font-bold ml-5">Total &nbsp; {total} DA</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
