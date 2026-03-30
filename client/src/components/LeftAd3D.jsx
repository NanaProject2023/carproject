import { Link } from "react-router-dom"
import "./LeftAd3D.css"



export default function LeftAd3D() {
  return (
<div className="left-ad3d">
<video autoPlay muted loop playsInline>
  <source src={`${import.meta.env.BASE_URL}assets/sunset.mp4`} type="video/mp4" />
</video>

<h3 className="percentage">17% off! To Learn More Click Me</h3>
<h2 className="ad3d">ADVERTISE HERE </h2>

<Link to="/contact">
  <h3 className="adclaim"> Reserve this Window! Click Me</h3>
</Link>




<video autoPlay muted loop playsInline>
  <source src={`${import.meta.env.BASE_URL}assets/mercedes.mp4`} type="video/mp4" />
</video>




    </div>
  );
}

