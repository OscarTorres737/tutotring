
function showPosition() {
 if(navigator.geolocation) {
 navigator.geolocation.getCurrentPosition(showMap, showError);
 } else {
 alert("Sorry, your browser does not support HTML5 geolocation.");
 }
}
// Define callback function for successful attempt
function showMap(position) {
 // Obtener posición en tiempo real
 lat = position.coords.latitude;
 long = position.coords.longitude;
 //poner posición de algún lugar o empresa
 //25.67871412182281, -100.2837614136007 ESTO SON DE FUNDIDORA
 //lat = 25.67871412182281;
 //long= -100.2837614136007;
 var latlong = new google.maps.LatLng(lat, long);

 var myOptions = {
 center: latlong,
 //16 zoom
 zoom: 16,
 mapTypeControl: true,
 navigationControlOptions: {
 style:google.maps.NavigationControlStyle.SMALL
 }
 }

 var map = new google.maps.Map(document.getElementById("embedMap"),
myOptions);
 var marker = new google.maps.Marker({ position:latlong, map:map, title:"You are here!" });
}
// Define callback function for failed attempt
function showError(error) {
 if(error.code == 1) {
    result.innerHTML = "You've decided not to share your position, but it's OK. We won't ask you again.";
 } else if(error.code == 2) {
 result.innerHTML = "The network is down or the positioning service can't be reached.";
 } else if(error.code == 3) {
 result.innerHTML = "The attempt timed out before it could get the location data.";
 } else {
 result.innerHTML = "Geolocation failed due to unknown error.";
 }
}

