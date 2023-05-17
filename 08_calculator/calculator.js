const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers = []) {
  let result = 0;
  numbers.forEach(
    (num) => {result += num}
  );
  return result;
};

const multiply = function(numbers = []) {
  let result = 1;
  numbers.forEach(
    (num) => {result *= num}
  );
  return result;
};

const power = function(num, pow) {
	return Math.pow(num, pow);
};

const factorial = function(num) {
	let result = 1;
  for (let n = num; n >= 1; n--) {
    result *= n;
  };
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
