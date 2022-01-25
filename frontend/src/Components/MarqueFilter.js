import axios from "axios";
import { useEffect, useState } from "react";
const ENDPOINT = "http://localhost:4000";
const MarqueFilter = ({ marques, setMarques }) => {
  const [allMarques, setAllMarques] = useState([]);
  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getAllMarques`)
      .then((res) => {
        setAllMarques(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="genres border-b-2 border-black opacity-100 z-40 ">
      {allMarques &&
        allMarques.map((marque, i) => (
          <div key={i}>
            <div className="flex">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    setMarques([...marques, marque]);
                  } else {
                    var index = marques.indexOf(marque);
                    if (index !== -1) {
                      let arr;
                      arr = marques.splice(index, 1);
                      setMarques(arr);
                    }
                  }
                }}
              />
              <p>{marque}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MarqueFilter;
