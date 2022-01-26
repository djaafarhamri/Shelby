import { useState } from "react";
import Atable from "./Atable";
import Ptable from "./Ptable";
import Otable from "./Otable";
import "./Vendre.css";
import Htable from "./Htable";
import Progress from "./Progress";

//! d -> Delivered
//! p -> Pending
//! o -> On Delivery
//! i -> In Progress

const Vendre = () => {
  const [selected, setSelected] = useState("a");

  return (
    <div className="vendre">
      <div className="admin-search">
        <input type="text" placeholder="Search here" />
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
          Pending
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
          On Delivery
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
          In Progress
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
          24 heurs
        </button>
      </div>
      <div className="table">
        {selected === "a" && (
          <div className="scroll">
            <h2>Vendre</h2>
            <Atable />
          </div>
        )}
        {selected === "p" && (
          <div className="scroll">
            <h2>Pending</h2>
            <Ptable />
          </div>
        )}
        {selected === "o" && (
          <div className="scroll">
            <h2>On Deleviry</h2>
            <Otable />
          </div>
        )}
        {selected === "i" && (
          <>
            <h2>In Progress</h2>
            <Progress />
          </>
        )}
        {selected === "24" && (
          <div className="scroll">
            <h2>24 heurs</h2>
            <Htable />
          </div>
        )}
      </div>
    </div>
  );
};

export default Vendre;
