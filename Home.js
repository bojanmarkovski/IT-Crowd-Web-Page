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