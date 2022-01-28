import { useNavigate, useSearchParams } from "react-router-dom";
import logo from "../assets/logo.png";
import panier from "../assets/panier.svg";
import "./Navbar.css";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/panier";


const Navbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cart, setCart] = useContext(CartContext);
  const [open, isopen] = useState(false);
  const [search, setSearch] = useState(searchParams.get('s'));
  const nav = useNavigate();
  return (
    <div className="bg-royal">
      <div className="flex md:flex-auto bg-royal justify-around text-palete ">
                  
        <div>
        <svg  className="w-8 h-8 absolute top-0 left-0 mt-4 ml-5 hidden md:block"  fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <input
            className="hidden h-10 mt-3 ml-4 md:block rounded-3xl  font-mont text-black text-xl py-1 px-1 pl-9 bg-search"
            type="text"
            value={search}
            placeholder="Recherche..."
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
            </div>
        <div className="flex-auto flex place-content-center ml-7 md:mr-5 lg:mr-16 lg:-translate-x-6 ">
          <p className="shelby-logo-123 py-3 px-3 text-4xl hidden md:block">
            Shelby
          </p>
          <img src={logo} alt="" />
          <p className="shelby-logo-123 px-3 py-3 text-4xl hidden md:block ">
            Boutique
          </p>
        </div>
        <div className="md:flex-initial md:w-32 flex justify-end sm:ml-6">
         
          <img
            onClick={() => {
              nav("/checkout");
            }}
            src={panier}
            alt=""
            className="h-6 sm:h-8 mt-4  mb-4 mr-2 cursor-pointer"
          />
           <p className="mr-1 lg:mr-6">{cart.length}</p>
        </div>
      </div>
      <div className="flex  md:hidden">
        <input
          className="w-full rounded-xl font-monte text-black text-xl py-1 px-1 bg-search "
          type="text"
          placeholder="Recherche..."
          value={search}
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
