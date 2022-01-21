import hero from'../assets/home-img.png';

const Login = () => {
    return ( 
        <div className="bg-gray grid grid-cols-2 ">
            <div className='hidden sm:block '>
                <img className='h-screen' src={hero} alt="" />
            </div>
            <div className='col-span-2 text-monteserrat  h-screen justify-self-center flex flex-col sm:col-span-1 '>
                <h1 className='text-center text-2xl mb-14 lg:text-3xl xl:text-5xl'>Bonjour</h1>
                <div className='my-4 text-xl lg:my-7 xl:my-9 xl:text-3xl'>
                <p className='py-2'>Nom d'utilisateur</p>
                <input type="text" className='h-8 lg:h-11 ' placeholder='Nom dutilisateur' />
                </div>
                <div className='mb-8 text-xl xl:mb-12 xl:text-3xl'>
                <p className='py-2'>Mot de pass</p>
                <input type="password" className='h-8 lg:h-11' placeholder='Mot de pass' />
                </div>
                <button className='bg-royal py-1 text-palete self-center rounded-md px-3 lg:w-24 text-xl xl:text-3xl xl:'>log-in</button>
            </div>

        </div>
     );
}
 
export default Login;