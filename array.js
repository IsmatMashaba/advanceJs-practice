// Exercise 1

const vegetables = ["garlic", "carrot", "broccoli", "pumpkin"];
// 1. Sort the array in alphabetically
vegetables.sort();

// 2. What is the length of the array
vegetables.length;
// 3. Write a function called myVeggieList to console.log() the length of the array
function myVeggieList(list){
  console.log(list.length)
};
myVeggieList(vegetables);
// 4. Push one more item to the array called "onion"
vegetables.push('onion');

// 5. Write a function using if-else condition to check if the length of the array is bigger than 4.
function lengthCheck(arr){
if(arr.length>4){
console.log('The length is bigger than 4')
}else {
  console.log('The length is smaller than 4')
}
};
lengthCheck(vegetables);
// 6.  Using forEach or map to loop and console.log() the item in the array
 let showVeggies = vegetables.map((vegetable) => {
  console.log(vegetable);
})
// 7. using slice to remove the element carrot in the array
vegetables.splice(vegetables.indexOf("carrot"), 1);
console.log(vegetables)

// Exercise 2
const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  }
];

// 1. Get characters with mass greater than 100

let charactersWithMassGreaterThan100 = characters.filter((character) => {
    
    return character.mass > 100
})

console.log(charactersWithMassGreaterThan100)





// 2. Get characters with height less than 200

let charactersWithHeightLessThan200 = characters.filter((character) => {
    
  return character.height < 200
})

console.log(charactersWithHeightLessThan200)

// 3. Get all male characters

let charactersWithMaleGender = characters.filter((character) => {
    
  return character.gender === "male"
})

console.log(charactersWithMaleGender)

// 4. Get all female characters

let charactersWithFemaleGender = characters.filter((character) => {
    
  return character.gender === "female"
})

console.log(charactersWithFemaleGender)

// Exercise 3
const numberList = [1, 2, 3, 4, 5, 6, 7, 8];
// using reduce method to get the sum of all numbers in the numberList array

const sumOfNumberList = numberList.reduce((prev,curr) => {
  return prev + curr;
},0);

console.log(sumOfNumberList);

// using find method to get the first element that bigger than 3

let firstElementBiggerThan3 = numberList.find((number) => {
  return number > 3
});

console.log(firstElementBiggerThan3)

// using findIndex method to get the index of the first number that smaller than 7

let firstElementSmallerThan7 = numberList.find((number) => {
  return number < 7
});

console.log(firstElementSmallerThan7)