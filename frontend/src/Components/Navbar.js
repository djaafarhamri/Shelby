import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import panier from "../assets/panier.svg";
import userImg from "../assets/user.svg";
import "./Navbar.css";
import tiktok from "../assets/tiktok.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/panier";

const Navbar = () => {
  const [cart, setCart] = useContext(CartContext);
  const [open, isopen] = useState(false);
  const [search, setSearch] = useState("");
  const nav = useNavigate();
  return (
    <div className="bg-royal">
      <div className="flex md:flex-auto bg-royal  justify-around text-palete ">
        <div className=" self-start   py-3">
          <svg
            onClick={() => isopen(!open)}
            className="w-8 h-8 relative "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
          {open && (
            <div className="flex flex-col absolute left-0 z-10 h-screen bg-royal w-48 mt-4 ">
              <div className="flex  ">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
                <p className="py-1 pl-1 divide-y-2 divide-solid">Home</p>
              </div>
              <div className="flex mt-2">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <p className="py-1 pl-1 divide-y-2 divide-pallete">
                  les contacts
                </p>
              </div>
              <div className="flex mt-2">
                <img className="w-7 h-9" src={tiktok} alt="" />
                <p className="py-1 pl-1">Tiktok</p>
              </div>
              <div className="flex mt-2">
                <img className="w-7 h-9" src={facebook} alt="" />
                <p className="py-1 pl-1">Facebook</p>
              </div>
              <div className="flex mt-2">
                <img className="w-7 h-9" src={instagram} alt="" />
                <p className="py-1 pl-1">Instagram</p>
              </div>
            </div>
          )}
        </div>

        <div className="flex-auto flex place-content-center md:mr-5 ">
          <p className="shelby-logo-123 py-3 px-3 text-4xl hidden sm:block">
            Shelby
          </p>
          <img src={logo} alt="" />
          <p className="shelby-logo-123 px-3 py-3 text-4xl hidden sm:block ">
            Boutique
          </p>
        </div>
        <div className="md:flex-initial md:w-32 flex justify-end">
          <input
            className="hidden h-10 mt-3 ml-4 md:block rounded-xl mr-28 font-monteserrat text-black text-xl py-1 px-1 bg-gray"
            type="text"
            placeholder="Recherche2x..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                var s = search.replace(/\s/g, "+");
                nav(`/products/?s=${s}`);
              }
            }}
          />
          <img
            onClick={() => {
              if (cart.length === 0) {
                alert("there is nohing in the cart");
              } else {
              }
              nav("/checkout");
            }}
            src={panier}
            alt=""
            className="h-6 sm:h-8 mt-4 ml-4 mb-4 mr-9"
          />
        </div>
      </div>
      <div className="flex  md:hidden">
        <input
          className="w-full rounded-xl font-monteserrat text-black text-xl py-1 px-1 bg-gray"
          type="text"
          placeholder="Recherche..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              var s = search.replace(/\s/g, "+");
              nav(`products/?s=${s}`);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
