$(document).ready(function() {

	drawPath();

} );

function drawPath(){

	//Se hubiera podido hacer un arreglo e iterar todos los puntos pero ya no me alcanzó el tiempo
	var markers = [
			{
				"title": 'Punto 1',
				"lat": 20.650467348584456,
				"lng": -101.51700250804424
			}
		,
			{
				"title": 'Punto 2',
				"lat": 20.443783215572093,
				"lng": -101.541046500206
			}
		,
			{
				"title": 'Punto 3',
				"lat": 20.44376656515068,
				"lng": -101.54105421155691
			}
		,
			{
				"title": 'Punto 4',
				"lat": 20.453734189995163,
				"lng": -101.52047228068113
			}
		,
			{
				"title": 'Punto 5',
				"lat": 20.4510504810604,
				"lng": -101.5209299325943
			}
			,
			{
				"title": 'Punto 6',
				"lat": 20.45008699832614,
				"lng": -101.51475079357624
			}
			,
			{
				"title": 'Punto 7',
				"lat": 20.68281368552153,
				"lng": -101.62363708019257
			}
			,
			{
				"title": 'Punto 8',
				"lat": 20.49256465494057,
				"lng": -101.4422258734703
			}
			,
			{
				"title": 'Punto 9',
				"lat": 20.407637188720194,
				"lng": -101.4103639125824
			}
	];	
	
	var mapOptions = {
		center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
		zoom: 10,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
	var infoWindow = new google.maps.InfoWindow();
	var lat_lng = new Array();
	var latlngbounds = new google.maps.LatLngBounds();
	for (i = 0; i < markers.length; i++) {
		var data = markers[i]
		var myLatlng = new google.maps.LatLng(data.lat, data.lng);
		lat_lng.push(myLatlng);
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: data.title
		});
		latlngbounds.extend(marker.position);
		(function (marker, data) {
			google.maps.event.addListener(marker, "click", function (e) {
				infoWindow.setContent(data.description);
				infoWindow.open(map, marker);
			});
		})(marker, data);
	}
	map.setCenter(latlngbounds.getCenter());
	map.fitBounds(latlngbounds);
}