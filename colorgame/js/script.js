var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".squares");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var mode = document.querySelectorAll(".mode");




init();


function init(){
	setUpMode();
	setUpSquares();
	update();
}

reset.addEventListener("click", function(){
	update();
});

colorDisplay.textContent = pickedColor;
colorDisplay.style.textTransform ="uppercase";





function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}




function pickColor(){
var random = Math.floor(Math.random() * colors.length);
return colors[random];

}


function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()* 256);
	var g = Math.floor(Math.random()* 256);
	var b = Math.floor(Math.random()* 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


function update(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++){
	if(colors[i]){
	squares[i].style.display = "block";
	squares[i].style.backgroundColor = colors[i];
	}
	else{
		squares[i].style.display = "none";
	}
}
	h1.style.backgroundColor = "steelblue";
	reset.textContent = "New Colors";
	message.textContent="";

}

function setUpMode(){
	for(var i = 0; i < mode.length; i++){
	mode[i].addEventListener("click", function(){
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
		update();
	});

}
}

function setUpSquares(){
	for(var i = 0; i < squares.length; i++){
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			message.textContent="Correct!";
			reset.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			message.textContent="Try Again!";
		}
	});
}
}