const cities = [
  { name: 'Rome', lat: 41.9028, lng: 12.4964, number: 1 },
  { name: 'Florence', lat: 43.7696, lng: 11.2558, number: 2 },
  { name: 'Cinque Terre', lat: 44.1468, lng: 9.6556, number: 3 },
  { name: 'Lake Como', lat: 45.9904, lng: 9.2576, number: 4 },
  { name: 'Milan', lat: 45.4642, lng: 9.1900, number: 5 }
];

window.addEventListener('DOMContentLoaded', () => {
  const mapContainer = document.getElementById('map');
  if (!mapContainer || typeof window.L === 'undefined') return;
  const map = window.L.map('map').setView([43.5, 11.5], 6);
  window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
  cities.forEach(city => {
    window.L.marker([city.lat, city.lng], {icon: createNumberedIcon(city.number)}).addTo(map)
      .bindPopup(`<b>${city.name}</b>`);
  });
});

function createNumberedIcon(number) {
  return L.divIcon({
    className: '',
    html: `
      <div style="
        background-color: #3b82f6;
        color: white;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <span style="transform: rotate(45deg); font-weight: bold;">${number}</span>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });
}
