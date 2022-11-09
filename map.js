// Exercise 1
const number = [25, 45, 55, 77, 88, 99];
// Using map() to square each number in the array
const squareNumbers = number.map(number => {
    return number * number;
});
console.log(squareNumbers);

// Using map() to return a new array the double value of element
const doubleNumbers = number.map(number => {
    return number * 2;
});
console.log(doubleNumbers);

// Exercise 2

const strings = ["avengers", "captain america", "iron man", "black panther"];
//   Using map() to return a new array that the first letter in the word would be uppercase



let firstUpperCaseLetters = strings.map((letter) => {
    return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();
});
console.log(firstUpperCaseLetters);