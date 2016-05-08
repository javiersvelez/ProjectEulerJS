//Returns TRUE if the given number is Prime or FALSE if its not Prime

function isPrime(n) {
	if (n == 1) {
		return false;
		// 1 is not prime
	}
	if (n < 4) {
		return true;
		// 2 and 3 are both prime
	}
	if ((n % 2) == 0) {
		return false;
		// exclude even numbers
	}
	if (n < 9) {
		return true;
		//we have already excluded 4, 6, and 8.
	}
	if ((n % 3) == 0) {
		return false;
		// exclude remaining multiples of 3
	}
	var r = Math.floor(Math.sqrt(n));
	var f = 5;

	while (f <= r) {
		if ((n % f) == 0) {
			return false;
		}
		if ((n % (f + 2)) == 0) {
			return false;
		}
		f = f + 6;
	}

	return true;
	// (in all other cases)
}

//Returns the number of divisors of a given number
function countDivisors(num) {
	var numberOfDivisors = 1;
	for (var i = 2; i <= num; i++) {
		var exponent = 0;
		while (num % i == 0) {
			exponent++;
			num /= i;
		}
		numberOfDivisors *= (exponent + 1);
	}

	return numberOfDivisors
}

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
