import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Login from "./Components/Login";
import AdminPage from "./Components/AdminPage";
import AddProductPage from "./Components/AddProductPage";

function App() {
  return (
    <div className="App">
      <Routes>        
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/products" element={<Products />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="/admin" element={<AdminPage />}></Route>
        <Route exact path="/admin/addProduct" element={<AddProductPage />}></Route>
      </Routes>
      { /*<Footer /> */}
    </div>
  );
}

export default App;
