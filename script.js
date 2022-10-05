// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var lowerCase = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ];
  var upperCase = [];
  lowerCase.forEach((letter) => {
    upperCase.push(letter.toUpperCase());
  });
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialChars = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "~",
    "`",
    "_",
    "-",
  ];

  var passwordLength = window.prompt(
    "Choose number of characters from 8 to 128."
  );

  var password = generatePassword();

  function generatePassword() {
    var passwordOrdered = [];
    if (passwordLength >= 8 && passwordLength <= 129) {
      var lowerYes = window.confirm(
        "Do you want to include lowercase letters?"
      );
      var upperYes = window.confirm("Do you want to include uppercase letters");
      var numbersYes = window.confirm("Do you want to include numbers?");
      var specialCharsYes = window.confirm(
        "Do you want to use special characters?"
      );
      for (let i = 0; i < passwordLength; i++) {
        if ((lowerYes = true)) {
          passwordOrdered.push(lowerCase[Math.floor(Math.random() * 26)]);
        }
        if ((upperYes = true)) {
          passwordOrdered.push(upperCase[Math.floor(Math.random() * 26)]);
        }
        if ((numbersYes = true)) {
          passwordOrdered.push(numbers[Math.floor(Math.random() * 10)]);
        }
        if ((specialCharsYes = true)) {
          passwordOrdered.push(specialChars[Math.floor(Math.random() * 12)]);
        }
        console.log(passwordOrdered);
        // loop through each chosen character variable type and choose a random unit
        // until an array passwordText with passwordLength values is chosen,
        // return error if no character types are chosen,
      }
      function shufflePassword(passwordOrdered) {
        passwordOrdered.sort(() => Math.random() - 0.5);
      }
      let password = [passwordOrdered];
      shufflePassword(passwordOrdered);

      var passwordText = document.querySelector("#password");

      passwordText.value = password;
    } else {
      window.alert("Value must be from 8 to 128!");
    }
  }
}

generateBtn.addEventListener("click", writePassword);
