import "./RightAd3D.css"



export default function RightAd3D() {
  return (
<div className="right-ad3d">
  

<video autoPlay muted loop playsInline>
  <source src={`${import.meta.env.BASE_URL}assets/followus.mp4`} type="video/mp4" />
</video>



<video autoPlay muted loop playsInline>
  <source src={`${import.meta.env.BASE_URL}assets/thnx4watch.mp4`} type="video/mp4" />
</video>


    </div>
  );
}
