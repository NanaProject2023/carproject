import "./PromoVideo.css";

function PromoVideo() {
  return (
    <div className="promo-video-container">

      <video
        className="promo-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={`${process.env.PUBLIC_URL}/assets/promo.mp4`} type="video/mp4" />
      </video>

    </div>
  );
}

export default PromoVideo;
