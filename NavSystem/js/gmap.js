function initAutocomplete() {
var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 52.407518, lng: -1.504741},
  zoom: 16,
  mapTypeControl: false,
  mapTypeId: 'roadmap'
});
// Clinks the search box to the UI element
var input = document.getElementById('#label');
var searchBox = new google.maps.places.SearchBox(document.getElementById('search-terms'));

// Bias the SearchBox results towards current map's viewport.
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