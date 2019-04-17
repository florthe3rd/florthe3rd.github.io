// check off specific todos by clicking
$("ul").on("click", "li",function(){
	// turn it to gray
	$(this).toggleClass("completed");
});


$("ul").on("click", "span", function(event){
	//delete
	$(this).parent().fadeOut(500,function(){
		$(this).remove();	
	});
	//stop bubbling
	event.stopPropagation();
});

//enter todos
$("input[type='text']").keypress(function(event){
	if(event.which === 13 ){
		//grabbing new todo text:
		var todoText = $(this).val();
		$(this).val("");
		//creat new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+todoText+"</li>");
	}

});

$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle();
});

