import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useNavigate, useSearchParams } from "react-router-dom";
import useGeoLocation from "../hook/useGeoLocation";
import { useFilterHotel } from "./context/ListFilterProvider";

function Map() {
  const { hotels, isLoading } = useFilterHotel();
  const [first, setfirst] = useState([51, 3]);
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const {
    isLoading: isLoadingPosition,
    position,
    getPosition,
  } = useGeoLocation();

  useEffect(() => {
    if (lat && lng) setfirst([lat, lng]);
  }, [lat, lng]);

  useEffect(() => {
    if (position?.lat && position?.lng) setfirst([position.lat, position.lng]);
  }, [position]);
  return (
    <Box>
      <LoadingButton
        size="small"
        onClick={getPosition}
        loading={isLoadingPosition}
        loadingPosition="start"
        startIcon={<GpsFixedIcon />}
      ></LoadingButton>
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
        <DetectClick />
        <ChangeCenter position={first} />
        {hotels.map((item) => (
          <Marker key={item.id} position={[item.latitude, item.longitude]}>
            <Popup>{item.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
}

export default Map;

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => navigate(`/Hotel/bookmark?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}
