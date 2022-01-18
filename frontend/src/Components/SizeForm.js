import React, { useState } from 'react';
  
function SizeForm(props) {
  const [taille, setTaille] = useState('');
  const [quantity, setQuantity] = useState(0);
  
  const changeTaille = (event) => {
    setTaille(event.target.value);
  };
  
  const changeQuantity = (event) => {
    setQuantity(event.target.value);
  };
  
  const transferValue = (event) => {
    event.preventDefault();
    if (quantity !== 0 && taille !== ''){
        const val = {
          taille,
          quantity,
        };
        props.func(val);
        clearState();
    }
  };
  
  const clearState = () => {
    setTaille('');
    setQuantity(0);
  };
  
  return (
    <div>
      <label>Taille</label>
      <input type="text" value={taille} onChange={changeTaille} />
      <label>Quantity</label>
      <input type="number" min='0' value={quantity} onChange={changeQuantity} />
      <button onClick={transferValue}> Ajouter</button>
    </div>
  );
}
  
export default SizeForm;