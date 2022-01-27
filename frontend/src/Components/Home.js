import { Link } from "react-router-dom";
import hero from "../assets/home-img.png";
import Navbar from "./Navbar";
import "./Home.css"
const Home = () => {
  return (
    <div>
      {<Navbar />}
      <div className="font-monteserrat">
        <img
          className="h-[calc(100vh-4rem)] w-[calc(100%)] relative object-cover overflow-hidden"
          src={hero}
          alt=""
        />

        <h1 className="hidden md:inline-block  text-6xl lg:text-7xl xl:text-8xl rounded-sm font-bold tracking-wide	 bg-slate-400 fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-palete">
          Bienvenue{" "}
        </h1>
        <h1 className="hidden md:inline-block text-4xl lg:text-5xl xl:text-6xl absolute font-bold	tracking-wide  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-palete">
          Dans Votre Boutique{" "}
        </h1>
        <Link to='/products'>
          <button className="absolute text-2xl sm:text-3xl lg:text-4xl bg-palete bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl py-2 px-2 lg:py-3 lg:px-4">
            Découvrir
          </button>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
