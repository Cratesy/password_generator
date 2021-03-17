// Assignment Code
var generateBtn = document.querySelector("#generate");
// array for all the password character types

const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "6", "8", "9"];

const specialCharArray = ["@", "%", "+", "!", "#", "$", "?"];

const upperCaseArray = [
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
const lowerCaseArray = [
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

  if (passwordLength > 8 && passwordLength < 128) {
  } else {
    alert("password must be between 8 - 128");
  }

  // numbersArray
  const wouldLikeNumbers = prompt("would you like numbers in your password");

  if (wouldLikeNumbers) {
  } else {
  }
  // specialCharArray
  const wouldLikeSpecialChar = prompt(
    "would you like special character in your password"
  );

  // if() {
  // } else{

  // }
  // upperCase
  const wouldLikeUpperCase = prompt(
    "would you like uppercase in your password"
  );
  // if(){

  // }else{

  // }
  // lowerCase
  const wouldLikeLowerCase = prompt(
    "would you like lowercase in your password"
  );
  // if (){

  // }else{

  // }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
