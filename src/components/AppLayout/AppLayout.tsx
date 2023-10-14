import Map from "../Map/Map";
import { Link, Outlet } from "react-router-dom";
import "./AppLayout.css";

interface HomeProps {
  latLng: { lat: number; lng: number };
  polygonCoordinates: any;
}

export default function Home({ latLng, polygonCoordinates }: HomeProps) {
  return (
    <>
      <nav className="nav-bar">
        <Link to="/" style={{ color: "#e3f2fd", textDecoration: "none" }}>
          <p> Get Population</p>
        </Link>
        <Link to={-1} className="back-btn">
          <p>Go Back</p>
        </Link>
      </nav>

      <div className="home-container">
        <div className="search-section">
          <Outlet />
        </div>
        <div className="map-section">
          <Map latLng={latLng} polygonCoordinates={polygonCoordinates} />
        </div>
      </div>
    </>
  );
}
