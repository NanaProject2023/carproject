import { useEffect, useState } from "react";
import CarCard from "../components/CarCard";
import CarModal from "../components/CarModal";
import "./Cars.css";

function Cars({ addToCart }) {

  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedYear, setSelectedYear] = useState("all");


useEffect(() => { 
  fetch(`${import.meta.env.BASE_URL}assets/cars.json`)
    .then(res => res.json())
    .then(data => setCars(data))
    .catch(err => console.error("Error loading cars:", err));
}, []);

const filteredCars = cars.filter(car =>
  selectedYear === "all" || car.year === Number(selectedYear)
);






  return (
    <div>


      <div className="filter-container">
        <label htmlFor="year-filter">Filter by Year:</label>
      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        <option value="all">Any</option>
        <option value="2026">2026</option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
      </select>
      </div>



      <div className="car-grid">
{/* 
        {cars.map(car => (
          <CarCard
            key={car.id}
            car={car}
            onView={() => setSelectedCar(car)}
            addToCart={() => addToCart(car)}
          />
        ))}
*/}

      {filteredCars.map(car => (
          <CarCard
            key={car.id}
            car={car}
            onView={() => setSelectedCar(car)}
            addToCart={() => addToCart(car)}
          />
        ))}


    </div>

      <CarModal
        car={selectedCar}
        closeModal={() => setSelectedCar(null)}
        addToCart={() => addToCart(selectedCar)}
      />

    </div>
  );
}

export default Cars;
