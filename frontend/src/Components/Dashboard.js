import { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";
import Recent from "./Recent";

const ENDPOINT = "http://localhost:4000";

const Dashboard = () => {
  const [dateStart, setDateStart] = useState();
  const [dateEnd, setDateEnd] = useState();
  const [yearlyProfit, setYearlyProfit] = useState(0);
  const [monthlyProfit, setMonthlyProfit] = useState(0);
  const [customProfit, setCustomProfit] = useState(0);
  const [showDate, setShowDate] = useState(false);
  const getProfit = () => {
    axios
      .post(`${ENDPOINT}/api/getProfitByDate`, {
        dateStart,
        dateEnd,
      })
      .then((res) => setCustomProfit(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .post(`${ENDPOINT}/api/getProfitByDate`, {
        dateStart: new Date(
          new Date().getFullYear() - 1,
          new Date().getMonth(),
          new Date().getDate()
        ),
        dateEnd: new Date(Date.now()),
      })
      .then((res) => setYearlyProfit(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .post(`${ENDPOINT}/api/getProfitByDate`, {
        dateStart: new Date(
          new Date().getFullYear(),
          new Date().getMonth() - 1,
          new Date().getDate()
        ),
        dateEnd: new Date(Date.now()),
      })
      .then((res) => setMonthlyProfit(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="dashboard">
      <div className="dashboard-options">
        <div className="revenue">
          <h3>la caisse</h3>
          <h3 style={{ color: "#27A041" }}>{0} DA</h3>
        </div>
        <div className="revenue">
          <h3>Earning(last month)</h3>
          <h3 style={{ color: "#27A041" }}>{monthlyProfit} DA</h3>
        </div>
        <div className="revenue">
          <h3>Earning(last year)</h3>
          <h3 style={{ color: "#27A041" }}>{yearlyProfit} DA</h3>
        </div>
        <div className="revenue">
          <h3>
            Earning(
            <button
              className="show-date-btn"
              onClick={() => {
                setShowDate(!showDate);
              }}
            >
              custom
            </button>
            )
          </h3>
          <h3 style={{ color: "#27A041" }}>{customProfit} DA</h3>
        </div>
      </div>
      {showDate && (
        <div className="date-picker">
          <img
            onClick={() => {
              setShowDate(false);
            }}
            src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"
            alt="close"
          />
          <h1>Date Picker</h1>
          <p>Date Start</p>
          <input
            type="date"
            onChange={(e) => {
              setDateStart(e.target.value);
            }}
          />
          <p>Date End</p>
          <input
            type="date"
            onChange={(e) => {
              setDateEnd(e.target.value);
            }}
          />
          <button onClick={getProfit}>Get</button>
        </div>
      )}
      <h2>produits récents vendus</h2>
      <Recent />
    </div>
  );
};

export default Dashboard;
