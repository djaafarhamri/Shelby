import logo from "../assets/logo.png";
import dashboard from "../assets/dashboard.png";
import warehouse from "../assets/warehouse.png";
import "./AdminPage.css";
import { useState } from "react";

const AdminPage = () => {
  const [selected, setSelected] = useState("d");
  const selectD = () => {
    setSelected("d");
  };

  const selectS = () => {
    setSelected("s");
  };

  return (
    <div className="admin-page">
      <div className="admin-route">
        <div className="admin-logo">
          <p>Shelby</p>
          <img src={logo} alt="" />
          <p>Boutique</p>
        </div>
        {selected === "d" ? (
          <div className="dashboard-buttons">
            <button className="dashboard-btn-s" onClick={selectD}>
              <img src={dashboard} alt="" /> Dashboard
            </button>
            <button className="dashboard-btn-n" onClick={selectS}>
              <img src={warehouse} alt="" /> Stock
            </button>
          </div>
        ):
          <div className="dashboard-buttons">
            <button className="dashboard-btn-n" onClick={selectD}>
              <img src={dashboard} alt="" /> Dashboard
            </button>
            <button className="dashboard-btn-s" onClick={selectS}>
              <img src={warehouse} alt="" /> Stock
            </button>
          </div>
        
        }
      </div>
    </div>
  );
};

export default AdminPage;
