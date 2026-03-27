import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 MONACO LUX. All rights reserved.</p>

      <div className="social-icons">
        <a href="#">
          <FaFacebookF />
        </a>

        <a href="#">
          <FaInstagram />
        </a>

        <a href="#">
          <FaLinkedinIn />
        </a>

        <a href="#">
          <FaXTwitter />
        </a>
      </div>
    </footer>
  );
}