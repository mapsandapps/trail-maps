# trail-maps

To create a new map:

1. Import GPS track into geojson.io
1. Draw over GPS track as desired
1. Run track through [smoothing codepen](http://geojson.io/#id=gist:anonymous/ac4e24e1b474df5dac41080189200dc1&map=16/33.8312/-84.2453) (if desired)
1. Replace original geojson.io track with smoothed one
1. Add points in geojson.io
1. If those points have counterpoints in marker-list.js, they will get imported nicely (e.g. `entrance` becomes `trailhead`), otherwise, they will be basic points
1. Save the geojson from geojson.io to the geojsons folder ([example of geojson.io finished map](http://geojson.io/#id=gist:anonymous/ac4e24e1b474df5dac41080189200dc1&map=16/33.8282/-84.2443))
1. Add info about the trail to list.js
1. Push the changes to github master branch to update [the site](https://mapsandapps.github.io/trail-maps/)
