import "./AddProductPage.css";
import { useState } from 'react'

const AddProductPage = ({ setSelected }) => {
    const [nom, setNom] = useState('')
    const [descr, setsetDescr] = useState('')
    const [prixAch, setPrixAch] = useState('')
    const [prix, setPrix] = useState('')
    const [marque, setMarque] = useState('')
    const [genre, setGenre] = useState('')
    const [categorie, setCategorie] = useState('')
    const [subCategorie, setSubCategorie] = useState('')
    const [ref, setRef] = useState('')
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
        <p>Nom</p>
        <input type="text" onChange={(e) => {setNom(e.target.value)}}/>
        <p>Description</p>
        <input type="text" onChange={(e) => {setsetDescr(e.target.value)}}/>
        <p>Prix d'achat</p>
        <input type="text" onChange={(e) => {setPrixAch(e.target.value)}}/>
        <p>Prix de vente</p>
        <input type="text" onChange={(e) => {setPrix(e.target.value)}}/>
        <p>Marque</p>
        <input type="text" onChange={(e) => {setMarque(e.target.value)}}/>
        <p>Genre</p>
        <select id="Genre" name="Genre" onChange={(e) => {setGenre(e.target.value)}}>
          <option value="australia">Classic</option>
          <option value="canada">Sport</option>
          <option value="Semi-Classic">Semi-Classic</option>
        </select>
        <p>Categorie</p>
        <input type="text" onChange={(e) => {setCategorie(e.target.value)}}/>
        <p>Sub-Categorie</p>
        <input type="text" onChange={(e) => {setSubCategorie(e.target.value)}}/>
        <p>Reference</p>
        <input type="text" onChange={(e) => {setRef(e.target.value)}}/>
      </div>
    </div>
  );
};

export default AddProductPage;
