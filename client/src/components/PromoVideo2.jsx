import { Link } from "react-router-dom";
import "./PromoVideo2.css";

function PromoVideo2() {
  return (
    <div className="promo-video-container">
<>
      <video
        className="promo-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source  src={`${import.meta.env.BASE_URL}assets/promo2.mp4`}  type="video/mp4" />
      </video>
      < Link to="/contact">
      <button id="advertiseButton" className="advertise-button" >
                    ADVERTISE HERE ? Click Me . . .
      </button>
      </Link>

</>
     
    </div>
  
  );
}

export default PromoVideo2;