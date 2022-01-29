import { Link } from "react-router-dom";
import Nav from "./Nav";
const Home = () => {
  return (
    <div className="bg-hero-pattern h-screen w-screen bg-no-repeat bg-center bg-cover">
      {<Nav />}
      <div  className="  font-mont">
        <div className="text-center tracking-wide text-5xl md:text-6xl mt-44 lg:text-7xl xl:text-8xl  font-bold text-palete ">
          <h1>Bienvenue</h1>
        </div>
        <div className="text-center tracking-wide text-5xl md:text-6xl mt-2 md:mt-6  lg:text-7xl xl:text-8xl  font-bold text-palete">
          <h1 className="">Dans Votre Boutique</h1>
        </div>

       <div className="flex justify-center mt-10 md:mt-20">
        <Link to='/products'>
          <button className=" text-3xl font-bold  lg:text-5xl bg-palete  rounded-3xl py-3 px-5 lg:py-5 lg:px-10">
          Savoir Plus
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
