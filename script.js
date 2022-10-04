// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = window.prompt("How many characters do you want?"); //  make #generate click create a window prompt and ask how many characters
  // return error if not in range, store value in variable passwordLength,
  var lowerCase = [
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
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]; // declare variable array lowercase,
  // var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];// declare variable array uppercase,
  var upperCase = [];
  lowerCase.forEach((letter) => {
    upperCase.push(letter.toUpperCase());
  });
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // declare variable array numbers,
  var specialChars = [
    "!",
    "$",
    "&",
    "~",
    "?",
    "_",
    "`",
    "#",
    "@",
    "*",
    "(",
    ")",
  ]; // declare variable array special characters,
  if (passwordLength <= 7 || passwordLength >= 129) {
    var passwordLength = true;
  } else {
    //  ask for lowercase, yes or no,
    // take input and store it
    // ask for uppercase, yes or no,
    // take input and store it
    // ask for  numbers, yes or no
    // take input and store it
    // ask for special characters, yes or no
    // take input and store it
    // make an error prompt if no characters are chosen,
    // loop through each chosen character variable until an array passwordText with passwordLength values is chosen,
    //  scramble the order of the passwordText array and display in #password,
  }

  console.log(passwordLength);

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
