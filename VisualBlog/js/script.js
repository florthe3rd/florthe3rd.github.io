$(document).ready(function(){

	//nav toggle-date
	$('.toggle-date').click(function(){
			$('header').toggleClass('active');
			$('.toggle-date').toggleClass('active');
			$('.toggle-about').toggleClass('active');
			$('section').toggleClass('active');
		});
	$('section').on("click", function(){
			$('header').removeClass('active');
			$('.toggle-date').removeClass('active');
			$('.toggle-about').removeClass('active');
			$('section').removeClass('active');
		});
	$('.post-list li a').on("click", function(){
			$('header').removeClass('active');
			$('.toggle-date').removeClass('active');
			$('.toggle-about').removeClass('active');
			$('section').removeClass('active');
	});

	//nav toggle-date
	$('.toggle-about').click(function(){
			$('nav').toggleClass('clicked');
			$('.toggle-date').toggleClass('clicked');
			$('.toggle-about').toggleClass('clicked');
			$('section').toggleClass('clicked');
		});
	$('section').on("click", function(){
			$('nav').removeClass('clicked');
			$('.toggle-date').removeClass('clicked');
			$('.toggle-about').removeClass('clicked');
			$('section').removeClass('clicked');
		});




});