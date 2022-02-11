function dicegame(){
  var player1Random = Math.random();
  var player2Random = Math.random();
  var player1Num = player1Random * 6 + 1;
  var player2Num = player2Random * 6 + 1;
  var player1NumFloor = Math.floor(player1Num);
  var player2NumFloor = Math.floor(player2Num);
  var i;
  var img1 = document.querySelector(".img1")
  var img2 = document.querySelector(".img2")
  var headingText = document.querySelector(".container h1")
  for(i=1;i<=6;i++){
    if(player1NumFloor === i){
      img1.src = "images/dice" + i+ ".png";
    }
    if(player2NumFloor === i){
      img2.src = "images/dice" + i+ ".png";
    }
  }
  console.log(player1NumFloor, player2NumFloor)
  if(player1NumFloor > player2NumFloor){
    headingText.innerHTML = "🚩 Player1 Win"
  }
  else if(player1NumFloor === player2NumFloor){
    headingText.innerHTML = "Draw"
  }
  else if(player1NumFloor < player2NumFloor){
    headingText.innerHTML = "Player2 Win 🚩"
  }
}
dicegame();