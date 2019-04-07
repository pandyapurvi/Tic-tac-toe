
const winning = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];//winning possibilities
let player1 = [];
let player2 = [];
let click = 0; //currently there is no clicked on any button.
let array = ['','','','','','','','',''];
let score1 = 0;
let score2 = 0;
$('#radio').click(function() {
        click=1;
});

//function to display either "O" or "X"
const displayFunction = function ( player, letter,id ) {
  $( `#${id}` ).text( letter );//code for printing letter "X" or "O" in selected id.
     click++;//This will add one click each time player will play.
     player.push( id );//code to push clicked id in respective player
};

const clickedButton = function ( id ) {

  if ( array[id] === '' ) {//if array is empty player can play game.
    if ( click % 2 === 0 ) {
      displayFunction( player1,'X',id );
      $( `#${id}` ).css( 'color', 'red' );

    } else {
      displayFunction( player2,'O',id );
      $( `#${id}` ).css( 'color','blue' );
     }
     array[id] = id; //this code is to push clicked id into an empty array

   }
    if( array[9] === "finish" ) { //if someone wins or draw, the empty array will become full array with an extra 9th position.
      return;
    } else {
    if ( click >=5 ){

    let count = 0 ; //count 0 is to begin the loop from scratch, for every winning possibilities
      for( let i = 0; i < winning.length; i++ ) {//wiining is superset, it has total 8 sets.
        for( let j = 0; j < player1.length; j++ ) {//player is subset
          if( winning[i].includes( player1[j] ) ) {//code for superset and subset
          count++//if subset is in given superset then click will be 3
          if( count === 3 ) {
            $( 'p' ).first().text( 'Peppa is winner.' );
            console.log( "Peppa is winner." );
            score1 += 10;
            $( '#score1' ).val( score1 );
            $('.peppa').css({'transform': 'rotate(360deg)', 'transition':'3s'});
            array = [0,1,2,3,4,5,6,7,8,"finish"];//if player1 wins game then array will become full and game is finished here.
            return;

            }
          }
        }
        count = 0; //if counts are less than 3 then all the counts like 1 or 2 will become 0 here.
      }

      count = 0;//this is same loop for player 2
      for( let i = 0; i < winning.length; i++ ) {
        for( let j = 0; j < player2.length; j++ ) {
          if( winning[i].includes( player2[j] ) ) {
          count++
          if( count === 3 ) {
            $( 'p' ).first().text( 'Geroge is winner.' );
            console.log( "George is winner." );
            score2 += 10;
            $( '#score2' ).val( score2 );
            $('.george').css({'transform': 'rotate(360deg)', 'transition':'3s'});
            array = [0,1,2,3,4,5,6,7,8,"finish"];
            return;
            }
          }
      }
      count = 0;
      }
    }
    if( click === 9 ){//this is for withdraw
      $( 'p' ).first().text( "It's a draw." );
    }

  }

};

//function for playAgain task
const playAgain = function () {
  click = 0;
  player1 = [];
  player2 = [];
  array = ['','','','','','','','',''];
  $( '#0' ).text('');
  $( '#1' ).text('');
  $( '#2' ).text('');
  $( '#3' ).text('');
  $( '#4' ).text('');
  $( '#5' ).text('');
  $( '#6' ).text('');
  $( '#7' ).text('');
  $( '#8' ).text('');
  $( 'p' ).first().text("");

};

//function to refresh the page.
const confirmRefresh = function () {
let okToRefresh = confirm( "Do you really want to refresh the page?" );
if ( okToRefresh )
  {
      setTimeout( "location.reload(true);",1500 );
  }
};

$( document ).ready( function () {

  $( '#0' ).on( 'click', function () {
    clickedButton( 0 );
  });

  $( '#1' ).on( 'click', function () {
    clickedButton( 1 );
  });

  $( '#2' ).on( 'click', function () {
    clickedButton( 2 );
  });

  $( '#3' ).on( 'click', function () {
    clickedButton( 3 );
  });

  $( '#4' ).on( 'click', function () {
    clickedButton( 4 ) ;
  });

  $( '#5' ).on( 'click', function () {
    clickedButton( 5 );
  });

  $( '#6' ).on( 'click', function () {
    clickedButton( 6 );
  });

  $( '#7' ).on( 'click', function () {
    clickedButton( 7 );
  });

  $( '#8' ).on( 'click', function () {
    clickedButton( 8 );
  });

  $( '#play' ).on( 'click',function() {
    playAgain();
  });

  $( '#reload' ).on( 'click',function() {
    confirmRefresh();
  });
});
