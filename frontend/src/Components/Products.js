import Product from "./Product";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import GenreFilter from "./GenreFilter";
import MarqueFilter from "./MarqueFilter";
import TailleFilter from "./TailleFilter";
import PointureFilter from "./PointureFilter";
import CategorieFilter from "./CategorieFilter";
const ENDPOINT = "http://localhost:4000";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [genres, setGenres] = useState([]);
  const [marques, setMarques] = useState([]);
  const [tailles, setTailles] = useState([]);
  const [pointures, setPointures] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getAllNoDuplProducts`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    console.log('genres : ', genres);
    console.log('marques : ', marques);
    console.log('categories : ', categories);
    console.log('tailles : ', tailles);
    console.log('pointures : ', pointures);
  }, [categories, genres, marques, pointures, tailles]);
  const [isopen,setopen]=useState(false);
  return (
    <div className="">
      <Navbar />
      <div className=" grid grid-cols-1 sm:grid-cols-[1fr_3fr]">
        <div className="products-page border-r-2 w-64 h-screen border-black justify-around">
          <div className="relative">
            <div className="flex">
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
            <div className="flex">
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
            <MarqueFilter marques={marques} setMarques={setMarques} />
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
            <TailleFilter tailles={tailles} setTailles={setTailles} />
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
            <PointureFilter pointures={pointures} setPointures={setPointures} />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-5">
          {products &&
            products.map((product, index) => (
              <div className="group relative rounded-md shadow-2xl ">
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
    </div>
  );
};

export default Products;
