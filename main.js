
		  	var sliding = startClientX = startPixelOffset = pixelOffset = currentSlide = 0;
		  	var slideCount = $('.slide').length;

		  	$('.slide').on('mousedown touchstart', slideStart);
		  	$('.slide').on('mouseup touchend', slideEnd);
		  	$('.slide').on('mousemove touchmove', slide);

		  	// Triggers when slide event started
			function slideStart(event) {

			    	// If it is mobile device redefine event to first touch point
			    if (event.originalEvent.touches)
			      	event = event.originalEvent.touches[0];
			    	// If sliding not started yet store current touch position to calculate distance in future.
			    if (sliding == 0) {
			      	sliding = 1; // Status 1 = slide started.
			      	startClientX = event.clientX;
			    }
			}
			  
			  /** Occurs when image is being slid.
			  */
			function slide(event) {
			    // event.preventDefault();
			    if (event.originalEvent.touches)
			      	event = event.originalEvent.touches[0];
			    	// Distance of slide.
			    	var deltaSlide = event.clientX - startClientX;
			    	// If sliding started first time and there was a distance.
			    if (sliding == 1 && deltaSlide != 0) {
			      	sliding = 2; // Set status to 'actually moving'
			      	startPixelOffset = pixelOffset; // Store current offset
			    }
			    
			    //  When user move image
			    if (sliding == 2) {
			      	// Means that user slide 1 pixel for every 1 pixel of mouse movement.
			      	var touchPixelRatio = 1;
			      	// Check for user doesn't slide out of boundaries
			      	if ((currentSlide == 0 && event.clientX > startClientX) ||
			         	(currentSlide == slideCount - 1 && event.clientX < startClientX))
			        // Set ratio to 3 means image will be moving by 3 pixels each time user moves it's pointer by 1 pixel. (Rubber-band effect)
			        	touchPixelRatio = 3;
			      	// Calculate move distance.
			      	pixelOffset = startPixelOffset + deltaSlide / touchPixelRatio;
			      	// Apply moving and remove animation class
			      	$('#slides').css('transform', 'translateX(' + pixelOffset + 'px').removeClass();
			    	}
			  	}
			  
			  /** When user release pointer finish slide moving.
			  */
			function slideEnd(event) {
			    if (sliding == 2){
			      	// Reset sliding.
			      	sliding = 0;
			      	// Calculate which slide need to be in view.
			      	currentSlide = pixelOffset < startPixelOffset ? currentSlide + 1 : currentSlide -1;

			      	// Make sure that unexisting slides weren't selected.
			      	currentSlide = Math.min(Math.max(currentSlide, 0), slideCount - 1);
			      	// Since in this example slide is full viewport width offset can be calculated according to it.
			      	pixelOffset = currentSlide * -$('body').width();
			      
							// Remove style from DOM (look below)
			      	$('#temp').remove();
			      	// Add a translate rule dynamically and asign id to it
			      	$('<style id="temp">#slides.animate{transform:translateX(' + pixelOffset + 'px)}</style>').appendTo('head');
			      	// Add animate class to slider and reset transform prop of this class.
			      	$('#slides').addClass('animate').css('transform', '');
			    }

					if (pixelOffset == -0) {
						$(".indicator-1").addClass("active-slider");
						$(".indicator-2").removeClass("active-slider");
						$(".indicator-3").removeClass("active-slider");
					} 
					else if(pixelOffset == ($('body').width() * -1)){
						$(".indicator-2").addClass("active-slider");
						$(".indicator-1").removeClass("active-slider");
						$(".indicator-3").removeClass("active-slider");
					} 
					else if (pixelOffset == ($('body').width() * -2)) {
						$(".indicator-3").addClass("active-slider");
						$(".indicator-1").removeClass("active-slider");
						$(".indicator-2").removeClass("active-slider");
					}
				}




// // SECOND SLIDE

// Variables

	var arrowLeft = document.getElementById("arrow-left");
	var arrowRight = document.getElementById("arrow-right");
	var body = document.getElementsByTagName("body")[0];
	var sliderImages = document.getElementsByClassName("slidee");
	var current = 0;
	var navigationImages = document.getElementsByClassName("navigation");

// Functions

