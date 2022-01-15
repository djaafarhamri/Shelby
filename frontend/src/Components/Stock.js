import { useState } from "react";
import Atable from "./Atable";
import Ptable from "./Ptable";
import "./Stock.css";

//! d -> Delivered
//! p -> Pending
//! o -> On Delivery
//! i -> In Progress
//! r -> Returened

const Stock = () => {
  const [selected, setSelected] = useState("a");

  return (
    <div className="stock">
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
          All Products
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
            setSelected("r");
          }}
          style={
            selected === "r"
              ? { backgroundColor: "rgba(247, 233, 142, 1)" }
              : { backgroundColor: "white" }
          }
        >
          Returened
        </button>
      </div>
      <div className="table">
        {selected === "a" && (
          <>
            <h2>All Products</h2>
            <Atable />
          </>
        )}
        {selected === "p" && (
          <>
            <h2>Pending</h2>
            <Ptable />
          </>
        )}
        {selected === "o" && <h2>On Deleviry</h2>}
        {selected === "i" && <h2>In Progress</h2>}
        {selected === "r" && <h2>Returned</h2>}
      </div>
    </div>
  );
};

export default Stock;
