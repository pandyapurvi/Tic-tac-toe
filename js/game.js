//make winning possibilies
//take a player1 as an blank Array
//take a player2 as an blank Array
//push the clicked letter in respective arrays of player1moves

const winning = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];//winning possibilities
let player1 = [];
let player2 = [];
let click = 0; //currently there is no clicked on any button.
let array = ['','','','','','','','',''];
const displayFunction = function ( player, letter,id ){
  $(`#${id}`).text(letter);
     click++;
     player.push(id);
};

const clickedButton = function (id) {

  if ( array[id] === ''){
    if ( click % 2 === 0 ){
      displayFunction(player1,'X',id)

    } else {
      displayFunction(player2,'O',id)

     }
     array[id] = id;

   }
    if(array[9] === "finish"){
      return;
    }else{
    if (click >=5){

    let count = 0 ;
      for(let i = 0; i < winning.length; i++){
        for(let j = 0; j < player1.length; j++){
          if(winning[i].includes(player1[j])){
          count++
          if(count === 3){
            console.log("player1 is winner");
            array = [0,1,2,3,4,5,6,7,8,"finish"];
            return;

            }
          }
        }
        count = 0;
      }

      count = 0;
      for(let i = 0; i < winning.length; i++){
        for(let j = 0; j < player2.length; j++){
          if(winning[i].includes(player2[j])){
          count++
          if(count == 3){
            console.log("player2 is winner");
            array = [0,1,2,3,4,5,6,7,8,"finish"];
            return;

          }
          }
      }
      count = 0;
      }
    }

  }

};

const playAgain = function (){
  click = 0;
  player1 = [];
  player2 =[];
  array = ['','','','','','','','',''];
  $('#0').text('-');
  $('#1').text('-');
  $('#2').text('-');
  $('#3').text('-');
  $('#4').text('-');
  $('#5').text('-');
  $('#6').text('-');
  $('#7').text('-');
  $('#8').text('-');

};

const confirmRefresh = function () {
let okToRefresh = confirm("Do you really want to refresh the page?");
if (okToRefresh)
	{
			setTimeout("location.reload(true);",1500);
	}
};

$( document ).ready( function (){

  $('#0').on('click', function (){
    clickedButton(0);
  });

  $('#1').on('click', function (){
    clickedButton(1);
  });

  $('#2').on('click', function (){
    clickedButton(2);
  });

  $('#3').on('click', function (){
    clickedButton(3);
  });

  $('#4').on('click', function (){
    clickedButton(4);
  });

  $('#5').on('click', function (){
    clickedButton(5);
  });

  $('#6').on('click', function (){
    clickedButton(6);
  });

  $('#7').on('click', function (){
    clickedButton(7);
  });

  $('#8').on('click', function (){
    clickedButton(8);
  });

  $('#play').on('click',function(){
    playAgain();
  });

  $('#reload').on('click',function(){
    confirmRefresh();
  });
});
