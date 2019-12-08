var markerList = {
  entrance: {
    name: 'Trailhead',
    maki: 'entrance',
    linkOut: true,
    marker: L.icon({
      iconUrl: 'markers/trailhead.png',
      iconRetinaUrl: 'markers/trailhead-retina.png',
      iconSize: [30, 41],
      iconAnchor: [15, 41],
      popupAnchor: [0, -46] //,
      // shadowUrl: 'markers/shadow.png',
      // shadowRetinaUrl: 'markers/shadow-retina.png',
      // shadowSize: [30, 13],
      // shadowAnchor: [15, 41]
    })
  },
  farm: {
    name: 'Farm',
    maki: 'farm',
    linkOut: false,
    marker: L.icon({
      iconUrl: 'markers/barn.png',
      iconRetinaUrl: 'markers/barn-retina.png',
      iconSize: [30, 41],
      iconAnchor: [15, 41],
      popupAnchor: [0, -46]
    })
  },
  parking: {
    name: 'Parking',
    maki: 'parking',
    linkOut: true,
    marker: L.icon({
      iconUrl: 'markers/parking.png',
      iconRetinaUrl: 'markers/parking-retina.png',
      iconSize: [30, 41],
      iconAnchor: [15, 41],
      popupAnchor: [0, -46]
    })
  },
  attraction: {
    name: 'Photo',
    maki: 'attraction',
    linkOut: false
  },
  bus: {
    name: 'Bus Stop',
    maki: 'bus',
    linkOut: true,
    marker: L.icon({
      iconUrl: 'markers/bus.png',
      iconRetinaUrl: 'markers/bus-retina.png',
      iconSize: [30, 41],
      iconAnchor: [15, 41],
      popupAnchor: [0, -46]
    })
  },
  rail: {
    name: 'Rail Station',
    maki: 'rail',
    linkOut: true,
    marker: L.icon({
      iconUrl: 'markers/rail.png',
      iconRetinaUrl: 'markers/rail-retina.png',
      iconSize: [30, 41],
      iconAnchor: [15, 41],
      popupAnchor: [0, -46]
    })
  },
  fuel: {
    name: 'Gas Station',
    maki: 'fuel',
    linkOut: true,
    marker: L.icon({
      iconUrl: 'markers/gas.png',
      iconRetinaUrl: 'markers/gas-retina.png',
      iconSize: [30, 41],
      iconAnchor: [15, 41],
      popupAnchor: [0, -46]
    })
  },
  restaurant: {
    name: 'Food',
    maki: 'restaurant',
    linkOut: true,
    marker: L.icon({
      iconUrl: 'markers/food.png',
      iconRetinaUrl: 'markers/food-retina.png',
      iconSize: [30, 41],
      iconAnchor: [15, 41],
      popupAnchor: [0, -46]
    })
  },
  swimming: {
    name: 'Swimming',
    maki: 'swimming',
    linkOut: true,
    marker: L.icon({
      iconUrl: 'markers/swimming.png',
      iconRetinaUrl: 'markers/swimming-retina.png',
      iconSize: [30, 41],
      iconAnchor: [15, 41],
      popupAnchor: [0, -46]
    })
  },
  bicycle: {
    name: 'Bike Parking',
    maki: 'bicycle',
    linkOut: true,
    marker: L.icon({
      iconUrl: 'markers/bike-parking.png',
      iconRetinaUrl: 'markers/bike-parking-retina.png',
      iconSize: [30, 41],
      iconAnchor: [15, 41],
      popupAnchor: [0, -46]
    })
  },
  roadblock: {
    name: undefined, // gate or roadblock
    maki: 'roadblock',
    linkOut: true,
    marker: L.icon({
      iconUrl: 'markers/gate.png',
      iconRetinaUrl: 'markers/gate-retina.png',
      iconSize: [30, 41],
      iconAnchor: [15, 41],
      popupAnchor: [0, -46]
    })
  },
  toilets: {
    name: 'Restroom',
    maki: 'toilets',
    linkOut: false,
    marker: L.icon({
      iconUrl: 'markers/restroom.png',
      iconRetinaUrl: 'markers/restroom-retina.png',
      iconSize: [30, 41],
      iconAnchor: [15, 41],
      popupAnchor: [0, -46]
    })
  },
  theatre: {
    name: 'Amphitheater',
    maki: 'theatre',
    linkOut: false,
    marker: L.icon({
      iconUrl: 'markers/amphitheater.png',
      iconRetinaUrl: 'markers/amphitheater-retina.png',
      iconSize: [30, 41],
      iconAnchor: [15, 41],
      popupAnchor: [0, -46]
    })
  },
  playground: {
    name: 'Playground',
    maki: 'playground',
    linkOut: false,
    marker: L.icon({
      iconUrl: 'markers/playground.png',
      iconRetinaUrl: 'markers/playground-retina.png',
      iconSize: [30, 41],
      iconAnchor: [15, 41],
      popupAnchor: [0, -46]
    })
  },
  'fast-food': {
    name: 'Picnic area',
    maki: 'fast-food',
    linkOut: false,
    marker: L.icon({
      iconUrl: 'markers/picnic.png',
      iconRetinaUrl: 'markers/picnic-retina.png',
      iconSize: [30, 41],
      iconAnchor: [15, 41],
      popupAnchor: [0, -46]
    })
  },
  disability: {
    name: 'Accessibility',
    maki: 'disability',
    linkOut: false,
    marker: L.icon({
      iconUrl: 'markers/accessible.png',
      iconRetinaUrl: 'markers/accessible-retina.png',
      iconSize: [30, 41],
      iconAnchor: [15, 41],
      popupAnchor: [0, -46]
    })
  },
  museum: {
    name: 'Museum',
    maki: 'museum',
    linkOut: false,
    marker: L.icon({
      iconUrl: 'markers/museum.png',
      iconRetinaUrl: 'markers/museum-retina.png',
      iconSize: [30, 41],
      iconAnchor: [15, 41],
      popupAnchor: [0, -46]
    })
  },
  camera: {
    name: 'Point of Interest',
    maki: 'camera',
    linkOut: false,
    marker: L.icon({
      iconUrl: 'markers/camera.png',
      iconRetinaUrl: 'markers/camera-retina.png',
      iconSize: [30, 41],
      iconAnchor: [15, 41],
      popupAnchor: [0, -46]
    })
  },
  harbor: {
    name: 'Boat Ramp',
    maki: 'harbor',
    linkOut: false,
    marker: L.icon({
      iconUrl: 'markers/boat-ramp.png',
      iconRetinaUrl: 'markers/boat-ramp-retina.png',
      iconSize: [30, 41],
      iconAnchor: [15, 41],
      popupAnchor: [0, -46]
    })
  },
  water: {
    name: 'Water',
    maki: 'water',
    linkOut: false,
    marker: L.icon({
      iconUrl: 'markers/water-fountain.png',
      iconRetinaUrl: 'markers/water-fountain-retina.png',
      iconSize: [30, 41],
      iconAnchor: [15, 41],
      popupAnchor: [0, -46]
    })
  },
  danger: {
    name: 'Warning',
    maki: 'danger',
    linkOut: false,
    marker: L.icon({
      iconUrl: 'markers/warning.png',
      iconRetinaUrl: 'markers/warning-retina.png',
      iconSize: [30, 41],
      iconAnchor: [15, 41],
      popupAnchor: [0, -46]
    })
  },
  building: {
    name: 'Office',
    maki: 'building',
    linkOut: false,
    marker: L.icon({
      iconUrl: 'markers/office.png',
      iconRetinaUrl: 'markers/office-retina.png',
      iconSize: [30, 41],
      iconAnchor: [15, 41],
      popupAnchor: [0, -46]
    })
  },
  cross: {
    name: 'Intersection',
    maki: 'cross',
    linkOut: false,
    marker: L.icon({
      iconUrl: 'markers/intersection.png',
      iconRetinaUrl: 'markers/intersection-retina.png',
      iconSize: [6, 6],
      iconAnchor: [3, 3],
      popupAnchor: [0, -8]
    })
  },
  tunnel: { // not actually a maki icon. just put "tunnel" in as the icon name. it will appear broken in geojson.io
    name: 'Tunnel',
    maki: 'tunnel',
    linkOut: false,
    marker: L.icon({
      iconUrl: 'markers/tunnel.png',
      iconRetinaUrl: 'markers/tunnel-retina.png',
      iconSize: [30, 41],
      iconAnchor: [15, 41],
      popupAnchor: [0, -46]
    })
  },
  'dog-park': {
    name: 'Dog Park',
    maki: 'dog-park',
    linkOut: false,
    marker: L.icon({
      iconUrl: 'markers/dog-park.png',
      iconRetinaUrl: 'markers/dog-park-retina.png',
      iconSize: [30, 41],
      iconAnchor: [15, 41],
      popupAnchor: [0, -46]
    })
  },
  'fitness-centre': {
    name: 'Exercise',
    maki: 'fitness-centre',
    linkOut: false,
    marker: L.icon({
      iconUrl: 'markers/gym.png',
      iconRetinaUrl: 'markers/gym-retina.png',
      iconSize: [30, 41],
      iconAnchor: [15, 41],
      popupAnchor: [0, -46]
    })
  },
  circle: {
    name: 'Info',
    maki: 'circle',
    linkOut: false,
    marker: L.icon({
      iconUrl: 'markers/info.png',
      iconRetinaUrl: 'markers/info-retina.png',
      iconSize: [30, 41],
      iconAnchor: [15, 41],
      popupAnchor: [0, -46]
    })
  }
};
