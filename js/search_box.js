// Wrap in onReady function using jQuery. Don't assume jQuery is located at $.
jQuery(document).ready(function($) {
	// The element
	var $ui = $('#ui_element');
	// On focus and on click display the dropdown
	$ui.find('.sb_input').bind('focus click', function($) {
		$ui.find('.sb_dropdown').show();
	});
	// On mouse leave hide the dropdown
	$ui.bind('mouseleave', function($) {
		$ui.find('.sb_dropdown').hide();
	});
});
