const cities = [
  { name: 'Rome', lat: 41.905292, lng: 12.460421, number: 1, url: "https://maps.app.goo.gl/uGTgA3n9t7jw5U6W6" },
  { name: 'Florence', lat: 43.776713, lng: 11.255014, number: 2, url: "https://www.hotelcollodi.com" },
  { name: 'Cinque Terre', lat: 44.148186, lng: 9.655083, number: 3, url: "https://www.hotelmonterosso.it" },
  { name: 'Lake Como', lat: 46.011429, lng: 9.283331, number: 4, url: "https://www.albergomilanovarenna.com/it/" },
  { name: 'Milan', lat: 45.465181, lng: 9.189457, number: 5, url: "https://room-matehotels.com/gb/hotel-giulia-milan" }
];

window.addEventListener('DOMContentLoaded', () => {
  const mapContainer = document.getElementById('map');
  if (!mapContainer || typeof window.L === 'undefined') return;
  const map = window.L.map('map').setView([43.5, 11.5], 6);
  window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
  cities.forEach(city => {
    const popupContent = city.url
    ? `<a href="${city.url}" target="_blank">${city.name}</a>`
    : `<b>${city.name}</b>`;

    window.L.marker([city.lat, city.lng], {icon: createNumberedIcon(city.number)}).addTo(map)
      .bindPopup(popupContent);
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
