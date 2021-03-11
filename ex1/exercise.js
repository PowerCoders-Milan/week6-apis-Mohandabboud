
var map;
function initMap() {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude, position.coords.longitude);
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: position.coords.latitude, lng: position.coords.longitude},
      zoom: 8
    }) 
    var marker = new google.maps.Marker({
      position: {lat: position.coords.latitude, lng: position.coords.longitude},
      map: map
    })
  })
}


