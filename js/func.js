$(document).ready(function() {
	$("#sche_table tr:odd").addClass("odd");
	$('.scroll-pane').jScrollPane();
});

function page_scroll(dest) {
	$("body").animate({
		scrollTop: $(dest).offset().top-70
	}, 250);
}

google.maps.event.addDomListener(window, 'load', init);
        
function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(25.0300, 121.515), // CK
        //unable to use scrollwheel
        scrollwheel: false,
        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
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
        	{'featureType':'transit','stylers':[{'color':'#146474'}]},
        	{'featureType':'administrative','elementType':'geometry.fill','stylers':[{'color':'#000000'}]},
        	{'featureType':'administrative','elementType':'geometry.stroke','stylers':[{'color':'#144b53'},{'lightness':14}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    // Create the Google Map using out element and options defined above
    var marker = new google.maps.Marker({
    	position: new google.maps.LatLng(25.0302, 121.5125),
	});
	// To add the marker to the map, call setMap();
	marker.setMap(map);
    
}
