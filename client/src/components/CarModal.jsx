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

          src={`${import.meta.env.BASE_URL}assets/${mainImage}`}

          className="modal-image"
        />

        <CarGallery
          images={images}
          setMainImage={setMainImage}
        />

        <h2>{car.make} {car.model}</h2>

        <p>Year: {car.year}</p>

        <p className="modal-price">${car.price}</p>

        <button className="add-to-cartt"
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
