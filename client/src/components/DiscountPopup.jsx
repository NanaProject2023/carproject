import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DiscountPopup.css";

export default function DiscountPopup() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const res = await fetch(`${import.meta.env.BASE_URL}assets/discount.json`);
        const data = await res.json();
        setMessage(data.message);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMessage();
  }, []);

  const closePopup = () => {
    navigate(-1); // go back
  };

  return (
    <div className="popup-overlay">
      <div className="popup">

        {/* X button */}
        <span className="close" onClick={closePopup}>
          ✖
        </span>

        <p>{message}</p>

        <div className="popup-buttons">
          <button onClick={closePopup}>
            Dismiss
          </button>

          <button onClick={() => alert("Form coming next")}>
            Claim
          </button>
        </div>

      </div>
    </div>
  );
}