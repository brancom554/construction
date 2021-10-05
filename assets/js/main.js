(function($) {
    
	"use strict";

	var ephesus = {
		maps_created:false
	};
	
	/**
	 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
	 * jQuery.browser.mobile will be true if the browser is a mobile device
	 *
	 **/
	(function(a) {
		(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4));
	})(navigator.userAgent||navigator.vendor||window.opera);

	var mobile = $.browser.mobile;

	if(!mobile) {
		//Animations
		new WOW().init();
		
		//Custom scrollbar
		$('#about').mCustomScrollbar({
            scrollInertia:200,
            scrollEasing:"easeInOutCubic"
        });
	}
	
	/********************
		- Preloader -
	********************/
	setTimeout(function() {
        $(".page-loader").velocity({
            opacity:"0",
            complete:function() {
                $(".loading").velocity("transition.shrinkOut", {
                    duration:1000,
                    easing:[0.7, 0, 0.3, 1],
                }); 
            }
        }, {display:"none"});
    }, 1000);

	/*********************
		- Background -
	*********************/

	//Image
	if ($('.bg.image').length>0) {
		$('.bg.image').vegas({
			slides:[
				{src:'images/bg/image.jpg'},
			],
			transition:'fade'
		});		
	}
    
    //Slideshow
	if ($('.bg.slideshow').length>0) {
		$('.bg.slideshow').vegas({
			slides:[
				{src:'images/bg/slide-1.jpg'},
				{src:'images/bg/slide-2.jpg'},
				{src:'images/bg/slide-3.jpg'},
			],
			transition:'fade',
			animation:$('.bg.slideshow').data("animation")
		});
	}
    
    //Constellation
	if ($('.bg.constellation').length>0) {
		$('.bg.constellation').vegas({
			slides:[
				{src:'images/bg/constellation.jpg'},
			],
			transition:'fade'
		});		
	}
    
    //Stars
	if ($('.bg.stars').length>0) {
		$('.bg.stars').vegas({
			slides:[
				{src:'images/bg/stars.jpg'},
			],
			transition:'fade'
		});		
	}
	
	//Fix Vegas responsive issue
	$('.bg').removeAttr('style');
	
	//Video
	if ($(".player").length>0) {
		$(".player").mb_YTPlayer();
	}

	/********************
		- Subscribe -
	********************/
	$("#notifyMe").notifyMe();

	/**************************
		- Countdown timer -
	**************************/
	if ($("#countdown").length>0) {
		$("#countdown").flipTimer({
			date:"2021/10/08 08:00:00",
			dayTextNumber:"auto",
			bgColor:"#fff",
			dividerColor:"#666",
			digitColor:"#333",
			textColor:"#fff",
			boxShadow:false,
			
			//Expire
			expireType:"message", //message, hide, redirect
			message:"Contactez nous au +229 91 96 11 11",
			redirect:""
		});
	}

	/*******************
		- Info nav -
	*******************/   
    $('.info-nav, .more-info, .nav').on("click", function(e) {
		e.preventDefault();
        
        var btn = $(this);

        $('.page').toggleClass("modal-opened");
        $('.info-nav').toggleClass("active");
        
        if (btn.hasClass("nav")) {
            if (btn.attr("href")!=="#") {
                $("#about").modal("show");
                $('.page').addClass("modal-opened");
                $('.info-nav').addClass("active");            
            } else {
                $("#about").modal("hide");
                $('.page').removeClass("modal-opened");
                $('.info-nav').removeClass("active");
            }
        } 
        
        var target = '';
        
        if (btn.attr("href")!==undefined && btn.attr("href")!=="#") {
            target = btn.attr("href");
            
            if (target.indexOf("-area")!=-1) {
                setTimeout(function() {
                    $(".modal").mCustomScrollbar("scrollTo", target, {
                        scrollInertia:500,
                        callbacks:false
                    });
                }, 300);
            }
        }
        
        if ($('body').find('nav').length>0) {
            var nav = $('body').find('nav');
            var opened = $('.page').hasClass("modal-opened") ? true : false;
            var width = opened ? parseInt($('.modal-dialog').width(), 10) : 0;

            nav.find('a').removeClass("active");
            nav.animate({right:width}, 500);

            if (!opened) {
                nav.find('a.home').addClass("active");
            } else {
                if (btn.hasClass("nav") && btn.attr("href")!=="#") {
                    btn.addClass("active");
                } else {
                    nav.find('a.about').addClass("active");
                }
            }            
        }  
	});
	
	//Close modal dialog
	$(document).on("click", ".modal-backdrop", function() {
		$('.info-nav').trigger("click");
    });

	//Init Google Maps
	$('#about').on("shown.bs.modal", function() {
		if (!ephesus.maps_created) {
			setTimeout(function() {
				googleMaps();
				ephesus.maps_created = true;
			}, 500);
		}
	});

    /***********************
		- Contact form -
	***********************/
    function contactForm() {
        if ($('.contact-form').length===0) {
				return;
        }
        
        var $name = $('.field-name'), 
            $email = $('.field-email'), 
            $phone = $('.field-phone'),
            $text = $('.field-message'), 
            $button = $('#contact-submit');

        $('.field-name, .field-email, .field-message').focus(function() {
            if ($(this).parent().find('.error').length>0) {
                $(this).parent().find('.error').fadeOut(150, function() {
                    $(this).remove();
                });
            }
        });

        $button.removeAttr('disabled');

        $button.on("click", function() {
            var fieldNotice = function($that) {
                if ($that.parent().find('.error').length===0) {
                    $('<span class="error"><i class="fa fa-times"></i></span>').appendTo($that.parent()).fadeIn(150);
                }
            };

            if ($name.val().length<1)   {fieldNotice($name);}
            if ($email.val().length<1)  {fieldNotice($email);}
            if ($text.val().length<1)   {fieldNotice($text);}

            if ($('.contact-form').find('.field .error').length===0) {
                $(document).ajaxStart(function() {
                    $button.attr('disabled', true);
                });

                $.post('php/contact.php', {
                    name:$name.val(), 
                    email:$email.val(),
                    phone:$phone.val(), 
                    message:$text.val()
                }, function(response) {
					 console.log("data "+response);
                   // var data = $.parseJSON(response);
                    var successmsg = "Mail envoyé avec succes"; 
                    if (response==='email') {
                        // fieldNotice($email);
						document.getElementById('error').innerHTML = successmsg;
                        $button.removeAttr('disabled');
                    } else if (response==='error') {
                        $button.text('Unknown Error :(');
                    } else {
                        $('.contact-form-holder').fadeOut(300);
                        $('.contact-form-result').fadeIn(300);
                    }
                });
            }
        });
    }
    
    contactForm();    

	/**********************
		- Google Maps -
	**********************/
	function googleMaps(color, marker) {
		if ($("#google-container").length===0) {
			return;
		}

		//Variables
		var arrMap = {};
		
		var container = $("#google-container"),
			title = container.data("title"),
			latitude = container.data("latitude"),
			longitude = container.data("longitude"),
			zoom = container.data("zoom");		

		//Marker icon
		var marker_url = (marker===undefined ? container.data("marker") : marker);

		//Main color
		var main_color = (color===undefined ? container.data("color") : color);

		//Saturation and brightness
		var saturation_value = -20;
		var brightness_value = 5;

		//Map style
		var style= [ 
			{//Set saturation for the labels on the map
				elementType:"labels",
				stylers:[
					{saturation:saturation_value},
				]
			}, 

			{//Poi stands for point of interest - don't show these labels on the map 
				featureType:"poi",
				elementType:"labels",
				stylers:[
					{visibility:"off"},
				]
			},

			{//Hide highways labels on the map
				featureType:'road.highway',
				elementType:'labels',
				stylers:[
					{visibility:"off"},
				]
			}, 

			{//Hide local road labels on the map
				featureType:"road.local", 
				elementType:"labels.icon", 
				stylers:[
					{visibility:"off"}, 
				] 
			},

			{//Hide arterial road labels on the map
				featureType:"road.arterial", 
				elementType:"labels.icon", 
				stylers:[
					{visibility:"off"},
				] 
			},

			{//Hide road labels on the map
				featureType:"road",
				elementType:"geometry.stroke",
				stylers:[
					{visibility:"off"},
				]
			},

			{//Style different elements on the map
				featureType:"transit", 
				elementType:"geometry.fill", 
				stylers:[
					{hue:main_color},
					{visibility:"on"}, 
					{lightness:brightness_value}, 
					{saturation:saturation_value},
				]
			}, 

			{
				featureType:"poi",
				elementType:"geometry.fill",
				stylers:[
					{hue:main_color},
					{visibility:"on"}, 
					{lightness:brightness_value}, 
					{saturation:saturation_value},
				]
			},

			{
				featureType:"poi.government",
				elementType:"geometry.fill",
				stylers:[
					{hue:main_color},
					{visibility:"on"}, 
					{lightness:brightness_value}, 
					{saturation:saturation_value},
				]
			},

			{
				featureType:"poi.attraction",
				elementType:"geometry.fill",
				stylers:[
					{hue:main_color},
					{visibility:"on"}, 
					{lightness:brightness_value}, 
					{saturation:saturation_value},
				]
			},

			{
				featureType:"poi.business",
				elementType:"geometry.fill",
				stylers:[
					{hue:main_color},
					{visibility:"on"}, 
					{lightness:brightness_value}, 
					{saturation:saturation_value},
				]
			},

			{
				featureType:"transit",
				elementType:"geometry.fill",
				stylers:[
					{hue:main_color},
					{visibility:"on"}, 
					{lightness:brightness_value}, 
					{saturation:saturation_value},
				]
			},

			{
				featureType:"transit.station",
				elementType:"geometry.fill",
				stylers:[
					{hue:main_color},
					{visibility:"on"}, 
					{lightness:brightness_value}, 
					{saturation:saturation_value},


				]
			},

			{
				featureType:"landscape",
				stylers:[
					{hue:main_color},
					{visibility:"on"}, 
					{lightness:brightness_value}, 
					{saturation:saturation_value},
				]	
			},

			{
				featureType:"road",
				elementType:"geometry.fill",
				stylers:[
					{hue:main_color},
					{visibility:"on"}, 
					{lightness:brightness_value}, 
					{saturation:saturation_value},
				]
			},

			{
				featureType:"road.highway",
				elementType:"geometry.fill",
				stylers:[
					{hue:main_color},
					{visibility:"on"}, 
					{lightness:brightness_value}, 
					{saturation:saturation_value},
				]
			},

			{
				featureType:"water",
				elementType:"geometry",
				stylers:[
					{hue:main_color},
					{visibility:"on"}, 
					{lightness:brightness_value}, 
					{saturation:saturation_value},
				]
			}
		];

		//Set google map options
		var map_options = {
			center:new google.maps.LatLng(latitude, longitude),
			zoom:zoom,
			panControl:false,
			zoomControl:false,
			mapTypeControl:false,
			streetViewControl:false,
			mapTypeId:google.maps.MapTypeId.ROADMAP,
			scrollwheel:false,
			styles:style
		};

		//Inizialize the map
		var map = new google.maps.Map(document.getElementById("google-container"), map_options);

		//Add a custom marker to the map        
		var marker = new google.maps.Marker({
			position:new google.maps.LatLng(latitude, longitude),
			map:map,
			title:title,
			visible:true,
			icon:marker_url
		});

		google.maps.event.addDomListener(window, "resize", function() {
			var center = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(center); 
		});

		//Add custom buttons for the zoom-in/zoom-out on the map
		if (arrMap.zoomControlDiv===undefined) {		
			var zoomControlDiv = document.createElement("div");		
			var zoomControl = new customZoomControl(zoomControlDiv, map);
			arrMap.zoomControlDiv = zoomControlDiv;
		}

		//Insert the zoom div on the top left of the map
		map.controls[google.maps.ControlPosition.LEFT_TOP].push(arrMap.zoomControlDiv);
	}

	function customZoomControl(controlDiv, map) {
		//Grap the zoom elements from the DOM and insert them in the map 
		var controlUIzoomIn = document.getElementById("zoom-in"),
		controlUIzoomOut = document.getElementById("zoom-out");

		controlDiv.appendChild(controlUIzoomIn);
		controlDiv.appendChild(controlUIzoomOut);

		//Setup the click event listeners and zoom-in or out according to the clicked element
		google.maps.event.addDomListener(controlUIzoomIn, "click", function() {
			map.setZoom(map.getZoom()+1);
		});

		google.maps.event.addDomListener(controlUIzoomOut, "click", function() {
			map.setZoom(map.getZoom()-1);
		});
	}

})(jQuery);

