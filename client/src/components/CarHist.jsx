// CarHist.jsx
import { useEffect, useState } from "react";
import "./CarHist.css";

export default function CarHist() {
  const [cars, setCars] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
     fetch(`${import.meta.env.BASE_URL}assets/carhist.json`)
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cars.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? cars.length - 1 : prev - 1
    );
  };

  if (cars.length === 0) return <div>Loading...</div>;

  const car = cars[currentIndex];

  return (
    <div className="carousel-container">
      <button className="nav-btn left" onClick={prevSlide}>
        ◀
      </button>

      <div className="carousel-card">
        <img src={car.image} alt={car.title} />
        <h2>{car.title}</h2>
        <p>{car.price}</p>
      </div>

      <button className="nav-btn right" onClick={nextSlide}>
        ▶
      </button>
    </div>
  );
}


