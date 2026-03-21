import React, { useEffect, useState } from "react";
import "./Car3D.css";





export default function Car3D() {
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
    <div className="car3D-container">
      <h2>{currentCar.month} Car of the Month (3D Modeling Demo)</h2>
      <h3>{currentCar.car_name}</h3>

      <model-viewer
        src={currentCar.model}
        alt={currentCar.car_name}
        auto-rotate
        camera-controls
        style={{ width: "100%", height: "400px" }}
      ></model-viewer>

      <div className="controls">
        <button onClick={prevCar}>⬅ Prev</button>
        <button onClick={nextCar}>Next ➡</button>
      </div>
    </div>
  );
}