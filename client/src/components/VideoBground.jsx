import "./VideoBground.css";


function VideoBground() {
  return (
    <div className="video-container">

      <video autoPlay loop muted playsInline className="bg-video">
        <source src={`${import.meta.env.BASE_URL}assets/promo3.mp4`}  type="video/mp4" />
      </video>

      <div className="content">
        <p>
          Advertise Here
        </p>
      </div>

    </div>
  );
}

export default VideoBground