var map;
var university = {lat: 52.407518, lng: -1.504741};

function YourLocationButton(map, marker) {
    var controlDiv = document.createElement('div');

    var yourlocationbutton = document.createElement('button');
    yourlocationbutton.style.backgroundColor = '#fff';
    yourlocationbutton.style.border = 'none';
    yourlocationbutton.style.outline = 'none';
    yourlocationbutton.style.width = '28px';
    yourlocationbutton.style.height = '28px';
    yourlocationbutton.style.borderRadius = '2px';
    yourlocationbutton.style.boxShadow = '0 1px 4px rgba(0,0,0,0.3)';
    yourlocationbutton.style.cursor = 'pointer';
    yourlocationbutton.style.marginRight = '10px';
    yourlocationbutton.style.padding = '0px';
    yourlocationbutton.title = 'Your Location';
    controlDiv.appendChild(yourlocationbutton);

    var yourlocationdiv = document.createElement('div');
    yourlocationdiv.style.margin = '5px';
    yourlocationdiv.style.width = '18px';
    yourlocationdiv.style.height = '18px';
    yourlocationdiv.style.backgroundImage = 'url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-1x.png)';
    yourlocationdiv.style.backgroundSize = '180px 18px';
    yourlocationdiv.style.backgroundPosition = '0px 0px';
    yourlocationdiv.style.backgroundRepeat = 'no-repeat';
    yourlocationdiv.id = 'you_location_img';
    yourlocationbutton.appendChild(yourlocationdiv);

    google.maps.event.addListener(map, 'center_changed', function () {
        yourlocationdiv.style['background-position'] = '0 0';
    });
    yourlocationbutton.addEventListener('click', function() {
        var imgX = '0';
        var animationInterval = setInterval(function(){
            if(imgX == '-18') imgX = '0';
            else imgX = '-18';
            $('#you_location_img').css('background-position', imgX+'px 0px');
        }, 500);
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                marker.setPosition(latlng);
                map.setCenter(latlng);
                clearInterval(animationInterval);
                $('#you_location_img').css('background-position', '-144px 0px');
            });
        }
        else{
            clearInterval(animationInterval);
            $('#you_location_img').css('background-position', '0px 0px');
        }
    });
    controlDiv.index = 1;
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv);
}
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 17,
		center: university,
		mapTypeControl: false,
	});
	var myMarker = new google.maps.Marker({
		map: map,
		animation: google.maps.Animation.DROP,
	});
	YourLocationButton(map, myMarker);
	var input = document.getElementById('pac-input');
	var searchBox = new google.maps.places.SearchBox(input);

	map.addListener('bounds_changed', function() {
	  searchBox.setBounds(map.getBounds());
	});

	var markers = [];
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
		markers.push(new google.maps.Marker({
		  map: map,
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
	  new directions(map);
	});
  }

function directions(map, marker) {
  this.map = map;
  this.originPlaceId = null;
  this.destinationPlaceId = null;
  this.travelMode = 'WALKING';
  var originInput = document.getElementById('origin-input');
  var destinationInput = document.getElementById('destination-input');
  var modeSelector = document.getElementById('mode-selector');
  this.directionsService = new google.maps.DirectionsService;
  this.directionsDisplay = new google.maps.DirectionsRenderer;
  this.directionsDisplay.setMap(map);
  this.directionsDisplay.setPanel(document.getElementById('panel'));

  var originAutocomplete = new google.maps.places.Autocomplete(originInput, {placeIdOnly: true});
  var destinationAutocomplete = new google.maps.places.Autocomplete(destinationInput, {placeIdOnly: true});

  this.setupClickListener('changemode-walking', 'WALKING');
  this.setupClickListener('changemode-driving', 'DRIVING');

  this.setupPlaceChangedListener(originAutocomplete, 'ORIG');
  this.setupPlaceChangedListener(destinationAutocomplete, 'DEST');

}

directions.prototype.setupClickListener = function(id, mode) {
  var radioButton = document.getElementById(id);
  var me = this;
  radioButton.addEventListener('click', function() {
    me.travelMode = mode;
    me.route();
  });
};

directions.prototype.setupPlaceChangedListener = function(autocomplete, mode) {
  var me = this;
  autocomplete.bindTo('bounds', this.map);
  autocomplete.addListener('place_changed', function() {
    var place = autocomplete.getPlace();
    if (!place.place_id) {
      window.alert("Please select an option from the dropdown list.");
      return;
    }
    if (mode === 'ORIG') {
      me.originPlaceId = place.place_id;
    } else {
      me.destinationPlaceId = place.place_id;
    }
    me.route();
  });

};

directions.prototype.route = function() {
  if (!this.originPlaceId || !this.destinationPlaceId) {
    return;
  }
  var me = this;

  this.directionsService.route({
    origin: {'placeId': this.originPlaceId},
    destination: {'placeId': this.destinationPlaceId},
    travelMode: this.travelMode
  }, function(response, status) {
    if (status === 'OK') {
      me.directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
};