
function obtenerDireccion(latitud, longitud) {
   // Construir la URL para la solicitud a la API de geolocalización de Google Maps
   var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitud + "," + longitud + "&key=AIzaSyA3rC3NmcwXlk7pxVthxdHDI8mBiDeLVnQ";
 
   // Hacer la solicitud GET usando XMLHttpRequest
   var request = new XMLHttpRequest();
   request.open("GET", url, true);
   request.send();
 
   // Procesar la respuesta de la API cuando llegue
   request.onreadystatechange = function() {
     if (request.readyState == 4 && request.status == 200) {
       var resultado = JSON.parse(request.responseText);
 
       // Obtener la dirección del primer resultado
       var direccion = resultado.results[0].formatted_address;
 
       // Mostrar la dirección en la consola o en la página
       console.log(direccion);
       //document.getElementById("direccion").innerHTML = direccion;
     }
   }
 }
 obtenerDireccion(37.7749, -122.4194);
   
