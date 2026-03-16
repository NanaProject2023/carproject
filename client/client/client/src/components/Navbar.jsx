import "./Navbar.css";

function Navbar({ cartCount, openCart }) {

  return (
    <nav className="navbar">
 
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/cars">Cars</a></li>
        <li><a href="/contact">Contact</a></li>
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