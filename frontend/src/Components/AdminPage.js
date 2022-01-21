import logo from "../assets/logo.png";
import dashboard from "../assets/dashboard.png";
import warehouse from "../assets/warehouse.png";
import "./AdminPage.css";
import { useState } from "react";
import Vendre from "./Vendre";
import Stock from "./Stock";
import Dashboard from "./Dashboard";

const AdminPage = () => {
  const [selected, setSelected] = useState("d");
  const selectD = () => {
    setSelected("d");
  };

  const selectS = () => {
    setSelected("s");
  };

  const selectV = () => {
    setSelected("v");
  };

  return (
    <div className="admin-page">
      <div className="admin-route">
        <div className="admin-logo">
          <p>Shelby</p>
          <img src={logo} alt="" />
          <p>Boutique</p>
        </div>
        {selected === "d" && (
          <div className="dashboard-buttons">
            <button className="dashboard-btn-s" onClick={selectD}>
              <img src={dashboard} alt="" /> Dashboard
            </button>
            <button className="dashboard-btn-n" onClick={selectS}>
              <img src={warehouse} alt="" /> Stock
            </button>
            <button className="dashboard-btn-n" onClick={selectV}>
              <img src={warehouse} alt="" /> Vendre
            </button>
          </div>
        )}{ selected === "s" && (
          <div className="dashboard-buttons">
            <button className="dashboard-btn-n" onClick={selectD}>
              <img src={dashboard} alt="" /> Dashboard
            </button>
            <button className="dashboard-btn-s" onClick={selectS}>
              <img src={warehouse} alt="" /> Stock
            </button>
            <button className="dashboard-btn-n" onClick={selectV}>
              <img src={warehouse} alt="" /> Vendre
            </button>
          </div>
        )}
        { selected === "v" && (
          <div className="dashboard-buttons">
            <button className="dashboard-btn-n" onClick={selectD}>
              <img src={dashboard} alt="" /> Dashboard
            </button>
            <button className="dashboard-btn-n" onClick={selectS}>
              <img src={warehouse} alt="" /> Stock
            </button>
            <button className="dashboard-btn-s" onClick={selectV}>
              <img src={warehouse} alt="" /> Vendre
            </button>
          </div>
        )}
      </div>
      {selected === "d" && (
        <div className="admin-content">
          <Dashboard />
        </div>
      )}
      {selected === "s" && (
        <div className="admin-content">
          <Stock />
        </div>
      )}
      {selected === "v" && (
        <div className="admin-content">
          <Vendre />
        </div>
      )}
    </div>
  );
};

export default AdminPage;
