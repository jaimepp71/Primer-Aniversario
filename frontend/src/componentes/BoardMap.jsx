import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { MapPin } from 'lucide-react';
import { LOCATIONS } from '../data/gameData';

const createLocationIcon = (iconSymbol) => {
  return L.divIcon({
    className: 'custom-leaflet-marker',
    html: `<span>${iconSymbol}</span>`,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20]
  });
};

export default function BoardMap() {
  const defaultCenter = [40.4175, -3.7035];
  const defaultZoom = 16;

  return (
    <div className="map-section">
      <h2 className="section-title">
        <MapPin size={20} color="var(--accent-gold)" />
        MAPA INTERACTIVO DEL APARTAMENTO
      </h2>

      <div className="map-wrapper">
        <MapContainer center={defaultCenter} zoom={defaultZoom} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />

          {LOCATIONS.map((loc) => (
            <Marker key={loc.id} position={[loc.lat, loc.lng]} icon={createLocationIcon(loc.icon)}>
              <Popup>
                <div className="popup-card" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.3rem' }}>{loc.icon}</div>
                  <h3 className="popup-title">{loc.name}</h3>
                  <p className="popup-desc">Zona de investigación del apartamento.</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
