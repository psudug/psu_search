// Wrap in onReady function using jQuery. Don't assume jQuery is located at $.
jQuery(document).ready(function($) {
	$('#block-psu-search-psu-search').focusin(function() {
		$(this).addClass('expanded');
	});

	$('#block-psu-search-psu-search').focusout(function() {
		$(this).removeClass('expanded');
	});
});
