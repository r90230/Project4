// John Hereshko
// SDI 1401
// Project 4
// January 30, 2014

var decimalNumber = function(){
	var numbers = prompt("Please enter how much a pound of bananas cost locally.");
	console.log(parseFloat(numbers).toFixed(2))
	return numbers
}

decimalNumber();

var interviewDay = new Date(2014, 2, 2)
var today = Date.now();
var timeTilInterview = (interviewDay - today)/(1000*60*60*24);

console.log(timeTilInterview);

console.log(Date.now()/(1000*60*60*24))
