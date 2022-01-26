import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import hero from "../assets/home-img.png";

const ENDPOINT = "http://localhost:4000";

const Login = () => {
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    axios
      .post(`${ENDPOINT}/api/login`, {
        username,
        password,
      }, {
          withCredentials: true
      })
      .then((res) => {
        console.log(res.cookie);
        if (res.data.role === "admin") {
          nav("/admin");
        } else if (res.data.role === "manager") {
          nav("/vendor");
        }
      });
  };

  return (
    <div className="bg-gray grid grid-cols-2 ">
      <div className="hidden sm:block ">
        <img className="h-screen" src={hero} alt="" />
      </div>
      <div className="col-span-2 text-monteserrat  h-screen justify-self-center flex flex-col sm:col-span-1 ">
        <h1 className="text-center text-2xl mb-14 lg:text-3xl xl:text-5xl">
          Bonjour
        </h1>
        <div className="my-4 text-xl lg:my-7 xl:my-9 xl:text-3xl">
          <p className="py-2">Nom d'utilisateur</p>
          <input
            type="text"
            className="h-8 lg:h-11 "
            placeholder="Nom dutilisateur"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="mb-8 text-xl xl:mb-12 xl:text-3xl">
          <p className="py-2">Mot de pass</p>
          <input
            type="password"
            className="h-8 lg:h-11"
            placeholder="Mot de pass"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          onClick={login}
          className="bg-royal py-1 text-palete self-center rounded-md px-3 lg:w-24 text-xl xl:text-3xl xl:"
        >
          log-in
        </button>
      </div>
    </div>
  );
};

export default Login;
