$(document).ready(function(){
	//bg-header fade
		$(window).scroll(function(){
			console.log($(window).scrollTop());
			$('.header-bg').css("opacity" , 1 - $(window).scrollTop()/400);		
		});
		$('.header-bg').css("opacity" , 1 - $(window).scrollTop()/400);
});