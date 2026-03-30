import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DiscountPopup2() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const closePopup = () => {
    navigate(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      id: Date.now(),
      name,
      email
    };

    // ✅ TEMP storage (frontend only)
    const existing =
      JSON.parse(localStorage.getItem("discountEmails")) || [];

    existing.push(newEntry);

    localStorage.setItem("discountEmails", JSON.stringify(existing));

    console.log("Saved:", newEntry);

    closePopup();
  };

  return (
    <div className="popup-overlay">
      <div className="popup">

        {/* Close */}
        <span className="close" onClick={closePopup}>✖</span>

        <h3>
          17% off coupon will be sent to your email for your next purchase
        </h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="popup-buttons">
            <button type="button" onClick={closePopup}>
              Dismiss
            </button>

            <button type="submit">
              Submit
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}