// John Hereshko
// SDI 1401
// Project 4
// January 30, 2014

var decimalNumber = function(){			// Set number two decimal places
	var numbers = prompt("Please enter how much a pound of bananas cost locally.");
	console.log(parseFloat(numbers).toFixed(2))
	return numbers
}

decimalNumber();


var organize = [{a:1},{a:3},{a:2}];		// Organizes array by key
var organizeArray = function (array,givenKey) {
		return (array.sort(function(a,b){return a[givenKey] - b[givenKey];}));
	};
	
console.log(organizeArray(organize, "a"));


var addition = [7,21,"bananas",47];		// Adds numbers, excludes string
var emptyNumber = 0;
var additionArray = function (array){
	for (var i = 0; i < array.length; i++){
		if (array[i]/1 === array[i]){
			emptyNumber += array[i];
			}
	}
};

additionArray(addition)	
console.log(emptyNumber);
	

var stringSwitch = function(string){	// Returns string to Number
	return Number(string);
	};
	
console.log(stringSwitch("47"));	


