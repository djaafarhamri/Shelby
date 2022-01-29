import "./AddProductPage.css";
import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import TableData from "./TableData";
import axios from "axios";
const Barcode = require("react-barcode");
const ENDPOINT = "https://shelby-tau.vercel.app";

const AddProductPage = ({ setSelected }) => {
  const [nom, setNom] = useState("");
  const [descr, setDescr] = useState("");
  const [prixAch, setPrixAch] = useState(0);
  const [prix, setPrix] = useState(0);
  const [marque, setMarque] = useState("");
  const [genre, setGenre] = useState("Classic");
  const [categorie, setCategorie] = useState("Clothes");
  const [tailleQte, setTailleQte] = useState([]);
  const [ref, setRef] = useState("ref");
  const [selectedFile, setSelectedFile] = useState();
  const [selectedFiles, setSelectedFiles] = useState([]);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const changeHandler2 = (event) => {
    setSelectedFiles(event.target.files);
  };
  const ajouter = async () => {
    const formData = new FormData();
    const formData2 = new FormData();
    formData.append("productMainImage", selectedFile);

    for (const key of Object.keys(selectedFiles)) {
      formData2.append("productSecondImages", selectedFiles[key]);
    }

    await axios
      .post(`${ENDPOINT}/api/uploadMainImage`, formData, {withCredentials:true})
      .then((res) => {
        let path = res.data;
        axios
          .post(`${ENDPOINT}/api/uploadSecondImages`, formData2, {withCredentials:true})
          .then((res) => {
            let paths = res.data;
            for (let prod of tailleQte) {
              axios
                .post(`${ENDPOINT}/api/addProduct`, {
                  ref,
                  title: nom,
                  description: descr,
                  marque,
                  genre,
                  category: categorie,
                  prixAch,
                  price: prix,
                  taille: prod.taille,
                  color: prod.color,
                  quantity: prod.quantity,
                  main_image: path,
                  second_images: paths,
                }, {
                  withCredentials: true
                })
                .then((res) => {
                  setSelected("m");
                })
                .catch((err) => alert('err'));
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="add-product-page">
      <div className="add-up">
        <button
          onClick={() => {
            setSelected("m");
          }}
        >
          back
        </button>
        <h2>Ajouter un Produit</h2>
      </div>
      <div className="add-form">
        <p>Main image</p>
        <input type="file" onChange={changeHandler} />
        <p>secondary images</p>
        <input type="file" multiple onChange={changeHandler2} />
        <p>Nom</p>
        <input
          type="text"
          onChange={(e) => {
            setNom(e.target.value);
          }}
        />
        <p>Description</p>
        <input
          type="text"
          onChange={(e) => {
            setDescr(e.target.value);
          }}
        />
        <p>Prix d'achat</p>
        <input
          type="number"
          onChange={(e) => {
            setPrixAch(e.target.value);
          }}
        />
        <p>Prix de vente</p>
        <input
          type="number"
          onChange={(e) => {
            setPrix(e.target.value);
          }}
        />
        <p>Marque</p>
        <input
          type="text"
          onChange={(e) => {
            setMarque(e.target.value);
          }}
        />
        <p>Genre</p>
        <input
          type="text"
          onChange={(e) => {
            setGenre(e.target.value);
          }}
        />
        <p>Categorie</p>
        <input
          type="text"
          onChange={(e) => {
            setCategorie(e.target.value);
          }}
         />
        <p>Taille/Color/Quantity</p>
        <TableData setTailleQte={setTailleQte} tailleQte={tailleQte} />
        <p>Reference</p>
        <input
          type="text"
          onChange={(e) => {
            setRef(e.target.value);
          }}
        />
        <div ref={componentRef}>
          <Barcode value={ref} />
        </div>
        <button onClick={handlePrint}>Print this out!</button>
        <button className="ajouter-un-produit" onClick={ajouter}>
          Ajouter produit
        </button>
      </div>
    </div>
  );
};

export default AddProductPage;
