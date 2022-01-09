import "./Home.css";
import heroImg from "../assets/hero.png";

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <div className="title">
          <h1>NIKE AIR FORCE 1</h1>
          <h2>React NBA</h2>
          <p>
            The wait is over. The new Air force 1 All Stars is here .A beautiful
            Design with react technologie
          </p>
        </div>
        <div className="heroImg">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
