import hero from'../assets/home-img.png';
import vest from'../assets/vest.JPG';
import sport from'../assets/sport.JPG';
import classic from'../assets/classic.JPG';
import Navbar from './Navbar';
const Home = () => {
  return ( 
   
  <div>
     {<Navbar />}
  <div className='relative '>
    <img className='h-[calc(100vh-4rem)] w-[calc(100%)]' src={hero} alt="" />
    <h1 className='text-6xl text-palete absolute -top-0 my-20 mx-8 font-montserrat'>Bienvenue,<br/> Dans shelby Boutique</h1>
    <div className='absolute -bottom-0 right-0 mr-12 mb-8 flex'>
    <h1 className=' text-palete font-montserrat text-4xl pr-2'>Enjoy</h1>
    <svg className="w-9 h-11 animate-bounce" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg>
    </div>
  </div>
  <div className=' grid grid-cols-1 auto-cols-auto  sm:grid-cols-2  text-palete font-montserrat'>
    <div className='relative hover:-translate-y-1 hover:scale-110 hover:z-10 sm:col-span-2'>
    <img className='' src={classic} alt="" />
    <p className='absolute -top-0 mt-40 ml-40'>Classic</p>
    </div>
    <div className='relative hover:-translate-y-1 hover:scale-110 hover:z-10' >
    <img className='' src={vest} alt="" />
    </div>
    <div className='relative hover:-translate-y-1 hover:scale-110 hover:z-10 ' >
    <img className='' src={sport} alt="" />
    </div>
  </div>
  <div>

  </div>
  </div> 
  )};

export default Home;
