import "./Navbar.css";
import { Link } from "react-router-dom";
import Car3d from "./Car3d";

function Navbar({ cartCount, openCart }) {

  return (
    <nav className="navbar">
 
      <ul className="nav-links">
       <li><Link to="/">HOME</Link></li>
       <li><Link to="/car3d">3D SHOW</Link></li>
       <li><Link to="/contact">CONTACT</Link></li>
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