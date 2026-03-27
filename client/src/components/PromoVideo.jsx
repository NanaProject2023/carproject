import "./PromoVideo.css";

function PromoVideo() {
  return (
    <>
    <div className="sticky-element">
      <div className="proomo">
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

  <img
    src={`${import.meta.env.BASE_URL}assets/logo1.png`}
    alt="logo"
    className="banner-logo"
  />

      
        </div>
      </div>
    </div>
  </>
  );
}

export default PromoVideo;
