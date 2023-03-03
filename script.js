// Assignment code here

const alphabet = ("abcdefghijklmnopqrstuvwxyz").split('');
console.log(alphabet);
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(nums);
const spChar = (' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~').split('');
console.log(spChar);


function generatePassword() {
  console.log("it's working?");

  //ask user how long they'd like pw to be and store it in pwLen
  const pwLen = prompt("How long would you like your password to be? Must be at least 8 and no more than 128 characters.");
  //ask user if they'd like special characters included and convert to uppercase
  const lowCaseAns = prompt("Would you like lower case characters in your password? Yes/No").toUpperCase();
  console.log(lowCaseAns);
  //THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  const upCaseAns = prompt("Would you like to include upper case character(s) in your password? Yes/No").toUpperCase();
  console.log(upCaseAns);
  const numericAns = prompt("Would you like to include numeric character(s) in your password? Yes/No").toUpperCase();
  console.log(numericAns);
  const spCharAns = prompt("Would you like to include special character(s) in your password? Yes/No").toUpperCase();
  console.log(spCharAns);







}









/*
**GIVEN I need a new, secure password
**WHEN I click the button to generate a password
**THEN I am presented with a series of prompts for password criteria
**WHEN prompted for password criteria
**THEN I select which criteria to include in the password
**WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
