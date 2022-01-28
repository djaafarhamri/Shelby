import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import GenreFilter from "./GenreFilter";
import MarqueFilter from "./MarqueFilter";
import TailleFilter from "./TailleFilter";
import PointureFilter from "./PointureFilter";
import CategorieFilter from "./CategorieFilter";
import { useSearchParams } from "react-router-dom";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const nav = useNavigate()
  let search = searchParams.get("s");
  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getallTailles`, {withCredentials:true})
      .then((res) => {
        setAllTailles(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getallPointure`, {withCredentials:true})
      .then((res) => {
        setAllPointure(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getAllMarques`, {withCredentials:true})
      .then((res) => {
        setAllMarques(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .post(`${ENDPOINT}/api/getfilteredProducts/?search=${search}`, {
        categories,
        genres,
        pointures,
        tailles,
        marques,
        allMarques,
        allPointure,
        allTailles,
      }, {withCredentials:true})
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, [allMarques, allPointure, allTailles, categories, genres, marques, pointures, search, tailles]);
  const [isopen, setopen] = useState(true);
  const [filter1, isfilter1] = useState(false);
  const [filter2, isfilter2] = useState(false);
  const [filter3, isfilter3] = useState(false);
  const [filter4, isfilter4] = useState(false);
  const [filter5, isfilter5] = useState(false);
  const [filter6, isfilter6] = useState(false);
  return (
    <div className="">
      <Navbar />
      <div>
        <button className="rounded-full fixed bottom-0 right-0 mr-4 mb-4"><svg className="w-10 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path></svg></button>
      </div>
      <div className="relative w-1/4  ">
        <div
          className=" flex border-2 rounded-xl sm:justify-between cursor-pointer mt-2 ml-2"
          onClick={() => {
            setopen(!isopen);
          }}
        >
          <div className="flex  mx-2 my-1">
            <h1 className="text-xl md:text-2xl">Filtrer</h1>
            <svg
              className="w-6 h-8 hidden sm:block"
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
            className="w-6 h-8 "
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
          className="absolute bg-palete opacity-90 z-30 w-64 lg:w-72 h-screen"
          style={isopen ? { display: "none" } : { display: "inline" }}
        >
          <div className="relative ">
            <div className="flex justify-end mr-1 ">
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
            <div className="flex mb-2 ml-2" 
            onClick={()=>{isfilter1(!filter1)}}
            >
              <p className="font-monteserrat text-3xl font-semibold"> Genres</p>
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
            {filter1 && <GenreFilter genres={genres} setGenres={setGenres} />}
          </div>
          <div className="relative ">
            <div className="flex mb-2 ml-2" 
            onClick={()=>{isfilter2(!filter2)}}>
              <p className="font-monteserrat text-3xl font-semibold"> Categorie</p>
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
            {filter2 && <CategorieFilter
              categories={categories}
              setCategories={setCategories}
            />}
          </div>
          <div className="relative">
            <div className="flex mb-2 ml-2"
             onClick={()=>{isfilter3(!filter3)}}>
              <p className="font-monteserrat text-3xl font-semibold"> Marques</p>
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
            {filter3 && <MarqueFilter
              marques={marques}
              setMarques={setMarques}
              allMarques={allMarques}
            />}
          </div>
          <div className="relative">
            <div className="flex mb-2 ml-2"
             onClick={()=>{isfilter4(!filter4)}}>
              <p className="font-monteserrat text-3xl font-semibold"> Tailles</p>
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
            {filter4 &&<TailleFilter
              tailles={tailles}
              setTailles={setTailles}
              allTailles={allTailles}
            />}
          </div>
          <div className="relative">
            <div className="flex mb-2 ml-2"
             onClick={()=>{isfilter5(!filter5)}}>
              <p className="font-monteserrat text-3xl font-semibold"> Pointures</p>
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
            {filter5 &&<PointureFilter
              pointures={pointures}
              setPointures={setPointures}
              allPointure={allPointure}
            />}
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3  gap-x-3 gap-y-5">
        {products &&
          products.map((product, i) => (
            <div 
            key={i}
            onClick={() => {nav(`/product/${product.ref}`)}}
            className="group relative rounded-md  cursor-pointer ">
              <div className="w-full min-h-60  bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 ">
                <img
                  src={`${ENDPOINT}/${product.main_image}`}
                  alt=""
                  className="w-full h-full  object-center object-cover lg:w-full lg:h-full xl:w-full xl:h-full"
                />
              </div>
              <div className="mt-4  ">
                <div>
                  <h3 className="text-xl md:text-3xl font-semibold text-center font-monteserrat">
                    {product.title}
                  </h3>
                  <p className="text-xl md:text-3xl font-light text-center">grey red jordan </p>
                  <p className="text-xl md:text-2xl font-semibold text-center font-monteserrat">
                    {product.price } DA
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
