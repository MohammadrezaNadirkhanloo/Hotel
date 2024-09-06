import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useFilterHotel } from "./context/ListFilterProvider";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Map() {
  const { hotels, isLoading } = useFilterHotel();
  const [first, setfirst] = useState([51, 3]);
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  useEffect(() => {
    if (lat && lng) setfirst([lat, lng]);
  }, [lat, lng]);

  return (
    <div>
      <MapContainer
        center={first}
        zoom={7}
        scrollWheelZoom={true}
        style={{ height: "90vh", width: "100wh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ChangeCenter position={first} />
        {hotels.map((item) => (
          <Marker key={item.id} position={[item.latitude, item.longitude]}>
            <Popup>{item.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

export default Map;
