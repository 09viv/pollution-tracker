import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Wildlife occurrence data
const wildlifeData = [
  { id: 1, species: "Device", lat: 28.6139, lng: 77.2090, location: "Delhi", icon: "🌳" },
  { id: 2, species: "Tree", lat: 26.9124, lng: 75.7873, location: "Jaipur", icon: "📡" },
  { id: 3, species: "Tree", lat: 19.076, lng: 72.8777, location: "Mumbai", icon: "🌳" },
  { id: 4, species: "Device", lat: 13.0827, lng: 80.2707, location: "Chennai", icon: "📡" }
];

// Function to create a custom icon
const createIcon = (emoji) =>
  L.divIcon({
    html: `<div style="font-size: 24px;">${emoji}</div>`,
    className: "custom-marker",
    iconSize: [30, 30]
  });

const WildlifeMap = () => {
  useEffect(() => {
    const legend = L.control({ position: "bottomright" });

    legend.onAdd = function () {
      let div = L.DomUtil.create("div", "legend");
      div.innerHTML = `
        <strong>Legend</strong><br/>
        // 🐅 Tiger<br/>
        // 🐘 Elephant<br/>
        // 🦌 Deer
      `;
      div.style.background = "white";
      div.style.padding = "8px";
      div.style.borderRadius = "5px";
      div.style.boxShadow = "0px 0px 5px rgba(0,0,0,0.3)";
      return div;
    };

    return () => legend.remove(); // Cleanup
  }, []);

  return (
    <MapContainer center={[28.6139, 77.2090]} zoom={5} style={{ height: "500px", width: "100%", zIndex:1 }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {wildlifeData.map((data) => (
        <Marker key={data.id} position={[data.lat, data.lng]} icon={createIcon(data.icon)}>
          <Popup>
            <strong>{data.species}</strong>
            <br />
            Location: {data.location}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default WildlifeMap;
