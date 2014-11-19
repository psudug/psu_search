jQuery(document).ready(function($) {
	var form = $('#psu-search-form');
  var options = $(form).find('.form-type-radios');

  // Hide Options initially
  $(options).addClass('element-invisible');

  $(form).focusin(function() {
    $(options).removeClass('element-invisible');
		$(this).addClass('expanded');
	});

  $(form).click(function(event) {
    event.stopPropagation();
  });

	$(document).click(function() {
    $(options).addClass('element-invisible');
    $(form).removeClass('expanded');
  });
});
