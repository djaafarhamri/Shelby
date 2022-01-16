import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import AdminPage from "./Components/AdminPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/products" element={<Products />}></Route>
        <Route exact path="/admin" element={<AdminPage />}></Route>
      </Routes>
      { /*<Footer /> */}
    </div>
  );
}

export default App;
