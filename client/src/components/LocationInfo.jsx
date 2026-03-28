import "./LocationInfo.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe, FaBusinessTime } from "react-icons/fa";

export default function LocationInfo() {
  const address = "Boston, MA"; // change later if needed

  return (
    <div className="location-containerr">

      {/* LEFT SIDE - INFO */}
      <div className="location-details">
        <h3>Location </h3>

        <div className="info-item">
          <FaBusinessTime className="icon" />
          <span>Mon-Fri 7AM - 7PM</span>
        </div>

        
        <div className="info-item">
          <FaPhoneAlt className="icon" />
          <span>(800) 456-7890</span>
        </div>
        
        
        
        
        
        <div className="info-item">
          <FaMapMarkerAlt className="icon" />
          <span>{address}</span>
        </div>



        <div className="info-item">
          <FaEnvelope className="icon" />
          <span>MonacoLux@Gmail.com</span>
        </div>

        <div className="info-item">
          <FaGlobe className="icon" />
          <span>www.MonacoLux.com</span>
        </div>
      </div>

      {/* RIGHT SIDE - MAP */}
      <div className="map-container">
        <iframe
          title="location-map"
          src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  );
}