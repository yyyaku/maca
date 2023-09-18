const map = () => {
  const map = L.map('map').setView([55.0285, 82.9282], 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const iconOptions = {
    iconUrl: 'img/svg/map-cursor.svg',
    iconSize: [32, 44],
  };

  const customIcon = L.icon(iconOptions);

  let markerOptions = {
    icon: customIcon,
  };

  const marker = L.marker({ lat: 55.0285, lng: 82.9282 }, markerOptions);

  marker.addTo(map);
};

export {map};
