//! 1. Declare an array
// let fruits = ["apple", "lemon", "orange", "jack", "mango"];
// console.log(fruits[2])
// fruits[2] = "jambura"
// console.log(fruits)

//! 2. Add or remove elements
// let destination = ["sajek", "cox-bazar", "ratargul"];
// destination.push("sundarban");
// console.log(destination);
// destination.unshift("tanguyar","kuyakata");
// console.log(destination);

//! 3. Checking Array Membership with ‘includes’
// let books = ["javascript", "html", "css", "python"];
// console.log(books.includes("javascript"));

//! 4. Checking if it's an Array
// let books = ["javascript", "html", "css", "python"];
// let number = 55;
// console.log(Array.isArray(books))
// console.log(Array.isArray(number))

//! 5. Combining Arrays
// let books = ["javascript", "html", "css", "python"];
// let destination = ["sajek", "cox-bazar", "ratargul"];
// console.log(books.concat(destination))

//! Task 6
// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// const reversedColor = [];
// for(let i = colors.length-1; i >= 0; i--){
//     reversedColor.push(colors[i])
// }
// console.log(reversedColor);

//! Task 7
// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const evenNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenNumbers.push(numbers[i]);
//   }
// }
// console.log(evenNumbers);

//! Task 8
var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
var result = "";
for (var number of numbers) {
  result += number;
}
console.log(result);

