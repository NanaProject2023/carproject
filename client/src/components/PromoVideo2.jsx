import "./PromoVideo2.css";

function PromoVideo2() {
  return (
    <div className="promo-video-container">

      <video
        className="promo-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source  src={`${import.meta.env.BASE_URL}assets/promo2.mp4`}  type="video/mp4" />
      </video>

    </div>
  );
}

export default PromoVideo2;