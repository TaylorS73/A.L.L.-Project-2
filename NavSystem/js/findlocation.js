function getLocation() {
	if (navigator.geolocation) {
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
	}
}