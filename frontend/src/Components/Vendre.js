import { useState, useEffect } from "react";
import Atable from "./Atable";
import Ptable from "./Ptable";
import Otable from "./Otable";
import "./Vendre.css";
import Htable from "./Htable";
import Progress from "./Progress";
import axios from "axios";

const ENDPOINT = "https://shelbyboutique.herokuapp.com";

const Vendre = () => {
  const [selected, setSelected] = useState("a");
  const [search, setSearch] = useState("");
  const [plen, setPlen] = useState(0);
  const [olen, setOlen] = useState(0);
  const [ilen, setIlen] = useState(0);
  const [hlen, setHlen] = useState(0);
  const [render, setRender] = useState(false);
  //! p -> Pending

  
  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getPending`, {withCredentials:true})
      .then((res) => {
        setPlen(res.data.length)
      })
      .catch((err) => console.log(err));
  }, [render]);
  
  //! o -> On Delivery

  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getDelivery`, {withCredentials: true})
      .then((res) => {
        setOlen(res.data.length)
      })
      .catch((err) => console.log(err));
  }, [render]);
  //! h -> Htable
  
  
  useEffect(() => {
    axios
    .get(`${ENDPOINT}/api/get24`, {withCredentials:true})
    .then((res) => {
      setHlen(res.data.length)
    })
    .catch((err) => console.log(err));
  }, [render]);
  //! i -> In Progress
  
  useEffect(() => {
    axios
      .get(`${ENDPOINT}/api/getProgress`, { withCredentials: true })
      .then((res) => {
        setIlen(res.data.length)
      })
      .catch((err) => console.log(err));
  }, [render]);

  return (
    <div className="vendre">
      <div className="admin-search">
        <input onChange={(e) => {setSearch(e.target.value)}} type="text" placeholder="Search here" />
      </div>
      <div className="options">
        <button
          onClick={() => {
            setSelected("a");
          }}
          style={
            selected === "a"
              ? { backgroundColor: "rgba(247, 233, 142, 1)" }
              : { backgroundColor: "white" }
          }
        >
          Vendre
        </button>
        <button
          onClick={() => {
            setSelected("p");
          }}
          style={
            selected === "p"
              ? { backgroundColor: "rgba(247, 233, 142, 1)" }
              : { backgroundColor: "white" }
          }
        >
          Pending ({plen})
        </button>
        <button
          onClick={() => {
            setSelected("o");
          }}
          style={
            selected === "o"
              ? { backgroundColor: "rgba(247, 233, 142, 1)" }
              : { backgroundColor: "white" }
          }
        >
          On Delivery ({olen})
        </button>
        <button
          onClick={() => {
            setSelected("i");
          }}
          style={
            selected === "i"
              ? { backgroundColor: "rgba(247, 233, 142, 1)" }
              : { backgroundColor: "white" }
          }
        >
          In Progress ({ilen})
        </button>
        <button
          onClick={() => {
            setSelected("24");
          }}
          style={
            selected === "24"
              ? { backgroundColor: "rgba(247, 233, 142, 1)" }
              : { backgroundColor: "white" }
          }
        >
          24 heurs ({hlen})
        </button>
      </div>
      <div className="table">
        {selected === "a" && (
          <div className="scroll">
            <h2>Vendre</h2>
            <Atable search={search} />
          </div>
        )}
        {selected === "p" && (
          <div className="scroll">
            <h2>Pending</h2>
            <Ptable search={search} />
          </div>
        )}
        {selected === "o" && (
          <div className="scroll">
            <h2>On Deleviry</h2>
            <Otable search={search} />
          </div>
        )}
        {selected === "i" && (
          <>
            <h2>In Progress</h2>
            <Progress search={search} />
          </>
        )}
        {selected === "24" && (
          <div className="scroll">
            <h2>24 heurs</h2>
            <Htable search={search} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Vendre;
