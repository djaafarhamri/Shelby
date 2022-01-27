import React, { useState } from "react";
import add from '../assets/add.svg'
import "./SizeForm.css";

function SizeForm(props) {
  const [taille, setTaille] = useState("");
  const [color, setColor] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const changeTaille = (event) => {
    setTaille(event.target.value);
  };

  const changeQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const changeColor = (event) => {
    setColor(event.target.value);
  };

  const transferValue = (event) => {
    event.preventDefault();
    if (quantity !== 0 && taille !== "" && color !== "") {
      const val = {
        taille,
        color,
        quantity,
      };
      props.func(val);
      clearState();
    }
  };

  const clearState = () => {
    setTaille("");
    setQuantity(0);
    setColor("");
  };

  return (
    <div className="tinput">
      <input type="text" value={taille} onChange={changeTaille} />
      <input type="color" value={color} onChange={changeColor} />
      <input type="number" min="0" value={quantity} onChange={changeQuantity} />
      <button onClick={transferValue}><img src={add} alt="" /></button>
    </div>
  );
}

export default SizeForm;
