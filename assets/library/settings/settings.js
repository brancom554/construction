(function ($) {
    "use strict";

	var parameters = [];

	var settings_block = '<div class="block-settings-wrapper">'+
							'<div id="block_settings" class="block_settings">'+
								'<section>'+
									'<span class="green" 		title="Green" 		data-color="#0fe0ba"></span>'+
									'<span class="blue" 		title="Blue" 		data-color="#1fb4da"></span>'+
									'<span class="orange" 		title="Orange" 		data-color="#ff5744"></span>'+
									'<span class="purple" 		title="Purple" 		data-color="#ca3378"></span>'+
									'<span class="yellow" 		title="Yellow" 		data-color="#ffbe00"></span>'+
									'<span class="grey" 		title="Grey" 		data-color="#656d78"></span>'+
								'</section>'+
								'<a href="#" id="settings_close">Close</a>'+
							'</div>'+
						'</div>';

	//Init color buttons
	function initColor() {
		$(".block-settings-wrapper section span").on("click", function() {
			var cls = $(this).attr("class");
			var color = $(this).data("color");

			//CSS
			$("link.colors").attr("href", "assets/colors/"+cls+".css");
			
			//Google Maps
			googleMaps(color, "assets/images/map-marker-"+cls+".png");
		});
	}

	//Init open/close button	
	function initClose() {
		parameters.push("opened");

		$("#settings_close").on("click", function(e) {
			$("body").toggleClass("opened-settings");

			if (!$.cookies.get("opened")) {
				$.cookies.set("opened", "opened-settings");
			} else {
				$.cookies.del("opened");
			}

			e.preventDefault();	
		});
	}

	//Init cookies
	function initCookies() {
		for (var key in parameters) {
			if (parameters.hasOwnProperty(key)) {
				var name = parameters[key];
				var parameter = $.cookies.get(name);

				if (parameter) {
					$("body").addClass(parameter);
				}
			}
		}
	}

	//Init
	$("body").prepend(settings_block);
	initColor();	
	initClose();
	initCookies();

	//Activate header style
	var url = window.location.href;
	var ind = url.lastIndexOf("/");
	url = url.substr(ind+1);

	ind = url.indexOf(".");
	url = url.substr(0, ind);

	if (url==="") {url = "image";}

	var $page = $("li.header-"+url);

	$page.addClass("active");
	$page.append('<i class="fa fa-check"></i>');
	
})(jQuery);