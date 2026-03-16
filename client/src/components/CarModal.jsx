import { useState } from "react";
import "./CarModal.css";
import CarGallery from "./CarGallery";

function CarModal({ car, closeModal, addToCart }) {

  if (!car) return null;

  const [mainImage, setMainImage] = useState(car.image_url);

  const images = [
    car.image_url,
    car.image2,
    car.image3,
    car.image4,
    car.image5
  ];

  return (
    <div className="modal-overlay">

      <div className="modal">

        <button className="close-btn" onClick={closeModal}>
          ✕
        </button>

        <img
<<<<<<< HEAD
           src={`${import.meta.env.BASE_URL}assets/${car.image}`}
          alt={car.make}
=======
          src={`${import.meta.env.BASE_URL}assets/${mainImage}`}
>>>>>>> 0625a98 (misc)
          className="modal-image"
        />

        <CarGallery
          images={images}
          setMainImage={setMainImage}
        />

        <h2>{car.make} {car.model}</h2>

        <p>Year: {car.year}</p>

        <p className="modal-price">${car.price}</p>

        <button
          onClick={() => {
            addToCart(car);
            closeModal();
          }}
        >
          Add To Cart
        </button>

      </div>

    </div>
  );
}

export default CarModal;
