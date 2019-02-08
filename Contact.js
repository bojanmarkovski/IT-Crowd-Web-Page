function mapInit() {
  
			var myLatLng = new google.maps.LatLng(42.006068, 21.392550);

			var	$main_color = '#C0392B;',
				$saturation= -20,
				$brightness= 5;

			var mapProps = {
				zoom: 14,
				center: myLatLng,
				panControl: false,
		      	zoomControl: true,
		      	mapTypeControl: false,
		      	streetViewControl: false,
		      	mapTypeId: google.maps.MapTypeId.ROADMAP,
		      	scrollwheel: true
			}

			var map1 = new google.maps.Map(document.getElementById("map1"), mapProps);
		};

		google.maps.event.addDomListener(window, 'load', mapInit);

		$(function(){
	
			var $window = $(window);		//Window object
			
			var scrollTime = 0.5;			//Scroll time
			var scrollDistance = 200;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
				
			$window.on("mousewheel DOMMouseScroll", function(event){
				
				event.preventDefault();	
												
				var delta = event.originalEvent.wheelDelta/90 || -event.originalEvent.detail/3;
				var scrollTop = $window.scrollTop();
				var finalScroll = scrollTop - parseInt(delta*scrollDistance);
					
				TweenMax.to($window, scrollTime, {
					scrollTo : { y: finalScroll, autoKill:true },
						ease: Power1.easeOut,	//For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
						autoKill: true,
						overwrite: 5
					});
							
			});
				
		});

		// CLOSE AN OPEN COLLAPSED NAVBAR WHEN CLICKING OUTSIDE
		$(document).click(function (event) {
			var clickover = $(event.target);
			var $navbar = $(".navbar-collapse");	          
		    var _opened = $navbar.hasClass("in");
		    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
				$navbar.collapse('hide');
			}
		});

		if($( window ).width() > 991){

        $(document).on("scroll", function(){
          if
            ($(document).scrollTop() > 15){
            $(".header").addClass("shrink");

          }
          else
          {
            $(".header").removeClass("shrink");
          }
          // console.log($(this).find(".header"))
          // if (($(this).find(".header")).hasClass("shrink")) {
          //   $(this).find(".header").find(".first-logo").slideUp();
          // } else {
          //   $(this).find(".header").find(".second-logo").slideDown();
          // }
        })
      }
      else{
        // Hide Header on on scroll down
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $('.header').outerHeight();

        $(window).scroll(function(event){
            didScroll = true;
        });

        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);

        function hasScrolled() {
            var st = $(this).scrollTop();
            
            // Make sure they scroll more than delta
            if(Math.abs(lastScrollTop - st) <= delta)
                return;
            
            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down
                $('.header').removeClass('nav-down').addClass('nav-up');
                $(".sticky-tablet").removeClass('second-nav-down').addClass("second-nav-up")
            } else {
                // Scroll Up
                if(st + $(window).height() < $(document).height()) {
                    $('.header').removeClass('nav-up').addClass('nav-down');
                	$(".sticky-tablet").removeClass('second-nav-up').addClass("second-nav-down")
                }
            }
            
            lastScrollTop = st;
        }
      }