// Assignment code here

const alphabetLower = ("abcdefghijklmnopqrstuvwxyz").split('');
console.log(alphabetLower);
const alphabetUpper = ("abcdefghijklmnopqrstuvwxyz").toUpperCase().split('');
console.log(alphabetUpper);
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(nums);
const spChar = (' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~').split('');
console.log(spChar);


function generatePassword() {
  console.log("it's working?");

  //ask user how long they'd like pw to be and store it in pwLen
  const pwLen = prompt("How long would you like your password to be? Must be at least 8 and no more than 128 characters.");
  console.log(pwLen);
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


  //can definitely refactor this by combining methods below with the ones above
  //going to leave it for this exercise especially while i'm learning the more
  //verbose code definitely helps me to follow the trail and understand
  //what's happening or at least what I tried to have happen :)


  //get first letter of each yes/no answer and compare against Y and N.
  //This will account for users that type yes, YES, Yes, y, and Y for yes.
  let lowCase = lowCaseAns.charAt(0);
  let upCase = upCaseAns.charAt(0);
  let numb = numericAns.charAt(0);
  let spChar = spCharAns.charAt(0);

  //THEN my input should be validated and at least one character type should be selected
  //WHEN all prompts are answered

  //do an if statement to check if all of the above are N. Also check to make
  //sure the password meets the length requirements. If so,
  //we must start over and give the user an alert that something went wrong.
  //perhaps specify which condition(s) failed?
  //ideally this would be done a different way from a UX standpoint, but just
  //trying to follow instructions exactly.

if (pwLen < 8 || pwLen > 128) {
  alert("Password must a minimum of 8 characters and a maximum of 128 characters.");
  return;
}
//more checks could be produced to account for less expected user behavior
//such as if the user enters YELLOW for the preceding questions it would trigger an
//affirmative answer. I have to think this would be coded differently in an actual
//functioning(get it?) application.

if (lowCase === "N" && upCase === "N" && numb === "N" && spChar === "N") {
  alert("You must choose at least one type of non alpha character to include in your password.");
  return;
}
  //THEN a password is generated that matches the selected criteria
  //WHEN the password is generated

  //generate a random password that is the length of pwLen
  var password = "";
  //start it out as empty. iterate through pwLen times
  //each cycle we will push one character based on the above inputs into the
  //string.




  //THEN the password is either displayed in an alert or written to the page


}









/*
**GIVEN I need a new, secure password
**WHEN I click the button to generate a password
**THEN I am presented with a series of prompts for password criteria
**WHEN prompted for password criteria
**THEN I select which criteria to include in the password
**WHEN prompted for the length of the password
**THEN I choose a length of at least 8 characters and no more than 128 characters
**WHEN asked for character types to include in the password
**THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
**WHEN I answer each prompt
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
