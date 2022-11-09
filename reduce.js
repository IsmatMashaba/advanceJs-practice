const number = [25, 45, 55, 77, 88, 99];
// using for loop to calculate the total value of elements in the array
const sumOfNumber = number.reduce((prev,curr) => {
    return prev + curr;
},0);
console.log(sumOfNumber);
