import React, { useEffect, useState } from "react";
import "./Car3D.css";
import LeftAd3D from "./LeftAd3d";






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
   
    
    <LeftAd3D />
    
    
    
  );
}