import { useEffect, useState } from "react";
import CarCard from "../components/CarCard";
import CarModal from "../components/CarModal";

function Cars({ addToCart }) {

  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

useEffect(() => {
  fetch(`${process.env.PUBLIC_URL}assets/cars.json`)
    .then(res => res.json())
    .then(data => setCars(data));
}, []);

  return (
    <div>

      <div className="car-grid">

        {cars.map(car => (
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
      />

    </div>
  );
}

export default Cars;
