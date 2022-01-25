import axios from "axios";
import { useEffect, useState } from "react";

const ENDPOINT = "http://localhost:4000";
const PointureFilter = ({ pointures, setPointures }) => {
  const [allPointure, setAllPointure] = useState([]);
  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getallPointure`)
      .then((res) => {
        setAllPointure(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    if(pointures.length === 0){
        setPointures(allPointure)
    }
}, [pointures, setPointures, allPointure])
  return (
    <div className="genres border-b-2 border-black opacity-100 z-40 ">
      {allPointure &&
        allPointure.map((pointure, i) => (
          <div key={i}>
            <div className="flex">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    setPointures([...pointures, pointure]);
                  } else {
                    var index = pointures.indexOf(pointure);
                    if (index !== -1) {
                      let arr;
                      arr = pointures.splice(index, 1);
                      setPointures(arr);
                    }
                  }
                }}
              />
              <p>{pointure}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PointureFilter;
