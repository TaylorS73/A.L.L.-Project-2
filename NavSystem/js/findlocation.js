function getLocation() {
	if (navigator.geolocation) {
<<<<<<< HEAD
		navigator.geolocation.getCurrentPosition(function (p) {
			var LatLng = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);
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
=======
		navigator.geolocation.getCurrentPosition(showPosition, showError);
	} else {
		x.innerHTML = "Geolocation is not supported by this browser.";
	}
}
function showPosition(position) {
	lat = position.coords.latitude;
	lon = position.coords.longitude;
	latlon = new google.maps.LatLng(lat, lon)

	var myOptions = {
	center:latlon,zoom:14,
	mapTypeId:google.maps.MapTypeId.ROADMAP,
	mapTypeControl:false,
	navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
	}
	var map = new google.maps.Map(document.getElementById("map"), myOptions);
	var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
	}
function showError(error) {
	switch(error.code) {
		case error.PERMISSION_DENIED:
			x.innerHTML = "User denied the request for Geolocation."
			break;
		case error.POSITION_UNAVAILABLE:
			x.innerHTML = "Location information is unavailable."
			break;
		case error.TIMEOUT:
			x.innerHTML = "The request to get user location timed out."
			break;
		case error.UNKNOWN_ERROR:
			x.innerHTML = "An unknown error occurred."
			break;
>>>>>>> origin/master
	}
}