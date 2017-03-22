var selectedMode = document.getElementById('mode').value;
var getstart = document.getElementById('start').value;
var getend = document.getElementById('end').value;

function directions(){
	window.alert("sometext");
	document.getElementById("directions").style.width = "0";
	document.getElementById("main").style.marginLeft= "50px";
	var directionsService = new google.maps.DirectionsService();
	var directionsDisplay = new google.maps.DirectionsRenderer();
	
	directionsDisplay.setMap(document.getElementById('map'));
	directionsDisplay.setPanel(document.getElementById('panel'));

	var request = {
	  origin: 'getstart', 
	  destination: 'getend',
	  provideRouteAlternatives: true,
	  travelMode: google.maps.TravelMode[selectedMode]
	};

	directionsService.route(request, function(response, status) {
	  if (status == google.maps.DirectionsStatus.OK) {
		directionsDisplay.setDirections(response);
	  }
	});
}

