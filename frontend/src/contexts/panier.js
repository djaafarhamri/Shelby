import * as React from "react";
import { useState } from "react";

const CartContext = React.createContext();
function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
