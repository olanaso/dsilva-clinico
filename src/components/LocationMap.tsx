import { MapPin } from 'lucide-react';

interface LocationMapProps {
  latitude: number;
  longitude: number;
  locationName: string;
  address: string;
}

const LocationMap = ({ latitude, longitude, locationName, address }: LocationMapProps) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
  const embedUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=es&z=15&output=embed`;
  
  const handleMapClick = () => {
    window.open(googleMapsUrl, '_blank');
  };
  
  return (
    <div className="relative h-[300px] rounded-lg overflow-hidden shadow-card-custom group cursor-pointer">
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onClick={handleMapClick}
        className="cursor-pointer"
      />
      
      {/* Overlay hint */}
      <div 
        className="absolute inset-0 cursor-pointer" 
        onClick={handleMapClick}
      >
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/95 backdrop-blur px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-[1000]">
          <div className="flex items-center gap-2 text-sm font-medium">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Haz clic para abrir en Google Maps</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
