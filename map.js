function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
  function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}

function listParks() {
  // TODO: replace with a map
  var listHTML = '';
  list.forEach(park => {
    listHTML += `<a href="?park=${ park.id }">${ park.name }</a><br>`;
  });
  document.getElementById('map').innerHTML = listHTML;
}

var map;
function mapPark() {
  // TODO: set it to not zoom on scroll
  map = L.map('map').setView([33.7530, -84.3984], 11);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwc2FuZGFwcHMiLCJhIjoiY2pjYmNncHo2MHA2djJ3cW8ycWNzZHBwOSJ9.9c-NcWYyKKsbvtHF9tuQBA', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets'
  }).addTo(map);

  fetch('./geojsons/johns-homestead.geojson')
    .then(resp => resp.json())
    .then(response => {
      processGeojson(response);
    });
}

function processLineString(feature) {
  var line = L.geoJSON(feature, {
    color: feature.properties.stroke,
    weight: feature.properties['stroke-width']
  })
  .addTo(map);

  var popupText = feature.properties.name;
  if (popupText && feature.properties.miles) popupText += ', ';
  if (feature.properties.miles) popupText += feature.properties.miles + ' miles';

  line.bindPopup(popupText).openPopup();
}


function reverseCoordinateArray(coordinates) {
  return [
    coordinates[1],
    coordinates[0]
  ];
}

function addGMapsLinkToPoint(marker) {
  marker.bindPopup(`<a href="https://www.google.com/maps/place/${ marker.getLatLng().lat },${ marker.getLatLng().lng }" target="_blank">Directions to point</a>`);
}

function processPoint(feature) {
  var marker = L.marker(reverseCoordinateArray(feature.geometry.coordinates)).addTo(map);


  const symbol = feature.properties['marker-symbol'];
  if (symbol === 'attraction') {
    // TODO: display photo
  } else if (markerList[symbol].linkOut) {
    addGMapsLinkToPoint(marker);
  } else {
    // TODO: possibly display a popup if the marker isn't a photo or navigable point
  }
}

function processGeojson(file) {
  // L.geoJSON(file).addTo(map);
  console.log(file);
  file.features.forEach(feature => {
    if (feature.geometry.type === 'LineString') {
      processLineString(feature);
    } else if (feature.geometry.type === 'Point') {
      processPoint(feature);
    }
  })
}

window.onload = () => {
  var parkID = getUrlVars()["park"];

  if (parkID) {
    mapPark();
  } else {
    listParks();
  }

}