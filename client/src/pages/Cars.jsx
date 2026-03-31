import { useEffect, useState } from "react";
import CarCard from "../components/CarCard";
import CarModal from "../components/CarModal";
import "./Cars.css";

function Cars({ addToCart }) {

  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState("any");
  const [selectedYear, setSelectedYear] = useState("any");
  const [activeCar, setActiveCar] = useState(null);


useEffect(() => { 
  fetch(`${import.meta.env.BASE_URL}assets/cars.json`)
    .then(res => res.json())
    .then(data => setCars(data))
    .catch(err => console.error("Error loading cars:", err));
}, []);

const filteredCars = cars.filter((car) => {
  const matchYear =
    selectedYear === "any" || car.year.toString() === selectedYear;

  const matchCar =
    selectedCar === "any" ||
    car.brand?.toLowerCase() === selectedCar.toLowerCase();

  return matchYear && matchCar;
});




  return (
    <div>


      <div className="filter-container">
        <label htmlFor="year-filter">Filter by Year:</label>
      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        <option value="any">Any</option>
        <option value="2026">2026</option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
      </select>

      <label htmlFor="car-filter">Filter by Car:</label>
      <select
        value={selectedCar}
        onChange={(e) => setSelectedCar(e.target.value)}
      >
         <option value="any">Any</option>
         <option value="Mercedes">Mercedes</option>
         <option value="Lamborghini">Lamborghini</option>
         <option value="Porsche">Porsche</option>
         <option value="Audi">Audi</option>
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
            onView={() => setActiveCar(car)}
            addToCart={() => addToCart(car)}
          />
        ))}


    </div>

      <CarModal
        car={activeCar}
        closeModal={() => setActiveCar(null)}
        addToCart={() => addToCart(activeCar)}
      />

    </div>
  );
}

export default Cars;
