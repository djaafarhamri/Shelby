import { useEffect, useState, useContext, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import Navbar from "./Navbar";
import { CartContext } from "../contexts/panier";
const ENDPOINT = "http://localhost:4000";

const Product = () => {
  const nav = useNavigate();
  let tRef = useRef([])
  const [cart, setCart] = useContext(CartContext);
  const [images, setImages] = useState([]);
  const [product, setProduct] = useState([]);
  const [tailles, setTailles] = useState([]);
  const [colors, setColors] = useState([]);
  const [color, setColor] = useState('');
  const [taille, setTaille] = useState('');
  const [chosenT, setChosenT] = useState('');
  const [chosenC, setChosenC] = useState('');
  const { ref } = useParams();
  useEffect(() => {
    axios
      .post(`${ENDPOINT}/api/getColor`, {
        ref,
        taille,
      }, {withCredentials:true})
      .then((res) => {
        setColors(res.data)
        setColor(res.data[0])
        setChosenC(res.data[0])
      })
      .catch((err) => console.log(err));
  }, [ref, taille])
  // const getColor = (t) => {
  //   axios
  //     .post(`${ENDPOINT}/api/getColor`, {
  //       ref,
  //       taille: t,
  //     })
  //     .then((res) => setColors(res.data))
  //     .catch((err) => console.log(err));
  // };
  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getProductByrefF/${ref}`, {withCredentials:true})
      .then((res) => {
        console.log(res.data);
        setProduct(res.data.product[0]);
        setTailles(res.data.t);
        setTaille(res.data.t[0].t);
        setChosenT(res.data.t[0].t);
        setImages(res.data.product[0].second_images.split(","));
      })
      .catch((err) => console.log(err));
    // tRef.focus()
  }, [ref]);
  const ajouterPanier = () => {
    if (taille) {
      axios
        .post(`${ENDPOINT}/api/getProductByrefAndTaille`, {
          ref,
          taille,
          color
        }, {withCredentials:true})
        .then((res) => {
          console.log(res.data);
          setCart([...cart, res.data]);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="">
      <Navbar />
      <div className="h-screen flex">
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center overflow-y-hidden">
        <div className="grid grid-cols-2 gap-3 order-2 sm:order-1 overflow-y-scroll">
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
        <div className="order-1 sm:order-2 h-screen ">
          <h1 className="text-3xl font-monteserrat font-normal sm:text-6xl">
            {product.marque}
          </h1>
          <br />
          <h1 className="text-3xl font-monteserrat font-normal font-light sm:text-6xl">
            {product.title}
          </h1>
          <br />
          <h3 className="text-2xl font-monteserrat font-normal sm:text-4xl">
            {product.price} DA
          </h3>
          <br />
          <p className="font-monteserrat font-normal text-xl sm:text-2xl mt-2">
            {product.description}
          </p>
          <br />
          <div className="flex flex-wrap mt-3 h-auto">
            {tailles &&
              tailles.map(
                (t, i) =>
                  t.q !== 0 && (
                    <button
                      key={i}
                      onClick={() => {
                        setTaille(t.t);
                        setChosenT(t.t)
                      }}
                      type="button"
                      style={chosenT === t.t ? {backgroundColor: '#061701', color: 'rgb(248 250 252)'}:{backgroundColor: '#fff', color: '#000'}}
                      className="ring-1 ring-black  text-xl px-1 mx-3 "
                      >
                      {t.t}
                    </button>
                  )
                  )}
          </div>
          <div className="flex flex-wrap mt-3 h-auto">
            {colors &&
              colors.map((c, i) => (
                <button
                key={i}
                onClick={() => {
                  setColor(c);
                  setChosenC(c);
                }}
                type="button"
                style={chosenC === c ? {border: '2px solid'}:{border: '0'}}
                  className="ring-1 ring-black rounded-full overflow-y-hidden  text-xl  mx-3 "
                >
                  <div style={{backgroundColor: c, height: '40px', width: '40px'}}></div>
                </button>
              ))}
          </div>
          <br />
          <div className="flex justify-evenly my-6">
            <button
              onClick={() => {
                ajouterPanier();
                if (taille) {
                  nav("/checkout");
                }
              }}
              className="bg-royal text-palete text-xl sm:text-2xl  rounded-lg py-2 px-3"
            >
              Acheter
            </button>
            <button
              onClick={() => {
                ajouterPanier();
              }}
              className="bg-royal text-palete text-xl sm:text-2xl  rounded-lg py-2 px-3"
            >
              Ajouter au panier
            </button>
          </div>
          <br />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Product;
