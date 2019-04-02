//make winning possibilies
//take a player1 as an blank Array
//take a player2 as an blank Array
//push the clicked letter in respective arrays of player1moves

const winning = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];//winning possibilities
let player1 = [];
let player2 = [];
let click = 0; //currently there is no clicked on any button.
let array = ['','','','','','','','',''];
let gameState = null;
let board = [0,1,2,3,4,5,6,7,8];
console.log(board[1]);

 //let currentPlayer = click % 2 === 0 ? 'X' : 'O';



const clickedButton = function (id) {
  let indexArray = id;
  // let array[inxedArray] = id;

  //console.log(indexArray);

  if ( array[indexArray] === ''){
    if ( click % 2 === 0 ){
      // document.getElementById(id).innerHTML = 'X';
     $(`#${id}`).text('X');
        click++;
        //player1.push(id)
        player1.push(id);
// console.log(player1);
// console.log(board[0]);
//         if(board[0]== player1[0] && board[1]== player1[1] && board[2]==player1[2]){
//             console.log(` wins`);
//         }
        //console.log(id);
        //let candidate1 = player1.sort().join("");


        //console.log(player1);
    } else {
      //document.getElementById(id).innerHTML = 'O';
       $(`#${id}`).text('O');
          click++;
          player2.push(id);

    }
     array[indexArray] = id;

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
    // for(let i = 0; i < winning.length; i++){
    //   let win = winning[i];
    //   function arrayContainsArray (player1, win) {
    //     return win.every(function (value) {
    //       console.log(win);
    //       console.log(value);
    //       if(player1.indexOf(value) >= 0){
    //         return;
    //       }
    //     });
    //   }
    //
    // console.log(arrayContainsArray(player1, win));
    // };
    // for(let i = 0; i < winning.length; i++){
    //   //console.log(winning[i]);
    //   if(winning[i] === candidate1) {
    //     console.log(`Player 1 is winner`);
    //     array = [0,1,2,3,4,5,6,7,8];
    //
    //   } else if(winning[i] === candidate2) {
    //     console.log(`Plarer 2 is winner`);
    //     array = [0,1,2,3,4,5,6,7,8];
    //   }
    // }
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
});


// function arrayContainsArray (superset, subset) {
//   return subset.every(function (value) {
//     return (superset.indexOf(value) >= 0);
//   });
// }
//
// var array1 = ['A', 'B', 'C', 'D', 'E'];
// var array2 = ['B', 'C', 'E'];
// var array3 = ['B', 'C', 'Z'];
// var array4 = [];
//
//
// console.log(arrayContainsArray(array1, array3));
