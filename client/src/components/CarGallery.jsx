import "./CarGallery.css";

function CarGallery({ images, setMainImage }) {
  return (
    <div className="gallery">

      {images.map((img, index) => (
        <img
          key={index}
          src={`${import.meta.env.BASE_URL}assets/${img}`}
          className="thumbnail"
          onClick={() => setMainImage(img)}
        />
      ))}

    </div>
  );
}

export default CarGallery;