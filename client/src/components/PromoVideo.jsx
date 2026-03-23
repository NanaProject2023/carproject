import "./PromoVideo.css";

function PromoVideo() {
  return (
    <>
    <div className="sticky-element">
    <div className="promo-video-container">

      <video
        className="promo-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source  src={`${import.meta.env.BASE_URL}assets/promo.mp4`}  type="video/mp4" />
      </video>

      

      </div>
    </div>
  </>
  );
}

export default PromoVideo;
