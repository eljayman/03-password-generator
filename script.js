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
      if (!upperYes && !lowerYes && !numbersYes && !specialCharsYes) {
        window.alert("You must choose at least one character type!");
        return;
      }
      for (let i = 0; i < passwordLength; ) {
        if (lowerYes == true) {
          passwordOrdered.push(lowerCase[Math.floor(Math.random() * 26)]), i++;
        }

        if (upperYes == true) {
          passwordOrdered.push(upperCase[Math.floor(Math.random() * 26)]), i++;
        }
        if (numbersYes == true) {
          passwordOrdered.push(numbers[Math.floor(Math.random() * 10)]), i++;
        }
        if (specialCharsYes == true) {
          passwordOrdered.push(specialChars[Math.floor(Math.random() * 12)]),
            i++;
        }
      }
      console.log(passwordLength);
      console.log(passwordOrdered.length);
      function shufflePassword(passwordOrdered) {
        passwordOrdered.sort(() => Math.random() - 0.5);
      }
      let password = passwordOrdered;
      shufflePassword(passwordOrdered);

      var passwordText = document.querySelector("#password");

      passwordText.value = password.join("");
    } else {
      window.alert("Value must be from 8 to 128!");
    }
  }
  generatePassword();
}

generateBtn.addEventListener("click", writePassword);
