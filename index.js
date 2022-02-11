function dicegame(){
  // input random number
  var player1Num = Math.floor( Math.random() * 6 + 1 );
  var player2Num = Math.floor( Math.random() * 6 + 1 );

  // change img
  var img1 = document.querySelector(".img1")
  var img2 = document.querySelector(".img2")
  img1.src = "images/dice" + player1Num + ".png";
  img2.src = "images/dice" + player2Num + ".png";

  // change heading text
  var headingText = document.querySelector(".container h1")
  if(player1Num > player2Num){
    headingText.innerHTML = "🚩 Player1 Win"
  }
  else if(player1Num === player2Num){
    headingText.innerHTML = "Draw"
  }
  else if(player1Num < player2Num){
    headingText.innerHTML = "Player2 Win 🚩"
  }
}
dicegame();