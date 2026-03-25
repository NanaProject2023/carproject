import "./LeftAd3D.css"



export default function LeftAd3D() {
  return (
<div className="left-ad3d">
  

<video autoPlay muted loop playsInline>
  <source src={`${import.meta.env.BASE_URL}assets/sunset.mp4`} type="video/mp4" />
</video>

<h2 className="ad3d">ADVERTISE HERE </h2>

<video autoPlay muted loop playsInline>
  <source src={`${import.meta.env.BASE_URL}assets/mercedes.mp4`} type="video/mp4" />
</video>






    </div>
  );
}

