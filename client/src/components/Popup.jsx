
import { useEffect, useState } from "react";
import "./Popup.css";

export default function Popup() {
  const [visible, setVisible] = useState(false);
//  const [data, setData] = useState([]); this is for initial index
  const [data, setData] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  /*
  useEffect(() => {
    // Fetch popup data always pointing to the same initial index
    fetch(`${import.meta.env.BASE_URL}assets/popupinfo.json`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
    */

  useEffect(() => {
    // Fetch popup data random index 
    fetch(`${import.meta.env.BASE_URL}assets/popupinfo.json`)
      .then((res) => res.json())
//    .then((json) => setData(json))
      .then((json) => {
        const randomIndex = Math.floor(Math.random() * json.length);
        const randomItem = json[randomIndex];
        setData(randomItem);
        })
      .catch((err) => console.error(err))




    // Show popup after 6 seconds
    const timer = setTimeout(() => {
      setVisible(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setVisible(false);
  };

  //if (!visible || data.length === 0) return null; this for initial index
  //const item = data[currentIndex];

  if (!visible || !data) return null;

   const item = data;



  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="close-btn" onClick={closePopup}>
          ✕
        </button>

        <img src={item.image} alt={item.title} className="popup-image" />

        <h2>{item.title}</h2>
        <p>{item.description}</p>

        <div className="popup-actions">
          <button className="learn-btn">Learn More</button>
          <button className="dismiss-btn" onClick={closePopup}>
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}


