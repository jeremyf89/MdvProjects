

//  Jeremy k. Farris
//  SDI 1301
// Project 1
// First Go at JavaScript

// My variables
	var mySonName = "Anthony";
	var isHungry = true;
	var pieceOfPizza = 10;
	var pizza = "\"meatos\" pizza";
	
	

// My output
console.log("My Son's name is " + mySonName + ".");
console.log("It is obviously " + isHungry + " that he loves Meatos pizza!.");
console.log("He must have eaten " + pieceOfPizza + " pieces of pizza last time we were there!");
console.log("So, he's going to be happy that " + pizza + " is our eating destination tonight!");
// My conditionals
if (isHungry === true) {
	if (pieceOfPizza >= 10) {
		pieceOfPizza = pieceOfPizza + 2;
		console.log("If he wants at least " + pieceOfPizza + " I'll buy him a buffet.");
	} else {
		console.log("I wont buy him the buffet.");
	}
} else {
	if(mySonName === "Anthony") {
		console.log(mySonName + " finished his chores.");
	} else {
		mySonName = mySonName + " hasn't finished his chores."
		console.log(mySonName);	
	}
}