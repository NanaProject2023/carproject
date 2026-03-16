import "./CarModal.css";

function CarModal({ car, closeModal }) {

  if (!car) return null;

  return (
    <div className="modal-overlay">

      <div className="modal">

        <button className="close-btn" onClick={closeModal}>
          ✕
        </button>

        <img
           src={`${import.meta.env.BASE_URL}assets/${car.image}`}
          alt={car.make}
          className="modal-image"
        />

        <h2>{car.make} {car.model}</h2>

        <p>Year: {car.year}</p>

        <p className="modal-price">${car.price}</p>

      </div>

    </div>
  );
}

export default CarModal;
