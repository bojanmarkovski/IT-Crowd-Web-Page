$(document).ready(function(){

	if($( window ).width() > 991){

		$(document).on("scroll", function(){
		    if ($(document).scrollTop() > 15){
					$(".logo").css({"padding-top" : "0px", "transition" : "0.4s"})
					$(".header ul li").css({"padding" : "0", "transition" : "0.4s"});
				}
			else {
				$(".logo").css({"padding-top" : "5px" ,"transition" : "0.4s"});
				$(".header ul li").css({"padding" : "5px 0px", "transition" : "0.4s"});
			}
		})


		$(".career-left").on('click', '.row.pd-box', function() {
			let boxShadow = $(this).find(".career-box").children("div").addClass('clicked-cart');

			if (boxShadow.hasClass("shadow-paragraph")) {
				boxShadow.removeClass("shadow-paragraph");
			}
			else {
				// boxShadow.addClass("shadow-paragraph");
				// boxShadow.slideUp("shadow-paragraph");
				// $(this).find(".shadow-paragraph").slideUp(1000);
			}

			for (var i = 0; i < $(".career-box").length; i++) {
				if(!$($(".career-box")[i]).children("div").hasClass("clicked-cart")) {
					$($(".career-box")[i]).children("div").addClass("shadow-paragraph");
				let inputJobApply = $($(this).find("h3")[0]).text();
				$(this).parents(".career-left").parent(".row.pd-70px").find(".career-right .select").val(inputJobApply);
				}
			}

			boxShadow.removeClass("clicked-cart");

			$(this).parents(".career-left").append($(this));

		    $('html, body').animate({
		      	scrollTop: $(".row.pd-70px").offset().top + -61
		    }, 1000)

		    $('.career-left').animate({
		      	scrollTop: $(this).offset().top
		    }, 900)

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

		$(".career-left").on('click', '.row.pd-box', function() {
			let boxShadow = $(this).find(".career-box").children("div").addClass('clicked-cart');
			
			if (boxShadow.hasClass("shadow-paragraph")) {
				boxShadow.removeClass("shadow-paragraph");
				boxShadow.slideDown("shadow-paragraph");
				console.log("Dada")
			}
			else {
				boxShadow.slideUp("shadow-paragraph");
				console.log("nene")
				// boxShadow.addClass("shadow-paragraph");
				// $(this).find(".shadow-paragraph").slideUp(1000);
			}

			for (var i = 0; i < $(".career-box").length; i++) {
				if(!$($(".career-box")[i]).children("div").hasClass("clicked-cart")) {
					$($(".career-box")[i]).children("div").addClass("shadow-paragraph");

				let inputJobApply = $($(this).find("h3")[0]).text();
				$(this).parents(".career-left").parent(".row.pd-70px").find(".career-right .select").val(inputJobApply);
				}
			}
			boxShadow.removeClass("clicked-cart");

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





    $("form").on("change", ".file-upload-field", function(){ 
	    $(this).parent(".file-upload-wrapper").attr("data-text",
	    	$(this).val().replace(/.*(\/|\\)/, '') );
	});

	$(".file-upload-field").on("click", function() {
		$(this).css("border" , "1px solid red")
	});
	
});