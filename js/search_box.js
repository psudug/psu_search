jQuery(document).ready(function($) {
	var form = $('#block-psu-search-psu-search');

  $(form).focusin(function() {
		$(this).addClass('expanded');
	});

  $(form).click(function(event) {
    event.stopPropagation();
  });

	$(document).click(function() {
    $(form).removeClass('expanded');
  });
});
