import React from 'react';
import SizeForm from './SizeForm';
  
function TableData({setTailleQte, tailleQte}) {
  
  const tableRows = tailleQte.map((info, key) => {
    return (
      <tr key={key}>
        <td style={{border: '1px solid'}}>{info.taille}</td>
        <td style={{border: '1px solid'}}>{info.color}</td>
        <td style={{border: '1px solid'}}>{info.quantity}</td>
        <td><button onClick={() => {del(key)}}>del</button></td>
      </tr>
    );
  });
  
  const addRows = (data) => {
    const updatedtailleQte = [...tailleQte];
    updatedtailleQte.push(data);
    setTailleQte(updatedtailleQte);
  };
  
  const del = (data) => {
    setTailleQte((names) => names.filter((_, i) => i !== data))
  };
  
  return (
    <div>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>Taille</th>
            <th>color</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <SizeForm func={addRows} />
    </div>
  );
}
  
export default TableData;