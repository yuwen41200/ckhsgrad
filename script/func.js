$(document).ready(function() {
	$(".animation").delay(5000).slideUp("slow");
	$("#sche_table tr:odd").addClass("odd");
	var elem_list = document.getElementsByTagName("section");
	var is_visible = 0;
	$(window).scroll(function() {
		if((is_visible!=elem_list.length) && (in_viewport(elem_list[is_visible]))) {
			$(elem_list[is_visible]).animate({
				marginLeft: '10%',
				opacity: '1'
			}, 250);
			is_visible++;
		}
		if((is_visible!=0) && (!in_viewport(elem_list[is_visible-1]))) {
			$(elem_list[is_visible-1]).animate({
				marginLeft: '100%',
				opacity: '0'
			}, 250);
			is_visible--;
		}
	});
});
function page_scroll(dest) {
	$("html, body").animate({
		scrollTop: $(dest).offset().top-70
	}, 250);
}
function in_viewport(elem) {
	var window_top = $(window).scrollTop();
	var window_bottom = window_top + $(window).height();
	var elem_top = $(elem).offset().top;
	var elem_bottom = elem_top + $(elem).height();
	return (window_bottom > elem_top+200);
}
google.maps.event.addDomListener(window, 'load', init);
function init() {
	var mapOptions = {
		zoom: 15,
		center: new google.maps.LatLng(25.0300, 121.515),
		scrollwheel: false,
		styles: [{'featureType':'water','stylers':[{'color':'#021019'}]},
			{'featureType':'landscape','stylers':[{'color':'#08304b'}]},
			{'featureType':'poi','elementType':'geometry','stylers':[{'color':'#0c4152'},{'lightness':5}]},
			{'featureType':'road.highway','elementType':'geometry.fill','stylers':[{'color':'#000000'}]},
			{'featureType':'road.highway','elementType':'geometry.stroke','stylers':[{'color':'#0b434f'},{'lightness':25}]},
			{'featureType':'road.arterial','elementType':'geometry.fill','stylers':[{'color':'#000000'}]},
			{'featureType':'road.arterial','elementType':'geometry.stroke','stylers':[{'color':'#0b3d51'},{'lightness':16}]},
			{'featureType':'road.local','elementType':'geometry','stylers':[{'color':'#000000'}]},
			{'featureType':'transit.station.airport','elementType':'geometry.fill','stylers':[{'color':'#0c4152'},{'lightness':5}]},
			{'featureType':'administrative','elementType':'geometry.fill','stylers':[{'color':'#000000'}]},
			{'featureType':'administrative','elementType':'geometry.stroke','stylers':[{'color':'#144b53'},{'lightness':14}]},
			{'elementType':'labels.text.fill','stylers':[{'color':'#ffffff'}]},
			{'elementType':'labels.text.stroke','stylers':[{'color':'#000000'},{'lightness':13}]}]
	};
	var mapElement = document.getElementById('map');
	var map = new google.maps.Map(mapElement, mapOptions);
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(25.0302, 121.5125),
	});
	marker.setMap(map);
}
