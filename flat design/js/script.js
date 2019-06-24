$(document).ready(function(){

//nav toggle 
		$('.toggle').click(function(){
			$('.display').toggleClass('active');
			$('.toggle').toggleClass('active');
			$('.overlay').toggleClass('active');
		});

		$('nav ul li a').on("click", function(){
					$('.display').removeClass('active');
					$('.toggle').removeClass('active');
					$('.overlay').removeClass('active');
			});
		 
    	

});