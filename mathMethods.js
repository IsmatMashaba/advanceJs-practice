// using includes method

const pets = ["cat", "dog", "bat"];
// write a function to check if the input has the value that is inside the array
function checkName(petName) {
    if (pets.includes(petName)){
        console.log(`${petName} is in the list`);
    }else {
       console.log(`${petName} is not in the list`)
    }
}

checkName('cat');
checkName('pig');
// expected outcome: "the cat is in the list"

//checkName("pig");
// expected outcome: "the pig is not in the list"

// using some method
const array = [1, 2, 3, 4, 5];
// write a function to check if the input number is odd or even

//having problem to figure out this one

function checkNumber(number) {
    if (number % 2 === 0) {
        console.log(array.some(even));
    } else  {
        console.log(array.some(odd));
    }

}

checkNumber(3);
// expected outcome: "the number 3 is a odd number"

checkNumber(4);
// expected outcome: "the number 4 is a even number"
