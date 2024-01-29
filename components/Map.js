import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import IndonesiaData from '../components/indonesia-prov.json';

const Map = () => {
  const center = [-1.19, 120.82];
  const zoom = 5;

  const getColor = (value, max, min) => {
    // Normalisasi nilai ke dalam rentang [0, 1]
    const normalizedValue = (value - min) / (max - min);

    // Interpolasi linear antara warna merah dan hijau
    const red = Math.floor(255 * normalizedValue);
    const green = Math.floor(255 * (1 - normalizedValue));

    // Format nilai warna dalam format RGB
    return `rgb(${red}, ${green}, 0)`;
  };

  const style = (feature) => {
    // Sesuaikan dengan properti data yang sesuai
    const value = feature.properties.jumlah_perusahaan;
    return {
      fillColor: getColor(value,1000,2),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7,
    };
  };

  const onEachFeature = (feature, layer) => {
    // Sesuaikan dengan pop-up informasi
    const { Propinsi, jumlah_perusahaan } = feature.properties;
    layer.bindPopup(`Provinsi: ${Propinsi}<br>Perusahaan: ${jumlah_perusahaan}`);
  };

  return (

    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <GeoJSON
        data={IndonesiaData}
        style={style}
        onEachFeature={onEachFeature}
      />
    </MapContainer>

  );
};

export default Map;
