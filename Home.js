
  // fadein

  // $(window).scroll( function(){
    
  //   /* Check the location of each desitransparent element */
  //   $('.hideme').each( function(i){

  //     var bottom_of_object = $(this).position().top + $(this).outerHeight();
  //     var bottom_of_window = $(window).scrollTop() + $(window).height();
              
  //     /* If the object is completely visible in the window, fade it it */
  //     if( bottom_of_window > bottom_of_object ){
          
  //         $(this).animate({'opacity':'1'},700);
  //     }
  //   }); 
  // });



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
          $('.header').removeClass('nav-down').addClass('nav-up').css("top", "-330px");
          $(".sticky-tablet").removeClass('second-nav-down').addClass("second-nav-up");
      } 
      else {
        // Scroll Up
        if(st <= 2 && st >= 1){
          $(".header button").on("click", function() {
            $(".nav.navbar-inverse.header").css("background", "#222222");
          });
          if($(".navbar-collapse.collapse").hasClass("in")){

            $(".header button").on("click", function() {
              $(".nav.navbar-inverse.header").css("background", "#222222");
            });
            
            $(".header").removeClass("shrink");
            $(".nav.navbar-inverse.header").css("background", "#222222");

          } else {
            $(".header").removeClass("shrink");
            $(".nav.navbar-inverse.header").css("background-color", "rgba(0,0,0,0.6)");
          }
        }

        else if(st + $(window).height() < $(document).height()) {
          $('.header').removeClass('nav-up').addClass('nav-down').css("top", "0px");
          $(".sticky-tablet").removeClass('second-nav-up').addClass("second-nav-down").css("background-color", "#222222");
          $(".header").css("background", "#222222", "!important");
          $(".nav.navbar-inverse.header").css("background", "#222222");
        }
      }
              
      lastScrollTop = st;

      if($("body").position().top == st){
        $(".header button").on("click", function() {
          $(".nav.navbar-inverse.header").css("background", "#222222");
        });
        if($(".navbar-collapse.collapse").hasClass("in")){

          $(".header button").on("click", function() {
            $(".nav.navbar-inverse.header").css("background", "#222222");
          });
          
          $(".header").removeClass("shrink");
          $(".nav.navbar-inverse.header").css("background", "#222222");

        } else {
          $(".header").removeClass("shrink");
          $(".nav.navbar-inverse.header").css("background-color", "rgba(0,0,0,0.6)");
        }
     }
    }
  }
 
  if($( window ).width() > 1170){
    $(document).ready(function(){

      var screenWidth = $( window ).width();
      var rightSpace = screenWidth - 1170;
      if (screen.width > 992) {

        $(".work-process").css("margin-left", rightSpace / 2)

        $(window).on('resize', function() {
          var screenWidth = $( window ).width();
          var rightSpace = screenWidth - 1170;

          $(".work-process").css("margin-left", rightSpace / 2)
        });
      }
    });
  }

  if($( window ).width() <= 1170){
    var flag = true;

    $(window).scroll(function(){
      if ($(".work-process").hasClass("newClass") && flag){
        var screenWidth = $( window ).width();
        var delay = (screenWidth / 220 ) * 1600 - 2000;
        var animationRight = 1170 - screenWidth;
        flag = false;
        setTimeout( function() { 
          $(".work-process-row-container").stop()
            .animate({
              right: animationRight + "px"
            }, (7600 - delay), function() {

            })
            .animate({
              right: 0
            }, function(){
              $(".work-process-row-container").css({"overflow-x" : "scroll"})
            });
        }, delay)
      }
    });
  }
    
  // CLOSE AN OPEN COLLAPSED NAVBAR WHEN CLICKING OUTSIDE
  $(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");            
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
      $navbar.collapse('hide');
    }
  });