// 1 Write a program that requests a number from a user and finds the summation of every number from 1 to num. For example, for number 4 it is 1 + 2 + 3 + 4 = 10.
/*
let yourNumber = prompt("Please write a number");
let counter = 0;
let sum = 0;
while (counter < yourNumber) {
  counter++;
  sum = sum + counter;
  console.log(sum);
}
*/

// 2 Request two numbers and find only their largest common divisor.
/*
const firstNumber = prompt("Please write the first number");
const secondNumber = prompt("Please write the second number");

let maxDivisor = 1;

for (let i = 1; i <= firstNumber; i++) {
  if (firstNumber % i === 0 && secondNumber % i === 0) {
    maxDivisor = i;
  }
}
console.log("The largest common divisor is " + maxDivisor);
*/

// 3 Request a number and display all the divisors of it. For example, for number 8 it would be 2, 4, and 8
/*
const yourNumber = prompt("Please write a number");

for (let i = 1; i <= yourNumber; i++) {
  if (yourNumber % i === 0) {
    console.log("This number has these divisors: " + i);
  }
}
*/

// 4 Define the number of digits in a requested number. For example, there are 4 digits in the number 6834
/*
const yourNumber = prompt("Please write a number");

let tenExp = 1;
let counter = 0;
while (yourNumber % tenExp < yourNumber) {
  tenExp *= 10;
  counter++;
}
console.log("The number of digits is " + counter);
*/

// 5 Request 10 numbers from a user and count, how many are positive, negative, or zero. Also, count odd and even.
//Display the statistics. There’s only one variable (not 10) needed for input by a user.
/*
let positiveNumbers = 0;
let negativeNumbers = 0;
let zeroes = 0;
let oddNumbers = 0;
let evenNumbers = 0;

for (let i = 1; i <= 10; i++) {
  let yourNumbers = prompt("Please write a number");

  //How many numbers are positive, negative, or zero:
  if (yourNumbers > 0) {
    positiveNumbers++;
  } else if (yourNumbers < 0) {
    negativeNumbers++;
  } else {
    zeroes++;
  }

  //How many numbers are odd and even:
  if (yourNumbers % 2 != 0) {
    oddNumbers++;
  } else {
    evenNumbers++;
  }
}

console.log("There are " + positiveNumbers + " positive numbers");
console.log("There are " + negativeNumbers + " negative numbers");
console.log("There are " + zeroes + " zeroes");
console.log("There are " + oddNumbers + " odd numbers");
console.log("There are " + evenNumbers + " even numbers");
*/

// 6 Request favourite fruit from user. If it is Peach, Apple or Banana show message that it is your favourite food,
//if it is Pear or Grapefruit show message that you hate it otherwise show message that you have not tried this fruit

/*
const yourFavFruit = prompt("Please write your favorite fruit");

if (
  yourFavFruit === "peach" ||
  yourFavFruit === "apple" ||
  yourFavFruit === "banana"
) {
  alert("This is my favorite fruit as well!");
} else if (yourFavFruit === "pear" || yourFavFruit === "grapefruit") {
  alert("I do not like this fruit.");
} else {
  alert("I have not tried this fruit yet.");
}
*/

// 7 Request a number and check if the number is odd, even or zero. Use switch.
/*
let yourNumber = prompt("Please write a number");

let oddEvenNumber = yourNumber % 2;

switch (true) {
  case oddEvenNumber != 0:
    console.log("The number is odd");
    break;
  case oddEvenNumber === 0:
    console.log("The number is even");
    break;
  default:
    console.log("The number is zero");
}
*/
