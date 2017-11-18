// declared variables 
var wins = 0;
var losses = 0;
var userScore = 0;

// this gives a random number between 19-120
var randomNumber= Math.floor((Math.random()* 100) +19);

// this generates a random number for each crystal with values 1-12
var purple = Math.floor((Math.random()* 12) + 1);
var blue = Math.floor((Math.random()* 12) + 1);
var green = Math.floor((Math.random()* 12) + 1);
var pink = Math.floor((Math.random()* 12) + 1);

  // .append updated the userScore in the html. .empty clears the content
var updateUserScore = function () {
	$('.userScore').empty();
	$('.userScore').append(userScore);
	$('#wins').empty();
	$('#wins').append(wins);
  	$('#losses').empty();
  	$('#losses').append(losses);
}
//this is a function that restarts the game and changes the random number and value of the crystals.
var restart = function(){
  userScore = 0;
   randomNumber = Math.floor((Math.random()* 100) + 19);

 	$('.randomNumber').empty();
 	$('.randomNumber').append(randomNumber);

  purple = Math.floor((Math.random()* 12) + 1);
    blue = Math.floor((Math.random()* 12) + 1);
    green = Math.floor((Math.random()* 12) + 1);
    yellow = Math.floor((Math.random()* 12) + 1);

    updateUserScore();
	}

// this function sets the logic for the game. 

var conditions = function (){
	//if the user's score is equal to the random number, the user wins and a point is added for wins on html
	// this then calls the function to restart
  if (userScore == randomNumber) {
    wins = wins + 1;
    
    restart();
  }

  //if the user's score is greater than the random number, the user loses and a point is added for losses on html
  	// this then calls the function to restart
  else if(userScore > randomNumber){
    losses = losses + 1;
    
    restart();
  }

  else{
    updateUserScore();
  }
}

$('.randomNumber').append(randomNumber);

$('.userScore').append(userScore);

// these are click functions that update the userScore, each time the user clicks on a crystal
$(document).ready(function(){

  $('#purple').click(function(){
    userScore = userScore + purple;
    conditions();
  })

  $('#blue').click(function(){
    userScore = userScore + blue;
    conditions();
  })

  $('#green').click(function(){
    userScore = userScore + green;
    conditions();
  })
  $('#pink').click(function(){
    userScore = userScore + pink;
    conditions();
  })
});



