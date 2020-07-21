// Map Variable
var map;
// String that store lat /long from Open-notify.
var latString;
var longString;
// Empty object for latlong
var latlong = {};
// Polyline variable
var flightPath;

// Get iss data every 0.5s
setInterval(getISS, 500)
//Hold off loading map for 3s
setTimeout(initMap, 3000)

// Function to get data from Open-notify
function getISS(){
  const proxy = "https://cors-anywhere.herokuapp.com/"
  const url = `${proxy}http://api.open-notify.org/iss-now.json`;
  // Use fetch() to make the request to the API
  fetch(url)
  .then(response => response.json())
  .then(data => {
    // Convert string to float
    latString = parseFloat(data.iss_position.latitude);
    longString = parseFloat(data.iss_position.longitude);
  })
  .catch(error => console.error(error))
  latlong.lat = latString;
  latlong.lng = longString;

}

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: latlong,
        zoom: 4
    });
    // https://stackoverflow.com/questions/14066387/how-to-add-direction-on-tracking-path-for-google-maps
    //http://jsfiddle.net/q6eqV/1/
  var iconsetngs = {
      path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
    };

  flightPath = new google.maps.Polyline({
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1,
    strokeWeight: 2,
    map: map,
    icons: [{
        icon: iconsetngs,
        offset: '100%'
    }]
    });

    

  flightPath.setMap(map);
  // Add lat long to path every 1s
  setInterval(addLatLng, 1000)

}


// Adds a new point to the Polyline.
function addLatLng() {

  var path = flightPath.getPath();
  var latlongpush = new google.maps.LatLng(latlong.lat, latlong.lng)
  // Because path is an MVCArray, we can simply append a new coordinate
  // and it will automatically appear.
  path.push(latlongpush);
  
}