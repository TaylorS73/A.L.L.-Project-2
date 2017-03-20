function initAutocomplete() {
var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 52.407518, lng: -1.504741},
  zoom: 17,
  mapTypeControl: false,
  mapTypeId: 'roadmap'
});
// links the search box to the UI element
var input = document.getElementById('#label');
var searchBox = new google.maps.places.SearchBox(document.getElementById('search-terms'));

// passes the SearchBox results towards current map's viewport.
map.addListener('bounds_changed', function() {
  searchBox.setBounds(map.getBounds());
});
var markers = [];
// Listen for the event fired when the user selects a prediction and retrieve
// more details for that place.
searchBox.addListener('places_changed', function() {
  var places = searchBox.getPlaces();

  if (places.length == 0) {
	return;
  }
  // Clear out the old markers.
  markers.forEach(function(marker) {
	marker.setMap(null);
  });
  markers = [];
  // For each place, get the icon, name and location.
  var bounds = new google.maps.LatLngBounds();
  places.forEach(function(place) {
	if (!place.geometry) {
	  console.log("Returned place contains no geometry");
	  return;
	}
	var icon = {
	};
	// Create a marker for each place.
	markers.push(new google.maps.Marker({
	  map: map,
	  icon: icon,
	  title: place.name,
	  position: place.geometry.location
	}));
	if (place.geometry.viewport) {
	  // Only geocodes have viewport.
	  bounds.union(place.geometry.viewport);
	} else {
	  bounds.extend(place.geometry.location);
	}
  });
  map.fitBounds(bounds);
});
}
function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (p) {
			var LatLng = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);
			initAutocomplete();
			var marker = new google.maps.Marker({
				position: LatLng,
				map: map,
				title: "<div style = 'height:60px;width:200px'><b>Your location:</b><br />Latitude: " + p.coords.latitude + "<br />Longitude: " + p.coords.longitude
			});
			google.maps.event.addListener(marker, "click", function (e) {
				var infoWindow = new google.maps.InfoWindow();
				infoWindow.setContent(marker.title);
				infoWindow.open(map, marker);
			});
		});
	} else {
		alert('Geo Location feature is not supported in this browser.');
	}
}