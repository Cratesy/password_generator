// Assignment Code
var generateBtn = document.querySelector("#generate");
// array for all the password charater types
const numbersarray = ["0", "1", "2", "3", "4", "5", "6", "7", "6", "8", "9"];

const specialchararray = [`@%+\\/'!#$^?:,)(}{][~-_.`];

const uppercasearray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "U",
  "R",
  "S",
  "T",
  "W",
  "X",
  "Y",
  "Z",
];
const lowercasearray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "u",
  "r",
  "s",
  "t",
  "w",
  "x",
  "y",
  "z",
];

// Declare a new function on line 3
function generatePassword() {
  // Create a variable to store our generated password
  var password = "";

  // Logic would go here

  // Return our created password
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
