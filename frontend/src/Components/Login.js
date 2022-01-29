import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import hero from "../assets/login.JPG";

const ENDPOINT = "https://shelby-tau.vercel.app";

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
      <div className="col-span-2   h-screen justify-self-center flex flex-col sm:col-span-1 font-mont ">
        <h1 className="text-center  mb-14 font-medium text-6xl mt-6">
          Bonjour,
        </h1>
        <div className="my-4  lg:my-7 xl:my-9 text-3xl">
          <p className="py-2">Nom d'utilisateur</p>
          <input
            type="text"
            className="py-2 px-2 rounded-xl lg:w-96 "
            placeholder="Nom dutilisateur"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="mb-8  xl:mb-12 text-3xl">
          <p className="py-2">Mot de pass</p>
          <input
            type="password"
            className=" py-2 px-2 lg:w-96 rounded-xl"
            placeholder="Mot de pass"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          onClick={login}
          className="bg-royal py-3 text-palete self-center rounded-xl px-6  text-3xl "
        >
          log-in
        </button>
      </div>
    </div>
  );
};

export default Login;
