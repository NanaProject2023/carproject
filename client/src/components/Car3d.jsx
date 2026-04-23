import { useEffect, useState } from "react";
import "./Car3d.css";
import LeftAd3D from "./LeftAd3D";
import RightAd3D from "./RightAd3D";
import Popup2 from "./Popup2";






export default function Car3d() {
  const [cars, setCars] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch JSON
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}assets/electedcars.json`)
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.error("Error loading cars:", err));
  }, []);

  const nextCar = () => {
    setCurrentIndex((prev) => (prev + 1) % cars.length);
  };

  const prevCar = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? cars.length - 1 : prev - 1
    );
  };

  if (cars.length === 0) return <p>Loading 3D cars...</p>;

  const currentCar = cars[currentIndex];

  return (
   <>
    
    <Popup2 />

    <LeftAd3D />

    <div className="car3D-container">

    <model-viewer
  key={currentCar.id}
  src={`${import.meta.env.BASE_URL}${currentCar.model}`}
  auto-rotate
  camera-controls
  style={{ width: "100%", height: "400px", pointerEvents: "auto" }}
></model-viewer>

      <div style={{ marginTop: "10px" }}>
        <button onClick={prevCar}>Prev 3D</button>
        <button onClick={nextCar}>Next 3D</button>
      </div>

    </div>
   

    <RightAd3D />
    

    
  </>  
    
  );
}