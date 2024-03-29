# trail-maps

To run in localhost:

```
cd /trail-maps
http-server -p 8084
```

To create a new map:

1. Import GPS track into geojson.io
1. Draw over GPS track as desired
1. Run track through [smoothing codepen](https://codepen.io/mapsandapps/pen/BJxxLw) (if desired)
1. Replace original geojson.io track with smoothed one
1. Add points in geojson.io
1. If those points have counterpoints in marker-list.js, they will get imported nicely (e.g. `entrance` becomes `trailhead`), otherwise, they will be basic points
1. If desired, give points a name attribute to be shown with the marker
1. Divide the trails into segments; give them names and miles as properties
1. Save the geojson from geojson.io to the geojsons folder ([example of geojson.io finished map](http://geojson.io/#id=gist:anonymous/ac4e24e1b474df5dac41080189200dc1&map=16/33.8282/-84.2443))
1. Add info about the trail to list.js
1. Push the changes to github master branch to update [the site](https://mapsandapps.github.io/trail-maps/)

To edit an existing map:

1. Open the existing map from `geojsons` in geojson.io
1. Follow steps for creating a new map

Trail colors & widths:

* #03763a 4: unpaved
* #6f6f6f 6: paved wide path
* #6f6f6f 4: paved sidewalk-width path
* #6f6f6f either width: stairs (use `"style": "stairs"`)
* #a1a1a1: gravel
* #e5ca3a area: beach
* #55d391 area: community garden
* #555555 area: parking
