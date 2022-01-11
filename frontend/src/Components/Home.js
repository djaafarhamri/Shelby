import "./Home.css";
import heroImg from "../assets/hero.png";
import New from "./New";
import Trend from "./Trend";
import Hotacc from "./Hotacc";

const Home = () => {
  return (
    <div className="home">
      <div className="main">
        <div className="content">
          <div className="title">
            <h1>NIKE AIR FORCE 1</h1>
            <h2>React NBA</h2>
            <p>
              The wait is over. The new Air force 1 All Stars is here .A
              beautiful Design with react technologie
            </p>
          </div>
          <div className="info">
            <p>BRAND:</p>
            <p>MODEL:</p>
            <p>COLOR:</p>
            <p>PRICE:</p>
            <button>SHOP NOW</button>
          </div>
          <div className="heroImg">
            <img src={heroImg} alt="" />
          </div>
        </div>

        <div className="items">
          <New />
          <Trend />
          <Hotacc />
        </div>
      </div>
    </div>
  );
};

export default Home;
