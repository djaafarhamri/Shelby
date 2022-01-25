import Product from "./Product";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import GenreFilter from "./GenreFilter";
import MarqueFilter from "./MarqueFilter";
import TailleFilter from "./TailleFilter";
import PointureFilter from "./PointureFilter";
import CategorieFilter from "./CategorieFilter";
import { slide as Menu } from "react-burger-menu";
import "./Products.css";
const ENDPOINT = "http://localhost:4000";

const Products = () => {
  const [allMarques, setAllMarques] = useState([]);
  const [products, setProducts] = useState([]);
  const [genres, setGenres] = useState([]);
  const [marques, setMarques] = useState([]);
  const [tailles, setTailles] = useState([]);
  const [pointures, setPointures] = useState([]);
  const [allTailles, setAllTailles] = useState([]);
  const [allPointure, setAllPointure] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getallTailles`)
      .then((res) => {
        setAllTailles(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getallPointure`)
      .then((res) => {
        setAllPointure(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getAllMarques`)
      .then((res) => {
        setAllMarques(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .post(`${ENDPOINT}/api/getfilteredProducts`, {
        categories,
        genres,
        pointures,
        tailles,
        marques,
        allMarques,
        allPointure,
        allTailles,
      })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, [
    allMarques,
    allPointure,
    allTailles,
    categories,
    genres,
    marques,
    pointures,
    tailles,
  ]);
  const [isopen, setopen] = useState(false);

  return (
    <div className="">
      <Navbar />
      <div className="relative w-1/4 ">
        <div
          className=" flex border-2 rounded-xl sm:justify-between cursor-pointer"
          onClick={() => {
            setopen(!isopen);
          }}
        >
          <div className="flex  mx-2 my-1">
            <h1 className="text-xl">Filter</h1>
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              ></path>
            </svg>
          </div>
          <svg
            className="w-6 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
        <div
          className="absolute bg-gray z-30 w-64 h-screen"
          style={isopen ? { display: "none" } : { display: "inline" }}
          
        >
          <div className="relative ">
            <div className="flex justify-end">
              <svg
                onClick={() => {
                  setopen(!isopen);
                }}
                className="w-6 h-6 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
            <div className="flex ">
              <p className="font-monteserrat text-2xl"> Genres</p>
              <svg
                className="w-6 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            <GenreFilter genres={genres} setGenres={setGenres} />
          </div>
          <div className="relative">
            <div className="flex">
              <p className="font-monteserrat text-2xl"> Categorie</p>
              <svg
                className="w-6 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            <CategorieFilter
              categories={categories}
              setCategories={setCategories}
            />
          </div>
          <div className="relative">
            <div className="flex ">
              <p className="font-monteserrat text-2xl"> Marques</p>
              <svg
                className="w-6 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            <MarqueFilter
              marques={marques}
              setMarques={setMarques}
              allMarques={allMarques}
            />
          </div>
          <div className="relative">
            <div className="flex">
              <p className="font-monteserrat text-2xl"> Tailles</p>
              <svg
                className="w-6 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            <TailleFilter
              tailles={tailles}
              setTailles={setTailles}
              allTailles={allTailles}
            />
          </div>
          <div className="relative">
            <div className="flex">
              <p className="font-monteserrat text-2xl"> Pointures</p>
              <svg
                className="w-6 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            <PointureFilter
              pointures={pointures}
              setPointures={setPointures}
              allPointure={allPointure}
            />
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-5">
        {products &&
          products.map((product, index) => (
            <div className="group relative rounded-md  cursor-pointer ">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 ">
                <img
                  src={`${ENDPOINT}/${product.main_image}`}
                  alt=""
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full xl:w-full xl:h-full"
                />
              </div>
              <div className="mt-4  ">
                <div>
                  <h3 className="text-xl font-bold text-center font-monteserrat">
                    {product.title}
                  </h3>
                  <p className="text-lg font-extrabold text-center font-monteserrat">
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
