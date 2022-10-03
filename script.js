// Assignment Code
var generateBtn = document.querySelector("#generate");
 

// Write password to the #password input
function writePassword() {
  var passwordLength; // must equal value entered in dialog box,
  var lowerCase = [abcdefghijklmnopqrstuvwxyz];// declare variable array lowercase,
  var upperCase = [A B C D EF GHIJKLMNOPQRSTUVWXYZ];// declare variable array uppercase,
  var numbers = [0 1 2 3 4 5 6 7 8 9];// declare variable array numbers,
  // declare variable array special characters,
  if (passwordLength <= 7 || passwordLength>= 129) {
    var passwordLength = false;
  }  else {
      // return error if not in range, store value in variable,
  };
  // make #generate click make a window prompt asking for lowercase, yes or no,
    // take input and store it 
  // make #generate prompt uppercase to follow lowercase,
    // take input and store it 
  // make #generate prompt numbers to follow uppercase,
    // take input and store it 
  // make #generate prompt special characters to follow numbers,
    // take input and store it 
  // make an error prompt if no characters are chosen, 
  // loop through each chosen character variable until an array passwordText with passwordLength values is chosen,
  //  scramble the order of the passwordText array and display,
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
