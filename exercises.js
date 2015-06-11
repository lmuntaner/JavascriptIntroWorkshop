

//EXERCISE 1
//
// Restore the comments marks (/* */) of the previous exercises. First two exercises have to be commented 
// Uncomment the exercise code deleting /* and */ chars
// Ask for the user's favourite food!
// Give a different message back to the user if it chooses "salad"
// Message when "salad", "You are lying!!!"
// Message otherwise, "My favorite food is " + favoriteFood + " as well!!"
// Use alert("some message") to give the message back to the user

/*

var favoriteFood = prompt("What's your favorite food??");

*/


//EXERCISE 2
//
// Restore the comments marks (/* */) of the previous exercises. First two exercises have to be commented 
// Uncomment the exercise code deleting /* and */ chars
// Open the console and reload the index page to see the result of the code.
// Write a function that takes an array of words and returns the length of the longest one.

/*

var words = ["Richie", "Joanie", "Greg", "Marcia", "Bobby"];
var maxLength = 0;

console.log( maxLength === 6 );

*/

//EXERCISE 3
//
// Uncomment the exercise code deleting /* and */ chars
// Open the console and reload the index page to see the result of the code.
// Complete the following function to get the letter linked to a spanish DNI
// The functions receives an eight-digit number and returns a single letter.
// The algorithm to calculate the letter is as follows:
// The number is divided by 23 and the remainder is replaced by a letter determined by the following table: 
//	 _____________________________________________________________
//  | 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 |
//	| T R W A G M Y F P D X  B  N  J  Z  S  Q  V  H  L  C  K  E  |
//	|____________________________________________________________|
// 
// You can use 'result' variable to store the resulting letter.
// If your code works, the last three equalities will be "true"
// Remember and check what the operator % does!!
// (10 % 3) => 1


/*

function dniLetter( dni ) {

	var lockup = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B",
				  "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
	var result = '';

    return result;
}

console.log( dniLetter( 12345678 ) === 'Z');
console.log( dniLetter( 34667892 ) === 'S');
console.log( dniLetter( 92234488 ) === 'A');

*/