function reset(){
	for(var i = 0; i < sliderImages.length; i++) {
		sliderImages[i].style.display = "none";
	}
	for(var i = 0; i < navigationImages.length; i++) {
		navigationImages[i].classList.remove("active-navigation");
	}
}

function startSlide() {
	reset();
	sliderImages[0].style.display = "block";
	navigationImages[0].classList.add("active-navigation");
}

function overlapLeft() {
	if (current == 0) {
		current = sliderImages.length; //3
		current = navigationImages.length;
	}
}

function overlapRight() {
	if ((current == sliderImages.length - 1) && (current == navigationImages.length - 1)) {
		current = -1;
	}
}

function slideLeft() {
	reset();
	overlapLeft();
	sliderImages[current - 1].style.display = "block";
	navigationImages[current - 1].classList.add("active-navigation"); 
	current--;
}

function slideRight() {
	reset();
	overlapRight();
	sliderImages[current + 1].style.display = "block";
	navigationImages[current + 1].classList.add("active-navigation");
	current++;
}

// event listeners

// click:
// 		slideLeft & slideRight
// keydown:
// 		slideLeft & slideRight


arrowLeft.addEventListener("click", function() {
	slideLeft();
});

arrowRight.addEventListener("click", function() {
	slideRight();
});

body.addEventListener("keydown", function(event){
	if(event.keyCode == 37) {
		slideLeft();
	}
	else if (event.keyCode == 39) {
		slideRight();
	}
	else if (event.keyCode == 40) {
		slideLeft();
	}
	else if (event.keyCode == 38) {
		slideRight();
	}

});

startSlide();

// MODUL
$(document).ready(function(){

	// FIRST MAIN SLIDE

$(".indicators").on('click', 'div', function(event) {
				var indicatorNumber = $(this).attr("class").split("indicator-")[1];
				
				var activeSlide = 1;
				for (var i = 1; i < 4; i++) {
					var activeClass = $(".indicator-" + i);

					if (activeClass.hasClass("active-slider")){
						activeSlide = i;
					}
				}
				
				if (indicatorNumber == 1) {
					sliding = 2;
					pixelOffset = 1140;
					currentSlide = pixelOffset < startPixelOffset ? currentSlide + 1 : currentSlide -1;
					
					slideEnd();
				} 
				else if (indicatorNumber == 2) {
					sliding = 2;
					
					pixelOffset = 1140;
					if (activeSlide < indicatorNumber) {
						pixelOffset = -1140;	
					}
					
					startPixelOffset = 0;
					slideEnd();
				} 
				else if (indicatorNumber == 3) {
					sliding = 2;
					pixelOffset = -1140;
					currentSlide = 2;
					currentSlide = pixelOffset < startPixelOffset ? currentSlide + 1 : currentSlide -1;

					startPixelOffset = 0;
					slideEnd();
				}
			});


	// BUTTON TO TOP

	$( '.top-button' ).on( 'click', function(e){

	  	var href = $(this).attr( 'href' );
	  	$( 'html, body' ).animate({
			scrollTop: $( ".header" ).offset().top
	  	}, 500 );
	  	e.preventDefault();
	});


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

    $(window).scroll( function() {
    	$("top-button").each(function(e) {
    		var button = $(this).position().top + $(this).outerHeight();
    		var prozorec = $(window).scrollTop() + $(window).height()

    		if (button > prozorec) {
    			$(this).animate({'opacity':'1'}, 100);
    		}
    	})
    })

    

	$(".navigations-images").on('click', 'div', function() {

		var activeNavigation = $(this)[0].className.split("navigation-")[1];

		var activeImageSliderId = null;
		for (var i = 0; i <= 5; i++) {

			var activeImageSlider = $(".slide" + i);

			if ($(".navigation-" + i).hasClass("active-navigation")) {
				$(".navigation").removeClass("active-navigation");

				activeImageSliderId = i;
			}
		}
		$(this).addClass("active-navigation")

		if (activeImageSliderId < activeNavigation) {
			while(activeImageSliderId < activeNavigation) {

				slideRight();
				activeNavigation--;
			}
		}
		else if (activeImageSliderId > activeNavigation) {
			while(activeImageSliderId > activeNavigation) {

				slideLeft();
				activeNavigation++;
			}
		}
	});
});
