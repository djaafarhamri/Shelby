import "./Navbar.css";
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import panier from '../assets/panier.svg'
import userImg from '../assets/user.svg'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav">
        <Link to='/'>HOT</Link>
        <Link to='/'>Clothes</Link>
        <Link to='/'>Shoes</Link>
        <Link to='/'>Accessories</Link>
      </div>
      <div className="logo">
        <p>Shelby</p>
        <img src={logo} alt="" />
        <p>Boutique</p>
      </div>
      <div className="navact">
        <input type="text"  />
        <img src={panier} alt="" />
        <img src={userImg} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
