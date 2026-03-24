import "./Navbar.css";
import { Link } from "react-router-dom";
import Car3D from "./Car3D";

function Navbar({ cartCount, openCart }) {

  return (
    <nav className="navbar">
 
      <ul className="nav-links">
       <li><Link to="/">Home</Link></li>
       <li><Link to="/car3d">Cars 3D Model</Link></li>
       <li><Link to="/contact">Contact</Link></li>
      </ul>


      


      <div
        className={`cart-icon ${cartCount > 0 ? "cart-active" : ""}`}
        onClick={openCart}
        >
        CRT 🛒 {cartCount}
      </div>
      
    </nav>
  );
}

export default Navbar;