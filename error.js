$(document).ready(function(){

	// MOBILE NAVBAR
	$('.smooth-scroll-mobile').click(function(e){
	  	e.preventDefault();
		var target = $($(this).attr('href'));
		if(target.length){

			var topOffset = 34;
			if ($(".navbar-inverse").hasClass("nav-down")) {
				topOffset = 92;
			}
		    var scrollTo = target.offset().top - topOffset;
		    $('body, html').animate({scrollTop: scrollTo + 'px'}, 800);
		}
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

  	$(".header").css("background-color", "rgba(0,0,0,0.6)");

  if($( window ).width() > 991){

    $(document).on("scroll", function(){
        if
          ($(document).scrollTop() > 15){
          $(".logo").css({"padding-top" : "0px", "transition" : "0.4s"})
          $(".header ul li").css({"padding" : "0", "transition" : "0.4s"});
          $(".header").css({"background-color" : "#222222", "transition" : "0.4s"});
        }
      else {
        $(".logo").css({"padding-top" : "5px" ,"transition" : "0.4s"});
        $(".header ul li").css({"padding" : "5px 0px", "transition" : "0.4s"});
        $(".header").css({"background-color" : "rgba(0,0,0,0.6)", "transition" : "0.4s"});
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
              
    $(".navbar-toggle").on('click', function() {
      if (!$(".navbar-collapse").hasClass("in")) {
        $(".header").css("background-color", "#222222");
      }
    });

    function hasScrolled() {
      var st = $(this).scrollTop();
      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;
      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('.header').removeClass('nav-down').addClass('nav-up').css("top", "-316px");
          $(".sticky-tablet").removeClass('second-nav-down').addClass("second-nav-up");
      } 
      else {
        // Scroll Up
        if(st < 2){
          $(".header button").on("click", function() {
            $(".nav.navbar-inverse.header").css("background", "#222222");
          });
          if($(".navbar-collapse.collapse").hasClass("in")){
            $(".header button").on("click", function() {
              $(".nav.navbar-inverse.header").css("background-color", "rgba(0,0,0,0.6)");
            });

            $(".header button").on("click", function() {
              $(".nav.navbar-inverse.header").css("background", "#222222");
            });
            
            $(".header").removeClass("shrink");
            $(".nav.navbar-inverse.header").css("background", "#222222");

          } else {
            $(".header").removeClass("shrink");
            $(".nav.navbar-inverse.header").css({"background-color" : "rgba(0,0,0,0.6)", "transition" : "0.3s"});
          }
        }

        else if(st + $(window).height() < $(document).height()) {
          $('.header').removeClass('nav-up').addClass('nav-down').css("top", "0px");
          $(".sticky-tablet").removeClass('second-nav-up').addClass("second-nav-down").css("background-color", "#222222");
          $(".header").css("background", "#222222", "!important");
        }
      }
              
      lastScrollTop = st;
    }
  }

});