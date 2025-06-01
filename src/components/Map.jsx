import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import GeoCoderMarker from "./GeoCoderMarker";
const Map = ({ address, city, state, country }) => {
  return (
    <MapContainer
      center={[53.35, 18.8]} // Set the initial center of the map
      zoom={2} // Set the initial zoom level
      scrollWheelZoom={false} // Disable scroll wheel zoom
      className="h-[24rem] w-full !mt-5 z-0 bg-blue-500"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <GeoCoderMarker address={`${address} ${city} ${state} ${country}`} />
    </MapContainer>
  );
};

export default Map;
