import { MapContainer, TileLayer, Marker, GeoJSON } from "react-leaflet";
import { useEffect, useState } from "react";
import "./Map.css";
import "leaflet/dist/leaflet.css";

interface LatLng {
  lat: number;
  lng: number;
}

interface PolygonCoordinates {
  geojson?: any;
}

export default function Map({
  latLng,
  polygonCoordinates,
}: {
  latLng: LatLng;
  polygonCoordinates: PolygonCoordinates;
}) {
  const [key, setKey] = useState(0);
  console.log(polygonCoordinates);
  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [latLng.lat, latLng.lng, polygonCoordinates?.geojson]);

  const mapPosition = [latLng.lat, latLng.lng];

  return (
    <div id="map">
      <MapContainer
        className="map"
        center={mapPosition}
        zoom={10}
        scrollWheelZoom={true}
        key={key}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={mapPosition} />

        {polygonCoordinates && polygonCoordinates?.geojson && (
          <GeoJSON
            data={polygonCoordinates?.geojson}
            style={() => ({
              color: "orange",
              weight: 1,
              fillColor: "yellow",
              fillOpacity: 0.5,
            })}
          />
        )}
      </MapContainer>
    </div>
  );
}
