

// JAVASCRIPT FOR GAME

		var box = " ";
			var check = false;
			// FUNCTION FOR START AND END BUTTON
			function onStart() {
				if (player1.value != "" && player2.value != "" && btn.innerHTML == "Start") {
					btn.innerHTML = "End"
					check = true;
					firstplayer.innerHTML = player1.value;
					secondplayer.innerHTML = player2.value;
					nameplayer.innerHTML = "Start the game " + player1.value + "{X}";
					gameresult.innerHTML = "Enjoy ur game. GOODLUCK!!!"
						onegame.innerHTML = "";
						twogame.innerHTML = "";
						threegame.innerHTML = "";
						fourgame.innerHTML = "";
						fivegame.innerHTML = "";
						sixgame.innerHTML = "";
						sevengame.innerHTML = "";
						eightgame.innerHTML = "";
						ninegame.innerHTML = "";
					} else if (player1.value != "" && player2.value != "" && btn.innerHTML == "End") {
						check = false;
						box = " "
						player1.value = "";
						player2.value = "";
						firstplayer.innerHTML = "";
						secondplayer.innerHTML = "";
						nameplayer.innerHTML = "End of Game!!! THANKS";
						gameresult.innerHTML = "End of Game!!! THANKS";
						scoreone.innerHTML = "0";
						scoretwo.innerHTML = "0";
						btn.innerHTML = "Start";
						onegame.innerHTML = "";
						twogame.innerHTML = "";
						threegame.innerHTML = "";
						fourgame.innerHTML = "";
						fivegame.innerHTML = "";
						sixgame.innerHTML = "";
						sevengame.innerHTML = "";
						eightgame.innerHTML = "";
						ninegame.innerHTML = "";
					} else {
						nameplayer.innerHTML = "Please input your names."; 
						gameresult.innerHTML = "Please input your names.";
					}	
			}
			// END OF FUNCTION FOR START AND END BUTTON

			// FUNCTION FOR THE REPLAY BUTTON
			function rePlay() {
						onegame.innerHTML = "";
						twogame.innerHTML = "";
						threegame.innerHTML = "";
						fourgame.innerHTML = "";
						fivegame.innerHTML = "";
						sixgame.innerHTML = "";
						sevengame.innerHTML = "";
						eightgame.innerHTML = "";
						ninegame.innerHTML = "";
						nameplayer.innerHTML = "GO ON PLAYERS!!!"

						gameresult.innerHTML = "Another chance {GOODLUCK!!!}";
			}
			// END OF FUNCTION FOR REPLAY BUTTON

			// FUNCTION FOR THE DIV WHERE X AND O WILL DISPLAY
			function playHere(event) {


				if ((nameplayer.innerHTML == player1.value + " Won. Click on replay or End.") || (nameplayer.innerHTML == player2.value + " Won. Click on replay or End.")) {
					nameplayer.innerHTML = "We have a winner already. Click on replay or End."
				}


				if (event.target.innerHTML != "") {
					return;
				}
				

				if (nameplayer.innerHTML == "We have a winner already. Click on replay or End.") {
					return;
				} else if (check == true && box == " ") {
					event.target.innerHTML = "X";
					box = 1;
					nameplayer.innerHTML = player2.value + " {O}"+ " your turn ";
				} else if (check == true && box == 1) {
					event.target.innerHTML = "O";
					box = " ";
					nameplayer.innerHTML = player1.value + " {X}"+ " your turn ";
				} else {
					nameplayer.innerHTML = "Click on start to start the game.";
					gameresult.innerHTML = "Click on start to start the game.";
				} 


				if ((one.innerHTML  != "") &&
							(twogame.innerHTML  != "") &&
							(threegame.innerHTML != "") &&
							(fourgame.innerHTML != "") &&
							(fivegame.innerHTML != "") &&
							(sixgame.innerHTML  != "") &&
							(sevengame.innerHTML != "") &&
							(eightgame.innerHTML != "") &&
							(ninegame.innerHTML != "")) {
						nameplayer.innerHTML = "Oopss!!! Draw game. Click on Re-play to play again or End to end the game";
						gameresult.innerHTML = "NO WINNER"
					}

				// IF STATEMENT FOR WINNER (PLAYER) WITH LETTER X
				if (
					(onegame.innerHTML == "X" && twogame.innerHTML == "X" && threegame.innerHTML == "X") ||
					(fourgame.innerHTML == "X" && fivegame.innerHTML == "X" && sixgame.innerHTML == "X") ||
					(sevengame.innerHTML == "X" && eightgame.innerHTML == "X" && ninegame.innerHTML == "X") ||
					(onegame.innerHTML == "X" && fourgame.innerHTML == "X" && sevengame.innerHTML == "X") ||
					(twogame.innerHTML == "X" && fivegame.innerHTML == "X" && eightgame.innerHTML == "X") ||
					(threegame.innerHTML == "X" && sixgame.innerHTML == "X" && ninegame.innerHTML == "X") ||
					(onegame.innerHTML == "X" && fivegame.innerHTML == "X" && ninegame.innerHTML == "X") ||
					(threegame.innerHTML == "X" && fivegame.innerHTML == "X" && sevengame.innerHTML == "X") 
					){
						nameplayer.innerHTML = player1.value + " Won. Click on replay or End."
						gameresult.innerHTML = player2.value + " {O} it will be your turn after re-play";
						++scoreone.innerHTML;
					}


				// END OF IF STATEMENT FOR WINNER (PLAYER) WITH LETTER X

				// IF STATEMENT FOR THE WINNER (PLAYER) WITH LETTER O
				 if (
					(onegame.innerHTML == "O" && twogame.innerHTML == "O" && threegame.innerHTML == "O") ||
					(fourgame.innerHTML == "O" && fivegame.innerHTML == "O" && sixgame.innerHTML == "O") ||
					(sevengame.innerHTML == "O" && eightgame.innerHTML == "O" && ninegame.innerHTML == "O") ||
					(onegame.innerHTML == "O" && fourgame.innerHTML == "O" && sevengame.innerHTML == "O") ||
					(twogame.innerHTML == "O" && fivegame.innerHTML == "O" && eightgame.innerHTML == "O") ||
					(threegame.innerHTML == "O" && sixgame.innerHTML == "O" && ninegame.innerHTML == "O") ||
					(onegame.innerHTML == "O" && fivegame.innerHTML == "O" && ninegame.innerHTML == "O") ||
					(threegame.innerHTML == "O" && fivegame.innerHTML == "O" && sevengame.innerHTML == "O")
					){
						nameplayer.innerHTML = player2.value + " Won. Click on replay or End.";
						gameresult.innerHTML = player1.value + " {X} it will be your turn after re-play";
						++scoretwo.innerHTML;
					}
					// END OF IF OF STATEMENT FOR THE WINNER (PLAYER) WITH LETTER O;

					// // ELSE IF STATEMENT TO ALERT WHEN THERE IS DRAW (NO WINNER)
					
					// END ELSE IF STATEMENT TO ALERT WHEN THERE IS DRAW (NO WINNER)
			}

			// END OF FUNCTION FOR THE DIV X AND O WILL BE DISPLAY