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
                        $('#search').focus(function($) {
                                //$('#search').val("");
                                //$('.sb_wrapper').css("display", "block");
				});	
});

// 			(function($) {
// 				/** the element*/
// 				var $ui = $('#ui_element');
// 				/**on focus and on click display the dropdown*/
// 				$ui.find('.sb_input').bind('focus click', function($) {
// 					console.log('CLICK');
// 					$ui.find('.sb_dropdown').show();
// 				});
// 				/**on mouse leave hide the dropdown*/
// 				$ui.bind('mouseleave', function($) {
// 					$ui.find('.sb_dropdown').hide();
// 				});
//                         $('#search').focus(function($) {
//                                 //$('#search').val("");
//                                 //$('.sb_wrapper').css("display", "block");
// 				});			
// 
// 			}(jQuery));


			function multiPSUsearch() {
				with (window.document) {

					var x = getElementsByName('engine');
					for (var k = 0; k < x.length; k++)
						if (x[k].checked) {
							var c = parseInt(x[k].value);
						}

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
