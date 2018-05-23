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
  }
};
