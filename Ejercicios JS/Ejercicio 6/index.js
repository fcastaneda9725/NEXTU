var map, infoWindow, pos;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    initMap();
  });
}else {
  alert('Tu navegador no permite el uso de de Geolocalización');

};

function initMap() {
  var mapConainer = document.getElementById('map');
  var config = {
    center: { lat: -34.25, lng: 150.64, },
    zoom: 5,
  };
  map = new google.maps.Map(mapConainer, config);
  infoWindow = new google.maps.infoWindow({ map: map });
};

var button = document.getElementById('btn-geo');

button.addEventListener('click', function () {
  alert('Se buscará tu ubicación en el mapa.');
  map.setCenter(pos);
  map.setZoom(15);
  infoWindow.setPosition(pos);
  infoWindow.setContent('Ubicación encontrada');
});
