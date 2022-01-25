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
  <div className=' grid  grid-cols-1 auto-cols-auto  sm:grid-cols-3 h-screen text-palete font-montserrat'>
    <div className='relative '>
    <img className='object-cover object-center w-full h-full' src={classic} alt="" />
    <p className='opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl'>Classic</p>
    </div>
    <div className='relative' >
    <img className='object-cover w-full h-full' src={vest} alt="" />
    <p className='opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl'>Vest</p>
    </div>
    <div className='relative ' >
    <img className='object-cover w-full h-full' src={sport} alt="" />
    <p className='opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl'>Sport</p>
    </div>
  </div>
  <div>

  </div>
  </div> 
  )};

export default Home;
