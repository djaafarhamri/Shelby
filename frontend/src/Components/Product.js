import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Navbar from "./Navbar";
import jordan from "../assets/jordan.jpg";
const ENDPOINT = "http://localhost:4000";

const Product = () => {
  const [images, setImages] = useState([]);
  const [product, setProduct] = useState([]);
  const [tailles, setTailles] = useState([]);
  const { ref } = useParams();
  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getProductByrefF/${ref}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data.product[0]);
        setTailles(res.data.tailles);
        setImages(res.data.product[0].second_images.split(","));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="">
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center ">
        <div className="grid grid-cols-2 gap-3 order-2 sm:order-1">
          <img
            className="col-span-2 w-full h-full object-center object-cover lg:w-full lg:h-full xl:w-full xl:h-full"
            src={`${ENDPOINT}/${product.main_image}`}
            alt=""
          />
          {images &&
            images.map((image, i) => (
              <img
                key={i}
                className="w-full h-full object-center object-cover lg:w-full lg:h-full xl:w-full xl:h-full"
                src={`${ENDPOINT}/${image}`}
                alt=""
              />
            ))}
        </div>
        <div className="order-1 sm:order-2">
          <h1 className="text-2xl font-monteserrat font-normal sm:text-6xl">
            {product.marque}
            <br></br>
            {product.title}
          </h1>
          <h3 className="text-xl font-monteserrat font-normal sm:text-4xl">
            {product.price} DA
          </h3>
          <p className="text-base font-monteserrat font-normal sm:text-xl mt-2">
            {product.description}
          </p>
          <div className="flex mt-3 justify-around">
            <h3 className="font-medium font-monteserrat text-lg sm:text-2xl">
              -les taille:
            </h3>
            {tailles &&
              tailles.map(
                (t, i) =>
                  t.q !== 0 && (
                    <>
                      <span className="ring-1 ring-black w-9 px-2 py-1 text-2xl">
                        {t.t}
                      </span>
                    </>
                  )
              )}
          </div>
          <div className="flex justify-evenly my-6">
            <button className="bg-royal text-palete text-lg sm:text-2xl  rounded-lg py-2 px-3">
              Acheter
            </button>
            <button className="bg-royal text-palete text-lg sm:text-2xl  rounded-lg py-2 px-3">
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
