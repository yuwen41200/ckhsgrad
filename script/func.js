if(navigator.appName == "Microsoft Internet Explorer") {
	var regexp = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
	if(regexp.exec(navigator.userAgent) != null)
		var version = parseFloat(RegExp.$1);
	if((typeof version != "undefined") && (version <= 8.0))
		window.location.replace("plain.htm");
	$(".animation").hide(0);
}
$(document).ready(function() {
	if($(window).width() <= 640) {
		$(".animation").hide(0);
		$(".option").hide(0);
		$("section").css({"margin-left":"10%","opacity":"1"});
	}
	$(window).load(function() {
		$(".animation").delay(8000).fadeOut(1000);
	});
	$("#sche-table tr:odd").addClass("odd");
	if($(window).width() > 640) {
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
	}
	$("#opt-video").hover(function() {
		$("#nav-video").addClass("nav-hover");
	}, function() {
		$("#nav-video").removeClass("nav-hover");
	});
	$("#opt-video").click(function() {
		page_scroll("#video");
	});
	$("#opt-about").hover(function() {
		$("#nav-about").addClass("nav-hover");
	}, function() {
		$("#nav-about").removeClass("nav-hover");
	});
	$("#opt-about").click(function() {
		page_scroll("#about");
	});
	$("#opt-schedule").hover(function() {
		$("#nav-schedule").addClass("nav-hover");
	}, function() {
		$("#nav-schedule").removeClass("nav-hover");
	});
	$("#opt-schedule").click(function() {
		page_scroll("#schedule");
	});
	$("#opt-activities").hover(function() {
		$("#nav-activities").addClass("nav-hover");
	}, function() {
		$("#nav-activities").removeClass("nav-hover");
	});
	$("#opt-activities").click(function() {
		page_scroll("#activities");
	});
	$("#opt-contact").hover(function() {
		$("#nav-contact").addClass("nav-hover");
	}, function() {
		$("#nav-contact").removeClass("nav-hover");
	});
	$("#opt-contact").click(function() {
		page_scroll("#contact");
	});
	$("#opt-map").hover(function() {
		$("#nav-map").addClass("nav-hover");
	}, function() {
		$("#nav-map").removeClass("nav-hover");
	});
	$("#opt-map").click(function() {
		page_scroll("#map");
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
var counter = 0, is_tag = false;
var text = "Lighten Up These Years<br>Lighten Up Your Smile<br>Lighten Up All the Memories<br>We're Enlightened...";
function text_effect() {
	var change_text = text.slice(0, ++counter);
	var check_tag = change_text.slice(-1);
	if(check_tag == "<") is_tag = true;
	if(check_tag == ">") is_tag = false;
	if(!is_tag) document.getElementById("effect").childNodes[0].innerHTML = change_text;
	if(change_text == text) return;
	setTimeout(text_effect, 80);
}
function pop(elem) {
	if($(window).width() > 640) {
		$(elem).bPopup({modalColor: '#0FF'});
	}
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
	var mapElement = document.getElementById('googlemap');
	var map = new google.maps.Map(mapElement, mapOptions);
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(25.0302, 121.5125),
	});
	marker.setMap(map);
}
