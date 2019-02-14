
  // fadein

  $(window).scroll( function(){
    
        /* Check the location of each desitransparent element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},700);
                    
            }
            
        }); 
    
    });

    // $(window).scroll( function() {
    //   $("top-button").each(function(e) {
    //     var button = $(this).position().top + $(this).outerHeight();
    //     var prozorec = $(window).scrollTop() + $(window).height()

    //     if (button > prozorec) {
    //       $(this).animate({'opacity':'1'}, 100);
    //     }
    //   })
    // })


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

$(function(){
  
        var $window = $(window);    //Window object
        
        var scrollTime = 0.5;     //Scroll time
        var scrollDistance = 200;   //Distance. Use smaller value for shorter scroll and greater value for longer scroll
          
        $window.on("mousewheel DOMMouseScroll", function(event){
          
          event.preventDefault(); 
                          
          var delta = event.originalEvent.wheelDelta/90 || -event.originalEvent.detail/3;
          var scrollTop = $window.scrollTop();
          var finalScroll = scrollTop - parseInt(delta*scrollDistance);
            
          TweenMax.to($window, scrollTime, {
            scrollTo : { y: finalScroll, autoKill:true },
              ease: Power1.easeOut, //For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
              autoKill: true,
              overwrite: 5              
            });
                
        });
        
      });

    $(document).ready(function(){

        var screenWidth = $( window ).width();
        var rightSpace = screenWidth - 1170;

        $(".work-process").css("margin-left", rightSpace / 2)

      $(window).on('resize', function() {
          var screenWidth = $( window ).width();
        var rightSpace = screenWidth - 1170;
          
          $(".work-process").css("margin-left", rightSpace / 2)
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