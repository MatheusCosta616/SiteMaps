import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapaOSM = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]} // Coordenadas iniciais do mapa
      zoom={13} // Nível de zoom inicial
      style={{ height: '100%', width: '300%' }} // Estilo do mapa
    >
      <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
      {/* Marcadores ou outros elementos do mapa */}
    </MapContainer>
  );
}

export default MapaOSM;
