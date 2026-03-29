import { useState } from "react";
import Navbar from "./components/Navbar";
import PromoVideo from "./components/PromoVideo";
import Cars from "./pages/Cars";
import Cart from "./components/Cart";
import "./App.css";
import PromoVideo2 from "./components/PromoVideo2";
import VideoBground from "./components/VideoBground";
import FeedbackForm from "./components/FeedbackForm";
import Car3d from "./components/Car3d";
import CarHist from "./components/CarHist";
import { Routes, Route } from "react-router-dom";
import Popup from "./components/Popup";
import Contact from "./components/Contact";
import Footer from "./components/Footer";;


function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (car) => {
    setCart([...cart, car]);
  };

  const removeFromCart = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };

  return (
    <div>
     {/*<Popup />*/}
      <Navbar
        cartCount={cart.length}
        openCart={() => setCartOpen(true)}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <PromoVideo />
              <Cars addToCart={addToCart} />
              <PromoVideo2 />

              <div className="mmain-layout">
                <VideoBground />
                <CarHist />
                <FeedbackForm />
              </div>

              {cartOpen && (
                <Cart
                  cart={cart}
                  removeFromCart={removeFromCart}
                  closeCart={() => setCartOpen(false)}
                />
              )}
            </>
          }
        />

        <Route path="/car3d" element={<Car3d />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;