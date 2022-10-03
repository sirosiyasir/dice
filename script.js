
// var playerOne = prompt("What's name of the player 1");
// var playerTwo = prompt("What's name of the player 2");



var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);


document.querySelector(".startButton").addEventListener("click", players )


function players (){
  var playerOne = document.getElementById("inputPlayer1").value;
  var playerTwo = document.getElementById("inputPlayer2").value;
  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 +".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 +".png");

  if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = playerOne + " won!";
  } else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = playerTwo + " won!"
  } else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "DRAW!"
  }

}

document.querySelector(".resetButton").addEventListener("click", reset)

function reset(){
  window.location.reload();
}
