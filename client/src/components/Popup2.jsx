import { useEffect, useState } from "react";
import "./Popup2.css";

export default function Popup2() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch message from JSON
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}assets/ghrestriction.json`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  // Timer (6 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="close-btn" onClick={() => setShow(false)}>
          ✕
        </button>

        <p>{message}</p>
      </div>
    </div>
  );
}