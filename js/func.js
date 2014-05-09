$(document).ready(function() {
	$("#sche_table tr:odd").addClass("odd");
})
function page_scroll(dest) {
	$("body").animate({
		scrollTop: $(dest).offset().top-70
	}, 250);
}
