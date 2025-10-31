import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { MapPin } from 'lucide-react';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface LocationMapProps {
  latitude: number;
  longitude: number;
  locationName: string;
  address: string;
}

// Component to handle map click
function MapClickHandler({ googleMapsUrl }: { googleMapsUrl: string }) {
  const map = useMap();
  
  useEffect(() => {
    const handleClick = () => {
      window.open(googleMapsUrl, '_blank');
    };
    
    map.on('click', handleClick);
    
    return () => {
      map.off('click', handleClick);
    };
  }, [map, googleMapsUrl]);
  
  return null;
}

const LocationMap = ({ latitude, longitude, locationName, address }: LocationMapProps) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
  const position: LatLngExpression = [latitude, longitude];
  
  return (
    <div className="relative h-[300px] rounded-lg overflow-hidden shadow-card-custom group cursor-pointer">
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>
            <div className="text-center p-2">
              <p className="font-semibold text-sm mb-1">{locationName}</p>
              <p className="text-xs text-muted-foreground">{address}</p>
            </div>
          </Popup>
        </Marker>
        <MapClickHandler googleMapsUrl={googleMapsUrl} />
      </MapContainer>
      
      {/* Overlay hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/95 backdrop-blur px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-[1000]">
        <div className="flex items-center gap-2 text-sm font-medium">
          <MapPin className="h-4 w-4 text-primary" />
          <span>Haz clic para abrir en Google Maps</span>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
