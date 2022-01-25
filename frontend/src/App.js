import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Product from "./Components/Product";
import Login from "./Components/Login";
import AdminPage from "./Components/AdminPage";
import AddProductPage from "./Components/AddProductPage";
import Checkout from "./Components/Checkout";
import { CartContext, CartProvider } from "./contexts/panier";
import Vendre from "./Components/Vendre";
function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
          <Route exact path="/product/:ref" element={<Product />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/admin" element={<AdminPage />}></Route>
          <Route exact path="/vendor" element={<Vendre />}></Route>
          <Route
            exact
            path="/admin/addProduct"
            element={<AddProductPage />}
          ></Route>
          <Route exact path="/Checkout" element={<Checkout />}></Route>
        </Routes>
      </CartProvider>
      {/*<Footer /> */}
    </div>
  );
}

export default App;
