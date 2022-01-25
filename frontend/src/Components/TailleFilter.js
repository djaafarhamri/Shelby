import axios from "axios";
import { useEffect, useState } from "react";

const ENDPOINT = "http://localhost:4000";
const TailleFilter = ({ tailles, setTailles }) => {
  const [allTailles, setAllTailles] = useState([]);
  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getallTailles`)
      .then((res) => {
        setAllTailles(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="genres border-b-2 border-black opacity-100 z-40 ">
      {allTailles &&
        allTailles.map((taille, i) => (
          <div key={i}>
            <div className="flex">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTailles([...tailles, taille]);
                  } else {
                    var index = tailles.indexOf(taille);
                    if (index !== -1) {
                      let arr;
                      arr = tailles.splice(index, 1);
                      setTailles(arr);
                    }
                  }
                }}
              />
              <p>{taille}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TailleFilter;
