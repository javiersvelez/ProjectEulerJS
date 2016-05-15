//largeNumbers.js
//Author javiers@gmail.com



//Sums all the rows of a given Matrix (or Array of Arrays), In which each element of each row is a digit of the large number.
function largeSum(numbers) {
	var column = numbers[0].length - 1;
	var SUM = ""
	var rest = 0;

	for (column; column >= 0; column--) {
		var columnSum = 0;
		for (var i = 0; i < numbers.length; i++) {
			columnSum += numbers[i][column];

		}
		columnSum += rest;

		var sumStr = String(columnSum);
		var digit = sumStr.slice(-1);
		var reststr = sumStr.slice(0, sumStr.length - 1);
		if (reststr == "")
			rest = 0;
		else
			rest = parseInt(reststr);

		var temp = SUM;
		SUM = "" + digit + temp;

	}

	if (rest > 0) {
		var temp = SUM;
		SUM = "" + rest + temp;
	}

	return SUM;
}



//Sums all the digits of a given number, passed as a String
		function sumHorizontally(stringNumber) {
			var sum = 0;
			for (var i = 0; i < stringNumber.length; i++) {
				sum += parseInt(stringNumber.charAt(i));
			}
			return sum;
		}
		
		
		function newCustomArray(rows, cols, value){
		var theArray = new Array();
		
		for (var i = 0; i < rows; i++){
			var arr = new Array();
			for (var j = 0; j < cols; j++){
				arr[j] = value;
			}
			theArray[i] = arr;
		}
		
		return theArray;
}















//Multiplies the given large number  n times. Recieves number and n times, returns result as a String
		function largeMultiply(number, times){
		var mat = new Array();
			
			for (var i = 0; i < times; i++) {
				var r = number.split("");
				mat.push(r);
			}
			//log(mat);
			var product = largeSum(mat);
			return  product;
		
		function largeSum(numbers) {
	var column = numbers[0].length - 1;
	var SUM = ""
	var rest = 0;

	for (column; column >= 0; column--) {
		var columnSum = 0;
		for (var i = 0; i < numbers.length; i++) {
			columnSum += parseInt(numbers[i][column]);

		}
		columnSum += rest;
		
		var sumStr = String(columnSum);
		var digit = sumStr.slice(-1);
		var reststr = sumStr.slice(0, sumStr.length - 1);
		
		if (reststr == "")
			rest = 0;
		else
			rest = parseInt(reststr);

		var temp = SUM;
		SUM = "" + digit + temp;

	}

	if (rest > 0) {
		var temp = SUM;
		SUM = "" + rest + temp;
	}

	return SUM;
}



function largeFactorial(number){
			current = "" + number;
			start = number;
			for (var i = 0; i < number-2; i++){
				
				start--;
				
				//log ("largeMultiply(" + current + "," + start + ")" );
				current = largeMultiply(current, start);
				//log("current: " + current);
			}
			
			return current;
			
		}
