// Variables

	var arrowLeft = document.getElementById("arrow-left");
	var arrowRight = document.getElementById("arrow-right");
	var body = document.getElementsByTagName("body")[0];
	var sliderImages = document.getElementsByClassName("slide");
	var current = 0;

// Functions

function reset(){
	for(var i = 0; i < sliderImages.length; i++) {
		sliderImages[i].style.display = "none";
	}
}

function startSlide() {
	reset();
	sliderImages[0].style.display = "block"
}

function overlapLeft() {
	if (current == 0) {
		current = sliderImages.length; //3
		console.log(current);
	}
}

function overlapRight() {
	if (current == sliderImages.length - 1) {
		current = -1;
	}
}


function slideLeft() {
	reset();
	overlapLeft();
	sliderImages[current - 1].style.display = "block";
	current--;
}

function slideRight() {
	reset();
	overlapRight();
	sliderImages[current + 1].style.display = "block";
	current++;
}

//event listeners

// click:
		//slideLeft & slideRight
// keydown:
		//slideLeft & slideRight


arrowLeft.addEventListener("click", function() {
	slideLeft()
})

arrowRight.addEventListener("click", function() {
	slideRight()
})

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


$(document).ready(function($){

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
    
        /* Check the location of each desired element */
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




	// MAP

	var $latitude = 42.006068,
		$longitude = 21.392550,
		$map_zoom = 14;

	var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
	var $marker_url = ( is_internetExplorer11 ) ? 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.png' : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location_1.svg';
		
	var	$main_color = '#C0392B;',
		$saturation= -20,
		$brightness= 5;

	var map_options = {
      	center: new google.maps.LatLng($latitude, $longitude),
      	zoom: $map_zoom,
      	panControl: false,
      	zoomControl: true,
      	mapTypeControl: false,
      	streetViewControl: false,
      	mapTypeId: google.maps.MapTypeId.ROADMAP,
      	scrollwheel: true,
    }

	var map = new google.maps.Map(document.getElementById('google-container'), map_options);		
	var marker = new google.maps.Marker({
	  	position: new google.maps.LatLng($latitude, $longitude),
	    map: map,
	    visible: true,
	 	icon: $marker_url,
	});



});
