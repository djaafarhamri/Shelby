import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-tra.png";
import panier from "../assets/panier.svg";
import userImg from "../assets/user.svg";
import "./Navbar.css";
import tiktok from "../assets/tiktok.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/panier";


const Nav = () => {
    const [cart, setCart] = useContext(CartContext);
    const [open, isopen] = useState(false);
    const [search, setSearch] = useState("");
    const nav = useNavigate();

    return (     <div className="bg-transparent">
    <div className="flex md:flex-auto bg-transparent justify-around text-palete ">
      <div className=" self-start py-3">
       
          <div className="flex flex-col absolute left-0 z-10 h-screen bg-search opacity-80 w-48 mt-4 ml-3">
            
              
            
            <div className="flex mt-24">
              <img className="w-7 h-9 cursor-pointer" src={tiktok} alt="" />
              
            </div>
            <div className="flex mt-4">
              <img className="w-7 h-9 cursor-pointer" src={facebook} alt="" />
              
            </div>
            <div className="flex mt-4">
              <img className="w-7 h-9 cursor-pointer" src={instagram} alt="" />
              
            </div>
          </div>
        
      </div>
      
      <div className="flex-auto flex justify-center  md:ml-36 transform -translate-x-2 md:-translate-x-8 lg:translate-x-11">
        <p className="shelby-logo-123 py-3 px-1 text-4xl hidden md:block">
          Shelby
        </p>
        <img src={logo} alt="" />
        <p className="shelby-logo-123 px-1 py-3 text-4xl hidden md:block  ">
          Boutique
        </p>
        
      </div>
      <div className="relative">
      <input
          className="hidden h-10 mt-3  mr-5 md:block rounded-3xl  font-mont text-black text-xl py-1 px-1 pl-8 bg-search"
          type="text"
          placeholder="Rechercher... "
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
       <svg className="w-8 h-8 absolute top-0 left-0 mt-4 hidden md:block" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
    </div>

    <div className="flex relative md:hidden">
      <input
        className="w-full rounded-3xl font-mont text-black text-xl py-1 px-1 pl-9 bg-search mx-2 "
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
      <svg className="w-8 h-8 absolute top-0 left-0 mt-1 ml-3  " fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    </div>
  </div> );
}
 
export default Nav;