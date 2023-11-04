"use client";

import { MapContainer, Marker, TileLayer, Tooltip, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./style.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function Map() {
  const position = [44.80280252706683, -68.78469849261884];
  const zoom = 13;

  return (
    <MapContainer center={position as any} zoom={zoom} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position as any}>
        <Popup>
          The Stephen & Tabitha <br /> King foundation
        </Popup>
      </Marker>
    </MapContainer>
  );
}
