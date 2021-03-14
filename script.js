// Assignment Code
var generateBtn = document.querySelector("#generate");
// array for all the password character types
const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "6", "8", "9"];

const specialCharArray = [`@%+\\/'!#$^?:,)(}{][~-_.`];

const uppercaseArray = [
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
const lowercaseArray = [
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

// Declare function
function generatePassword() {
  // Create a variable to store our generated password
  var password = "";

  // passwordLength prompt and validation
  const passwordLength = prompt("how long would you like your password");

  if (passwordLength < 8) {
    alert("password too short must be 8 or more");
    prompt("please pick a length greater then 8");
  } else if (passwordLength > 128) {
    alert("password too long must be less than 128");
    prompt("please pick a length less then 128");
  } else {
  }

  // numbersArray selection

  prompt("would you like numbers in your password");
  if (wouldLikeNumbers) {
    return true;
  } else {
    return false;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
