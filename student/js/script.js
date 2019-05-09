$(document).ready(function(){
	//bg-header fade
		$(window).scroll(function(){
			console.log($(window).scrollTop());
			$('.header-bg').css("opacity" , 1 - $(window).scrollTop()/500);		
		});
		$('.header-bg').css("opacity" , 1 - $(window).scrollTop()/500);


		
//nav toggle 
		$('.toggle').click(function(){
			$('.display').toggleClass('active');
			$('.toggle').toggleClass('active');
		});

		$('nav ul li a').on("click", function(){
					$('.display').removeClass('active');
					$('.toggle').removeClass('active');
			});
		 
    	

});