import hero from'../assets/home-img.png';

import { useContext } from 'react';
import vest from'../assets/vest.JPG';
import sport from'../assets/sport.JPG';
import classic from'../assets/classic.JPG';
import Navbar from './Navbar';
const Home = () => {
  
  return ( 
   
  <div>
     {<Navbar />} 
     <div className='font-monteserrat'>
       <img className='h-[calc(100vh-4rem)] w-[calc(100%)] relative object-cover' src={hero} alt="" />
       <h1 className='absolute top-1/3 left-1/2 transform -translate-x-1/2 text-3xl sm:hidden text-palete'>Bienvenue De Votre Boutique </h1>
       <h1 className='hidden sm:block sm:text-4xl lg:text-6xl  absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-palete'>Bienvenue  </h1>
       <h1 className='hidden sm:block sm:text-4xl lg:text-5xl absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-palete'>Dand Votre Boutique  </h1>
       <button className='absolute text-2xl sm:text-3xl bg-palete bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl py-2 px-2'>découvrir</button>
     </div>
  <div>

  </div>
  </div> 
  )};

export default Home;
