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

let isNumbers;
let isSpecialChar;
let isUpperCase;
let isLowerCase;
const optionsArray = [];

// Declare function
function generatePassword() {
  // passwordLength prompt and validation
  const passwordLength = prompt("how long would you like your password");
  console.log(passwordLength);

  const passwordLengthNumber = parseInt(passwordLength, 10);

  if (passwordLengthNumber >= 8 && passwordLengthNumber <= 128) {
    // Create a variable to store our generated password
    const passwordArray = [];

    // numbersArray
    isNumbers = confirm("would you like numbers in your password");

    console.log(isNumbers);

    // specialCharArray
    isSpecialChar = confirm(
      "would you like special character in your password"
    );

    console.log(isSpecialChar);

    // upperCaseArray
    isUpperCase = confirm("would you like uppercase in your password");

    console.log(isUpperCase);

    //lowercaseArray
    isLowerCase = confirm("would you like lowercase in your password");

    console.log(isLowerCase);

    if (isNumbers) {
      optionsArray.push(numbersArray);
    }
    if (isUpperCase) {
      optionsArray.push(upperCaseArray);
    }
    if (isSpecialChar) {
      optionsArray.push(specialCharArray);
    }
    if (isLowerCase) {
      optionsArray.push(lowerCaseArray);
    }
    if (!isNumbers && !isUpperCase && !isSpecialChar && !isLowerCase) {
      alert("please select at least one character");
    }
    console.log(optionsArray);
    for (let i = 0; i < passwordLengthNumber; i++) {
      let randomArray =
        optionsArray[Math.floor(Math.random() * optionsArray.length)];
      let randomCharacter =
        randomArray[Math.floor(Math.random() * randomArray.length)];

      passwordArray.push(randomCharacter);
    }
    console.log(passwordArray);

    return passwordArray.join("");
  } else {
    alert("password must be between 8 - 128");
  }
}

// let randomArray = optionsArray[Math.floor(math.random() * optionsArray.length)];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
