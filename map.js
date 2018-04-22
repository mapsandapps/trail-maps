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
function mapPark(parkID) {
  const mapSettings = {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>'
  };

  function constructTileURL(name) {
    return `https://api.tiles.mapbox.com/v4/mapbox.${ name }/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwc2FuZGFwcHMiLCJhIjoiY2pjYmNncHo2MHA2djJ3cW8ycWNzZHBwOSJ9.9c-NcWYyKKsbvtHF9tuQBA`;
  }

  map = L.map('map', {
    center: [33.7530, -84.3984],
    zoom: 11,
    dragging: !L.Browser.mobile
  }).locate({
    watch: true,
    setView: false
  }).on('locationfound', onLocationFound);
  var streets = L.tileLayer(constructTileURL('streets'), mapSettings).addTo(map);
  var satellite = L.tileLayer(constructTileURL('satellite'), mapSettings);
  var outdoors = L.tileLayer(constructTileURL('outdoors'), mapSettings);

  L.control.layers({
    "Streets": streets,
    "Satellite": satellite,
    "Outdoors": outdoors
  }).addTo(map);

  // map.addControl(new L.Control.Fullscreen({ // FIXME: doesn't seem to work in iframe
  //   title: {
  //       'false': 'View Fullscreen',
  //       'true': 'Exit Fullscreen'
  //   }
  // }));

  fetch(`./geojsons/${parkID}.geojson`)
    .then(resp => resp.json())
    .then(response => {
      processGeojson(response);
    });
}

var geolocationDot;
var geolocationAccuracy;
// TODO: should i make geolocation accessible via a button instead of by default?
function onLocationFound(e) {
  console.log('location found');
  if (geolocationDot) {
    geolocationDot.removeFrom(map);
    geolocationAccuracy.removeFrom(map);
  }
  var radius = e.accuracy / 2;
  geolocationDot = L.circleMarker(e.latlng, {
    radius: 5,
    stroke: false,
    fillOpacity: 1.0
  }).addTo(map);
  geolocationAccuracy = L.circle(e.latlng, radius, {
    stroke: false
  }).addTo(map);
}

function processLineString(feature) {
  var line = L.geoJSON(feature, {
    color: feature.properties.stroke,
    weight: feature.properties['stroke-width']
  })
  .addTo(map);

  var popupText = feature.properties.name ? feature.properties.name : ''; // TODO: add .surface, etc.
  if (popupText && feature.properties.miles) popupText += ', ';
  if (feature.properties.miles) popupText += feature.properties.miles.toString();
  if (feature.properties.miles) popupText += feature.properties.miles == 1 ? ' mile' : ' miles';

  if (popupText) line.bindTooltip(popupText).openTooltip();
}


function reverseCoordinateArray(coordinates) {
  return [
    coordinates[1],
    coordinates[0]
  ];
}

function addGMapsLinkToPoint(marker) {
  // TODO: only add these if the properties['navigate-to'] is true (true is a string, for now)
  // TODO: should these be geo: links?
  return `<a href="https://www.google.com/maps/place/${ marker.getLatLng().lat },${ marker.getLatLng().lng }" target="_blank">Directions to point</a>`;
}

function createPopup(feature, marker) {
  const symbol = feature.properties['marker-symbol'];

  let popupContent = markerList[symbol].name + '<br>';
  if (feature.properties.name) {
    popupContent += `${feature.properties.name}<br>`;
  }

  if (symbol === 'attraction') {
    // TODO: display photo
  } else if (markerList[symbol] && markerList[symbol].linkOut) {
    popupContent += addGMapsLinkToPoint(marker);
  } else {
    // TODO: possibly display a popup if the marker isn't a photo or navigable point
  }
  marker.bindPopup(popupContent);
}

function processPoint(feature) {
  const symbol = feature.properties['marker-symbol'];

  var marker;
  if (markerList[symbol] && markerList[symbol].marker) {
    marker = L.marker(reverseCoordinateArray(feature.geometry.coordinates), {
      icon: markerList[symbol].marker
    });
  } else {
    marker = L.marker(reverseCoordinateArray(feature.geometry.coordinates));
  }
  marker.addTo(map);
  createPopup(feature, marker);
}

function processPolygon(feature) {
  var polygon = L.geoJSON(feature, {
    fillColor: feature.properties.fill,
    fillOpacity: feature.properties['fill-opacity'],
    color: feature.properties.stroke,
    weight: feature.properties['stroke-width'],
    opacity: feature.properties['stroke-opacity']
  })
  .addTo(map);

  if (feature.properties.name) polygon.bindTooltip(feature.properties.name);
}

function processGeojson(file) {
  file.features.forEach(feature => {
    if (feature.geometry.type === 'LineString') {
      processLineString(feature);
    } else if (feature.geometry.type === 'Point') {
      processPoint(feature);
    } else if (feature.geometry.type === 'Polygon') {
      processPolygon(feature);
    }
  });

  var bounds = L.geoJSON(file).getBounds();
  map.fitBounds(bounds);
}

window.onload = () => {
  var parkID = getUrlVars()["park"];

  if (parkID) {
    mapPark(parkID);
  } else {
    listParks();
  }
}
