import hero from "../assets/home-img.png";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <img src={hero} alt="" />
        <h1 className="text-6xl text-palete absolute -top-0 my-20 mx-8 font-montserrat">
          Bienvenue,
          <br /> Dans shelby Boutique
        </h1>
      </div>
    </div>
  );
};

export default Home;
