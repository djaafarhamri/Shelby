
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import panier from '../assets/panier.svg'
import userImg from '../assets/user.svg'
import { useState } from 'react'

const Navbar = () => {
  const[open,isopen]=useState(false)

  return (
    <div className="flex bg-royal  justify-around text-palete ">
      <div className="flex-auto self-start   py-3">
      <svg onClick={()=>isopen(!open)} className="w-8 h-8 relative " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      { open && <div className='flex flex-col absolute left-0 z-10 h-screen bg-royal w-48 '>
        <p className='py-1 divide-y-2 divide-pallete'>Home</p>
        <p className='py-1 divide-y-2 divide-pallete'>les contacts</p>
        <p className='py-1'>Tiktok</p>
        <p className='py-1'>Facebook</p>
        <p className='py-1'>Instagram</p>
      </div> }
      </div>
      <div className="flex-auto flex place-content-center ">
        <p className=" py-3 font-yellow-tail text-4xl hidden sm:block">Shelby</p>
        <img src={logo} alt="" />
        <p className='py-3 font-yellow-tail text-4xl hidden sm:block '>Boutique</p>
      </div>
      <div className="flex-auto flex justify-around py-3">
        <div className=''>
       
        </div>
        <img src={panier} alt="" className="h-6 sm:h-8"/>
        <img src={userImg} alt="" className="h-6 sm:h-8"/>
      </div>
    </div>
  );
};

export default Navbar;
