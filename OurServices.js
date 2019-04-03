// LOADER
window.addEventListener("load", function() {
	const loader = document.querySelector(".loader");
	loader.className += " hidden";
});


$(function(){
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
		            $(".logo").css({"padding-top" : "0px", "transition" : "0.4s"})
		            $(".header ul li").css({"padding" : "0", "transition" : "0.4s"});
	          	}
	        else {
	        	$(".logo").css({"padding-top" : "5px" ,"transition" : "0.4s"});
	            $(".header ul li").css({"padding" : "5px 0px", "transition" : "0.4s"});
			}
        });
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
                $('.header').removeClass('nav-down').addClass('nav-up').css("top", "-330px");
                $(".sticky-tablet").removeClass('second-nav-down').addClass("second-nav-up");
            } else {
                // Scroll Up
                if(st + $(window).height() < $(document).height()) {
                    $('.header').removeClass('nav-up').addClass('nav-down').css("top", "0px");
                	$(".sticky-tablet").removeClass('second-nav-up').addClass("second-nav-down");
                }
            }

            lastScrollTop = st;
        }
    }

    if($( window ).width() < 991){
   		$("hr").css("display" , "inline-block", "!important");
    } else{
    	$("hr").show(1100);
    }
    $(".our-services-box p").fadeIn(1300);
    $(".our-services-box .col-md-4").fadeIn(1300);
    $(".footer").fadeIn(1300);
    $(".col-md-4.col-md-offset-4").fadeIn(1300);
    $(".our-services-box").css("height", "auto");
});
// HAMBURGER MENU
$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
});