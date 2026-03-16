import { useState } from "react";
import Navbar from "./components/Navbar";
import PromoVideo from "./components/PromoVideo";
import Cars from "./pages/Cars";
import Cart from "./components/Cart";
import "./App.css";
import PromoVideo2 from "./components/PromoVideo2"; 
import VideoBground from "./components/VideoBground";   

function App() {

  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (car) => {
    setCart([...cart, car]);
  };

  const removeFromCart = (index) => {
    const updated = [...cart];
    updated.splice(index,1);
    setCart(updated);
  };

  return (
    <div>

      <Navbar
        cartCount={cart.length}
        openCart={() => setCartOpen(true)}
      />

      <PromoVideo />

      <Cars addToCart={addToCart} />

      <PromoVideo2 />
      <VideoBground />


      {cartOpen && (
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          closeCart={() => setCartOpen(false)}
        />
      )}

    </div>
  );
}

export default App;