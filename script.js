// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var lowerCase = "qwertyuiopasdfghjklzxcvbnm".split();
  var upperCase = [];
  lowerCase.forEach((letter) => {
    upperCase.push(letter.toUpperCase());
  });
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialChars = "!@#$%^&*~`_-".split();

  var passwordLength = window.prompt(
    "Choose number of characters from 8 to 128."
  );
  if (passwordLength >= 8 && passwordLength <= 129) {
    var lowerYes = window.confirm("Do you want to include lowercase letters?");
    var upperYes = window.confirm("Do you want to include uppercase letters");
    var numbersYes = window.confirm("Do you want to include numbers?");
    var specialCharsYes = window.confirm(
      "Do you want to use special characters?"
    );
  } else {
    window.alert("Value must be from 8 to 128!");

    // loop through each chosen character variable until an array passwordText with passwordLength values is chosen,
    //  scramble the order of the passwordText array and display in #password,
  }
  // return error if not in range, store value in variable passwordLength,

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(passwordLength);
