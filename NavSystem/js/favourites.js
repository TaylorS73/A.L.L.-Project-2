function thehub(map){
	window.alert("sometext");
	document.getElementById("fav").style.width = "0";
	var directionsService = new google.maps.DirectionsService();
	var directionsDisplay = new google.maps.DirectionsRenderer();
	
	directionsDisplay.setMap(document.getElementById('initMap()'));
	directionsDisplay.setPanel(document.getElementById('panel'));

	var request = {
	  origin: 'YourLocationButton()', 
	  destination: '52.4072799,-1.5057455',
	  provideRouteAlternatives: true,
	  travelMode: google.maps.DirectionsTravelMode.WALKING
	};

	directionsService.route(request, function(response, status) {
	  if (status == google.maps.DirectionsStatus.OK) {
		directionsDisplay.setDirections(response);
	  }
	});
}