// Wrap in onReady function using jQuery. Don't assume jQuery is located at $.
jQuery(document).ready(function($) {
	// The element
	var $ui = $('#block-psu-search-psu-search');
	var $input = $('#block-psu-search-psu-search .form-type-textfield input');
	var $options = $('#block-psu-search-psu-search .form-item-options');

	// On focus and on click display the dropdown
	$ui.find('.form-type-textfield input').bind('focus click', function($) {
		$ui.find('.form-item-options').show();
	});
	// On mouse leave hide the dropdown
	$ui.bind('focusout', function($) {
		hideOptions();
	});

	$('body').bind('click'), function($) {
		hideOptions();
	}

	function hideOptions() {
		if (!$input.infocus() && !$options.infocus()) {
			$options.hide();
			alert('true');
		}
		else {
			alert('false');
		}
	}
	hideOptions();
});
