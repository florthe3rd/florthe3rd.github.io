

	
	$(document).ready(function(){


//nav toggle 
		$('.toggle').click(function(){
			$('.display').toggleClass('active');
		});

		$('nav ul li a').on("click", function(){
					$('.display').removeClass('active');
			});




//scroll lock
		$('.scroll').click(function(){
				$('body').css({
					"overflow":"hidden"
				});
		});






//scroll unlock
		//	
		$('.lb-close').click(function(){
			$('body').css({
					"overflow":"auto"
				});
		});
		$('.lightboxOverlay').click(function(){
			$('body').css({
					"overflow":"auto"
				});
		});
		$('.lightbox').click(function(){
			$('body').css({
					"overflow":"auto"
				});
		});

		

});

	
