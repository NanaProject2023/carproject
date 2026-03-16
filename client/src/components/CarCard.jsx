import "./CarCard.css";


function CarCard({ car, onView, addToCart }) {

  return (
    <div className="car-card">

      <img
        src={`${import.meta.env.BASE_URL}assets/${car.image_url}`} 

        alt={car.make}
        className="car-image"
      />

      <div className="car-info">
        <h3>{car.make} {car.model}</h3>
        <p>Year: {car.year}</p>
        <p className="price">${car.price}</p>
      </div>

      <div className="card-buttons">

        <button className="view-btn" onClick={onView}>
          View
        </button>

        <button className="cart-btn" onClick={addToCart}>
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default CarCard;
