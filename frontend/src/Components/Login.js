import hero from'../assets/home-img.png';
const Login = () => {
    return ( 
        <div className="flex ">
            <div className=' sm:visible flex-auto w-1/2'>
                <img className='h-screen' src={hero} alt="" />
            </div>
            <div className='bg-gray text-monteserrat flex-auto w-1/2 h-screen flex-col '>
                <h1 className='text-center'>Bonjour</h1>
                <div className=''>
                <p>Nom d'utilisateur</p>
                <input type="text" placeholder='Nom dutilisateur' />
                </div>
                <div className=''>
                <p>Mot de pass</p>
                <input type="password" placeholder='Mot de pass' />
                </div>
                <button className='bg-royal text-palete'>log in</button>
            </div>

        </div>
     );
}
 
export default Login;