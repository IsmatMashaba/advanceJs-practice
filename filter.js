// Exercise 1
const numberList = [1, -4, 12, 0, -3, 29, -150];
// Return a new array contains number bigger than 0
let numbersBiggerThan0 = numberList.filter((bigNumber) => {

    return bigNumber > 0
})

console.log(numbersBiggerThan0)
// Return a new array contains number less than 10
let numbersSmallerThan10 = numberList.filter((smallNumber) => {

    return smallNumber < 10
})

console.log(numbersSmallerThan10)
// Exercise 2
const number = [25, 45, 55, 77, 88, 99];
// Using filter() to return new array that contains even number
let evenNumbers = numberList.filter((evenNumber) => {

    return evenNumber%2===0 && evenNumber>0;
})

console.log(evenNumbers)
// Using filter() to return new array that contains odd number
let oddNumbers = numberList.filter((oddNumber) => {

    return oddNumber%2!==0 && oddNumber>0;
})

console.log(oddNumbers)
