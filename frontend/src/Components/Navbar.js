
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import panier from '../assets/panier.svg'
import userImg from '../assets/user.svg'

const Navbar = () => {
  return (
    <div className="flex bg-royal  justify-around text-palete">
      <div className="flex-auto flex justify-around pt-5">
        <Link to='/' className='font-montserrat text-slate-200'>HOT</Link>
        <Link to='/'className='font-montserrat text-slate-200'>Clothes</Link>
        <Link to='/'className='font-montserrat text-slate-200'>Shoes</Link>
        <Link to='/'className='font-montserrat text-slate-200'>Accessories</Link>
      </div>
      <div className="flex-auto flex place-content-center">
        <p className=" py-3 font-yellow-tail text-4xl ">Shelby</p>
        <img src={logo} alt="" />
        <p className='py-3 font-yellow-tail text-4xl  '>Boutique</p>
      </div>
      <div className="flex-auto flex justify-around py-3">
        <div className=''>
        <input type="text" className='rounded-xl h-6 my-2 text-black ' />

        </div>
        <img src={panier} alt="" className="h-8"/>
        <img src={userImg} alt="" className="h-8"/>
      </div>
    </div>
  );
};

export default Navbar;
