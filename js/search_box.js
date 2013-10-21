// Wrap in onReady function using jQuery. Don't assume jQuery is located at $.
jQuery( document ).ready(function( $ ) {
  				/** the element*/
				var $ui = $('#ui_element');
				/**on focus and on click display the dropdown*/
				$ui.find('.sb_input').bind('focus click', function($) {
					$ui.find('.sb_dropdown').show();
				});
				/**on mouse leave hide the dropdown*/
				$ui.bind('mouseleave', function($) {
					$ui.find('.sb_dropdown').hide();
				});
				
				/* Hide engines that were not enabled via the settings in the Drupal 
				 * block configure.
				 */
				var psu_show = Drupal.settings.psu_drupal_search_block.show;
				for (engine in psu_show) {
					if (psu_show[engine]==0)
						$('#engine-'+engine).hide();
				}
				
				// Select default search engine.
				$('input#'+Drupal.settings.psu_drupal_search_block.default_engine).attr("checked","checked");
				
				//Set Search box placeholder text.
				$('#ui_element input#search').attr('placeholder', Drupal.settings.psu_drupal_search_block.placeholder);
});

function multiPSUsearch() {
	with (window.document) {

		var elements = getElementsByName('engine');
		for (var k = 0; k < elements.length; k++)
			if (elements[k].checked) {
				var c = parseInt(elements[k].value);
			}
			
		/* Send value to sub-form to query on specific search engine.
		 * 
		 * Value is copied from the main search form.
		 * Based on the selection from the radio-buttons, it is pasted
		 * into the corresponding sub-form for that search engine.
		 * That form is then submitted resulting in the search executing
		 * on the correctly selected search engine.
		 */
		var v = searchengine.search.value;
		switch (c) {
			case 1:
				psupeople.cn.value = v;
				psupeople.action = "http://www.psu.edu/cgi-bin/ldap/ldap_query.cgi";
				psupeople.submit();
				break;
			case 2:
				psudepts.dept_name.value = v;
				psudepts.action = "http://www.psu.edu/cgi-bin/ldap/dept_query.cgi";
				psudepts.submit();
				break;
			case 3:
				thissite.keys.value = v;
				thissite.action = "/search/node";
				thissite.submit();
				break;
			default:
				window.open("http://www.psu.edu/search/gss/" + v, "_self")
		}
	}
}
