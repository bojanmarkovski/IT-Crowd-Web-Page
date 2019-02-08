$(document).ready(function(){

			// LEFT ACTIVE SIDEBAR DESKTOP
			$('.smooth-scroll').click(function(e){
			  	e.preventDefault();
				var target = $($(this).attr('href'));
				if(target.length){
				    var scrollTo = target.offset().top - 51;
				    $('body, html').animate({scrollTop: scrollTo + 'px'}, 800);
				}
			});

			$(window).scroll(function() {

				var scrollDistance = $(window).scrollTop();

				// Assign active class to nav links while scolling
				$('.page-section').each(function(i) {
					if ($(this).position().top <= scrollDistance) {
						$('.left-side a li').removeClass('active-right-side');
						$('.left-side a li').eq(i).addClass('active-right-side');
					}
				});

				// Assign active class to nav links while scolling
				$('.page-section').each(function(i) {
					if ($(this).position().top <= scrollDistance && scrollDistance > 0) {
						$('.pn-ProductNav_Link.smooth-scroll-mobile').attr('aria-selected', 'false');
						$('.pn-ProductNav_Link.smooth-scroll-mobile').eq(i).attr('aria-selected', 'true');
						moveIndicator(pnProductNav.querySelector("[aria-selected=\"true\"]"), colours[0]);
					}
				});
			}).scroll();

			// MOBILE NAVBAR
			$('.smooth-scroll-mobile').click(function(e){
			  	e.preventDefault();
				var target = $($(this).attr('href'));
				if(target.length){

					var topOffset = 34;
					if ($(".navbar-inverse").hasClass("nav-down")) {
						console.log("DAda")
						topOffset = 97;
					}
				    var scrollTo = target.offset().top - topOffset;
				    $('body, html').animate({scrollTop: scrollTo + 'px'}, 800);
				}
			});

			var flag = true;
			$(window).on('scroll', function() {

				var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

		  		if($(window).scrollTop() >= $('#our-skills').offset().top - 100 && flag) {
			    	$('#our-skills').addClass('in-view');
			    		$(".progress-bar").each(function() {
							var percent = $(this).data("percent");
							$(this).animate({
								width: percent,
							}, 300, function() {
								$(".progress-percent").animate({
									opacity: "1",
								}, 1000);
							});
						});

					flag = false;
				}

			}).scroll();

			// LEFT ACTIVE SIDEBAR
			$(".left-side ul").on('click', "li", function() {
				
				$(".our-team").removeClass("active-right-side");
				$(".offices").removeClass("active-right-side");
				$(".partners").removeClass("active-right-side");
				$(".our-business").removeClass("active-right-side");
				$(".our-skills").removeClass("active-right-side");

				$(this).addClass("active-right-side");
			});

			
			$("#accordion").on('click', '.panel-heading', function() {

				var collapseIn = $(this).parents(".panel-default").find(".panel-collapse");
				var activeCollapse = $(this).parents(".panel-default").attr("class").split(" ")[1];
				var panelDefault = $(this).parents(".panel-default");
				
				if (collapseIn.hasClass("in")) {
					panelDefault.find(".right").removeClass("active-panel-body-right");
					panelDefault.find(".left").removeClass("active-panel-body-left");
					panelDefault.find(".panel-heading").removeClass("background-panel-title");
				} else if (!collapseIn.hasClass("in")){
					$("." + activeCollapse).find(".pull-right").removeClass("active-panel-body-right active-panel-body-left");
					$("." + activeCollapse).find(".panel-heading").removeClass("background-panel-title");
					panelDefault.find(".right").addClass("active-panel-body-right");
					panelDefault.find(".left").addClass("active-panel-body-left");
					panelDefault.find(".panel-heading").addClass("background-panel-title");
				}
			});
			

			$( '.top-button' ).on( 'click', function(e){

			  	var href = $(this).attr( 'href' );
			  	$( 'html, body' ).animate({
					scrollTop: $( ".header" ).offset().top
			  	}, 500 );
			  	e.preventDefault();
			});


		
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


			var SETTINGS = {
			    navBarTravelling: false,
			    navBarTravelDirection: "",
			    navBarTravelDistance: 150
			}

			var colours = {
			    0: "#C0392B",
			    1: "C0392B",
			    2: "C0392B",
			    3: "C0392B",
			    4: "C0392B",
			    5: "C0392B",
			    6: "C0392B",
			}

			document.documentElement.classList.remove("no-js");
			document.documentElement.classList.add("js");

			// Out advancer buttons
			var pnAdvancerLeft = document.getElementById("pnAdvancerLeft");
			var pnAdvancerRight = document.getElementById("pnAdvancerRight");
			// the indicator
			var pnIndicator = document.getElementById("pnIndicator");

			var pnProductNav = document.getElementById("pnProductNav");
			var pnProductNavContents = document.getElementById("pnProductNavContents");

			pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));

			// Set the indicator
			moveIndicator(pnProductNav.querySelector("[aria-selected=\"true\"]"), colours[0]);

			// Handle the scroll of the horizontal container
			var last_known_scroll_position = 0;
			var ticking = false;

			function doSomething(scroll_pos) {
			    pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));
			}

			pnProductNav.addEventListener("scroll", function() {
			    last_known_scroll_position = window.scrollY;
			    if (!ticking) {
			        window.requestAnimationFrame(function() {
			            doSomething(last_known_scroll_position);
			            ticking = false;
			        });
			    }
			    ticking = true;
			});


			pnAdvancerLeft.addEventListener("click", function() {
			    // If in the middle of a move return
			    if (SETTINGS.navBarTravelling === true) {
			        return;
			    }
			    // If we have content overflowing both sides or on the left
			    if (determineOverflow(pnProductNavContents, pnProductNav) === "left" || determineOverflow(pnProductNavContents, pnProductNav) === "both") {
			        // Find how far this panel has been scrolled
			        var availableScrollLeft = pnProductNav.scrollLeft;
			        // If the space available is less than two lots of our desired distance, just move the whole amount
			        // otherwise, move by the amount in the settings
			        if (availableScrollLeft < SETTINGS.navBarTravelDistance * 2) {
			            pnProductNavContents.style.transform = "translateX(" + availableScrollLeft + "px)";
			        } else {
			            pnProductNavContents.style.transform = "translateX(" + SETTINGS.navBarTravelDistance + "px)";
			        }
			        // We do want a transition (this is set in CSS) when moving so remove the class that would prevent that
			        pnProductNavContents.classList.remove("pn-ProductNav_Contents-no-transition");
			        // Update our settings
			        SETTINGS.navBarTravelDirection = "left";
			        SETTINGS.navBarTravelling = true;
			    }
			    // Now update the attribute in the DOM
			    pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));
			});

			pnAdvancerRight.addEventListener("click", function() {
			    // If in the middle of a move return
			    if (SETTINGS.navBarTravelling === true) {
			        return;
			    }
			    // If we have content overflowing both sides or on the right
			    if (determineOverflow(pnProductNavContents, pnProductNav) === "right" || determineOverflow(pnProductNavContents, pnProductNav) === "both") {
			        // Get the right edge of the container and content
			        var navBarRightEdge = pnProductNavContents.getBoundingClientRect().right;
			        var navBarScrollerRightEdge = pnProductNav.getBoundingClientRect().right;
			        // Now we know how much space we have available to scroll
			        var availableScrollRight = Math.floor(navBarRightEdge - navBarScrollerRightEdge);
			        // If the space available is less than two lots of our desired distance, just move the whole amount
			        // otherwise, move by the amount in the settings
			        if (availableScrollRight < SETTINGS.navBarTravelDistance * 2) {
			            pnProductNavContents.style.transform = "translateX(-" + availableScrollRight + "px)";
			        } else {
			            pnProductNavContents.style.transform = "translateX(-" + SETTINGS.navBarTravelDistance + "px)";
			        }
			        // We do want a transition (this is set in CSS) when moving so remove the class that would prevent that
			        pnProductNavContents.classList.remove("pn-ProductNav_Contents-no-transition");
			        // Update our settings
			        SETTINGS.navBarTravelDirection = "right";
			        SETTINGS.navBarTravelling = true;
			    }
			    // Now update the attribute in the DOM
			    pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));
			});

			pnProductNavContents.addEventListener(
			    "transitionend",
			    function() {
			        // get the value of the transform, apply that to the current scroll position (so get the scroll pos first) and then remove the transform
			        var styleOfTransform = window.getComputedStyle(pnProductNavContents, null);
			        var tr = styleOfTransform.getPropertyValue("-webkit-transform") || styleOfTransform.getPropertyValue("transform");
			        // If there is no transition we want to default to 0 and not null
			        var amount = Math.abs(parseInt(tr.split(",")[4]) || 0);
			        pnProductNavContents.style.transform = "none";
			        pnProductNavContents.classList.add("pn-ProductNav_Contents-no-transition");
			        // Now lets set the scroll position
			        if (SETTINGS.navBarTravelDirection === "left") {
			            pnProductNav.scrollLeft = pnProductNav.scrollLeft - amount;
			        } else {
			            pnProductNav.scrollLeft = pnProductNav.scrollLeft + amount;
			        }
			        SETTINGS.navBarTravelling = false;
			    },
			    false
			);

			// Handle setting the currently active link
			pnProductNavContents.addEventListener("click", function(e) {
			    var links = [].slice.call(document.querySelectorAll(".pn-ProductNav_Link"));
			    links.forEach(function(item) {
			        item.setAttribute("aria-selected", "false");
			    })
			    e.target.setAttribute("aria-selected", "true");
			    // Pass the clicked item and it's colour to the move indicator function
			    moveIndicator(e.target, colours[links.indexOf(e.target)]);
			});

			// var count = 0;
			function moveIndicator(item, color) {
			    var textPosition = item.getBoundingClientRect();
			    var container = pnProductNavContents.getBoundingClientRect().left;
			    var distance = textPosition.left - container;
			     var scroll = pnProductNavContents.scrollLeft;
			    pnIndicator.style.transform = "translateX(" + (distance + scroll) + "px) scaleX(" + textPosition.width * 0.01 + ")";
			    // count = count += 100;
			    // pnIndicator.style.transform = "translateX(" + count + "px)";
			    
			    if (color) {
			        pnIndicator.style.backgroundColor = color;
			    }
			}

			function determineOverflow(content, container) {
			    var containerMetrics = container.getBoundingClientRect();
			    var containerMetricsRight = Math.floor(containerMetrics.right);
			    var containerMetricsLeft = Math.floor(containerMetrics.left);
			    var contentMetrics = content.getBoundingClientRect();
			    var contentMetricsRight = Math.floor(contentMetrics.right);
			    var contentMetricsLeft = Math.floor(contentMetrics.left);
			     if (containerMetricsLeft > contentMetricsLeft && containerMetricsRight < contentMetricsRight) {
			        return "both";
			    } else if (contentMetricsLeft < containerMetricsLeft) {
			        return "left";
			    } else if (contentMetricsRight > containerMetricsRight) {
			        return "right";
			    } else {
			        return "none";
			    }
			}

			/**
			 * @fileoverview dragscroll - scroll area by dragging
			 * @version 0.0.8
			 * 
			 * @license MIT, see https://github.com/asvd/dragscroll
			 * @copyright 2015 asvd <heliosframework@gmail.com> 
			 */


			(function (root, factory) {
			    if (typeof define === 'function' && define.amd) {
			        define(['exports'], factory);
			    } else if (typeof exports !== 'undefined') {
			        factory(exports);
			    } else {
			        factory((root.dragscroll = {}));
			    }
			}(this, function (exports) {
			    var _window = window;
			    var _document = document;
			    var mousemove = 'mousemove';
			    var mouseup = 'mouseup';
			    var mousedown = 'mousedown';
			    var EventListener = 'EventListener';
			    var addEventListener = 'add'+EventListener;
			    var removeEventListener = 'remove'+EventListener;
			    var newScrollX, newScrollY;

			    var dragged = [];
			    var reset = function(i, el) {
			        for (i = 0; i < dragged.length;) {
			            el = dragged[i++];
			            el = el.container || el;
			            el[removeEventListener](mousedown, el.md, 0);
			            _window[removeEventListener](mouseup, el.mu, 0);
			            _window[removeEventListener](mousemove, el.mm, 0);
			        }

			        // cloning into array since HTMLCollection is updated dynamically
			        dragged = [].slice.call(_document.getElementsByClassName('dragscroll'));
			        for (i = 0; i < dragged.length;) {
			            (function(el, lastClientX, lastClientY, pushed, scroller, cont){
			                (cont = el.container || el)[addEventListener](
			                    mousedown,
			                    cont.md = function(e) {
			                        if (!el.hasAttribute('nochilddrag') ||
			                            _document.elementFromPoint(
			                                e.pageX, e.pageY
			                            ) == cont
			                        ) {
			                            pushed = 1;
			                            lastClientX = e.clientX;
			                            lastClientY = e.clientY;

			                            e.preventDefault();
			                        }
			                    }, 0
			                );

			                _window[addEventListener](
			                    mouseup, cont.mu = function() {pushed = 0;}, 0
			                );

			                _window[addEventListener](
			                    mousemove,
			                    cont.mm = function(e) {
			                        if (pushed) {
			                            (scroller = el.scroller||el).scrollLeft -=
			                                newScrollX = (- lastClientX + (lastClientX=e.clientX));
			                            scroller.scrollTop -=
			                                newScrollY = (- lastClientY + (lastClientY=e.clientY));
			                            if (el == _document.body) {
			                                (scroller = _document.documentElement).scrollLeft -= newScrollX;
			                                scroller.scrollTop -= newScrollY;
			                            }
			                        }
			                    }, 0
			                );
			             })(dragged[i++]);
			        }
			    }

			      
			    if (_document.readyState == 'complete') {
			        reset();

          } else {
              _window[addEventListener]('load', reset, 0);
              $(".first-logo").slideDown();
			    }

			    exports.reset = reset;
			}));

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
                $(".sticky-tablet").removeClass('second-nav-down').addClass("second-nav-up");
            } else {
                // Scroll Up
                if(st + $(window).height() < $(document).height()) {
                    $('.header').removeClass('nav-up').addClass('nav-down');
                	$(".sticky-tablet").removeClass('second-nav-up').addClass("second-nav-down");
                }
            }
            
            lastScrollTop = st;
        }
      }