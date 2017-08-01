//declare a variable to keep track of points
var score = 0;

//use prompts to ask questions and get user input
alert("Welcome to the quiz. This quiz was made in July of 2017.");
var question1 = prompt("What year is it?");

//add 1 point to the score if the user's answer matches mine
if (question1 === "2017") {
  score += 1;
  alert("Correct. You have " + score + " point.");
} else {
  alert("Incorrect. You have " + score + " points.");
}

var question2 = prompt("What month is it?");
if (question2.toUpperCase() === "JULY") {
  score += 1;
  alert("Correct. You have " + score + " points.");
} else {
  alert("Incorrect. You have " + score + " points.");
}

var question3 = prompt("What whole number comes after 2?");
if (question3 === "3" || question3.toUpperCase() === "THREE") {
  score += 1;
  alert("Correct. You have " + score + " points.");
} else {
  alert("Incorrect. You have " + score + " points.");
}

var question4 = prompt("What month comes before April?");
if (question4.toUpperCase() === "MARCH") {
  score += 1;
  alert("Correct. You have " + score + " points.");
} else {
  alert("Incorrect. You have " + score + " points.");
}

var question5 = prompt("Are whippets the best dogs ever?");
if (question5.toUpperCase() === "YES" || question5.toUpperCase() === "OBVOUSLY" || question5.toUpperCase() === "DUH" || question5.toUpperCase() === "OBVS") {
  score += 1;
  alert("Correct. You have " + score + " points.");
} else {
  alert("Incorrect. You have " + score + " points.");
}

//part of this challenge was making a ranking system based on total points. 
//below is an if statement which assigns the user a different colored crown based on their score
var crownType;
if (score == 5) {
  crownType = "the gold crown!!!";
} else if (score < 5 && score > 2) {
  crownType = "the silver crown!!";
} else if (score > 0) {
  crownType = "the bronze crown!"
} else {
 crownType = "my condolences." 
}

alert("You've finished the quiz! Your total score is " + score + " and thus you are awarded " + crownType);











