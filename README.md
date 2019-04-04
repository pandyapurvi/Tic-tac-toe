Tic! Tac! Toe!
========================
Welcome to the TicTacToe Game UI, a simple Javascript web application allowing users to interact with our Game Engine. The goal of this project is to make possible for users to have a richer experience when playing TicTacToe.

Author: Purvi Pandya; *pandyapurvi134@yahoo.in*
Date: April 4, 2019

Link For Tic Tac Toe
https://pandyapurvi.github.io/glowing-journey/
=====================

Technologies Used
=================
+ HTML5
+ CSS3
+ JavaScript
+ jQuery
+ Commandline
+ Github

Sources
==================
* CSS Tricks:
https://css-tricks.com/

* jQuery API Documentation:
https://api.jquery.com/

* jQuery:
https://jquery.com/

* MDN:
https://developer.mozilla.org/en-US/docs/Web/JavaScript


How To Play Game:
-----------------
- This game needs two players. First player (Player 1) will get a letter "X" and second player (player 2) will get a letter "O".
- Both player will get turn one by one. X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.
- Once the game has a winner or there is a draw, you will see a dialog informing about the result. From here you can:
* Replay the game and improve your score or
* You can reload the page again to start the game from zero.

Project Overview:
==================
- This project includes default 3×3 grid. When player clicks on any empty box, it takes an "id" and callback a function called - clickedButton. clickedButton counts clicks, if click is even number it will take "X" and for odd number it will take "O". Clicks will count on empty boxes only, because once the box is clicked it will not take that click in consideration unless you play again or re-start game.
- The "id" goes in an empty array of respective players as they take a move. Once the array collects 3 numbers, it start comparing with winning array. In winning array, there are total 8 possibilities to win the game. Player wins the game, if player's array matches with any of the winning possibilities.
- When player wins the game, array become full and board will not accept any move. But if nobody wins, it declares a DRAW.
- Player get score-10 each time when he/she gets the game in favour. Score keeps adding when player wins *tic tac toe*, until player do not reload the game.

Bugs
-----
It is not supporting media query.
