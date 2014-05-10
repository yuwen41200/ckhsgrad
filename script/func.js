$(document).ready(function() {
	$("#sche_table tr:odd").addClass("odd");
	$('.scroll-pane').jScrollPane();
});
function page_scroll(dest) {
	$("html, body").animate({
		scrollTop: $(dest).offset().top-70
	}, 250);
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
        	{'elementType':'labels.text.fill','stylers':[{'color':'#ffffff'}]},
        	{'elementType':'labels.text.stroke','stylers':[{'color':'#000000'},{'lightness':13}]},
        	{'featureType':'administrative','elementType':'geometry.fill','stylers':[{'color':'#000000'}]},
        	{'featureType':'administrative','elementType':'geometry.stroke','stylers':[{'color':'#144b53'},{'lightness':14}]}]
    };
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
    	position: new google.maps.LatLng(25.0302, 121.5125),
	});
	marker.setMap(map);
}
