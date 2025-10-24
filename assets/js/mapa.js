
if (document.getElementById("map")) {
    var map = L.map('map').setView([-23.55052, -46.633308], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    L.marker([-23.55052, -46.633308]).addTo(map)
        .bindPopup('Aqui está a nossa ONG!')
        .openPopup();
}
