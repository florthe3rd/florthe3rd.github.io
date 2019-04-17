



// score keeper


var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var p1Score = 0;
var p2Score = 0;
var reset = document.getElementById("reset");
var playingTo = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var gameOver= false;
var winning = 5;


p1.addEventListener("click", function(){
	if (!gameOver) {
	p1Score++;
	if( p1Score === winning){
		p1Display.classList.add("winner");
		gameOver = true;
	}
p1Display.textContent = p1Score;
}
});

p2.addEventListener("click", function(){
	if (!gameOver) {
	p2Score++;
	if( p2Score === winning){
		p2Display.classList.add("winner");
		gameOver = true;
	}
p2Display.textContent = p2Score;
}
});


reset.addEventListener("click", function(){
	reset1();
});
function reset1(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	gameOver= false;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
}

playingTo.addEventListener("change" , function(){
		winningScoreDisplay.textContent= this.value;
		winning = Number(this.value);
		reset1();

});

