// Assignment code here

const alphabetLower = ("abcdefghijklmnopqrstuvwxyz").split('');
console.log(alphabetLower);
const alphabetUpper = ("abcdefghijklmnopqrstuvwxyz").toUpperCase().split('');
console.log(alphabetUpper);
const nums = "0123456789".split('');
console.log(nums);
const spChar = (' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~').split('');
console.log(spChar);


function generatePassword() {
  console.log("it's working?");

  //ask user how long they'd like pw to be and store it in pwLen
  const pwLen = prompt("How long would you like your password to be? Must be at least 8 and no more than 128 characters.");
  console.log(pwLen);
  //ask user if they'd like special characters included and convert to uppercase
  const lowCaseAns = confirm("Would you like lower case characters in your password? (Confirm = Yes, Cancel = No)");
  console.log(lowCaseAns);
  //THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  const upCaseAns = confirm("Would you like to include upper case character(s) in your password? (Confirm = Yes, Cancel = No)");
  console.log(upCaseAns);
  const numericAns = confirm("Would you like to include numeric character(s) in your password? (Confirm = Yes, Cancel = No)");
  console.log(numericAns);
  const spCharAns = confirm("Would you like to include special character(s) in your password? (Confirm = Yes, Cancel = No)");
  console.log(spCharAns);


  //can definitely refactor this by combining methods below with the ones above
  //going to leave it for this exercise especially while i'm learning the more
  //verbose code definitely helps me to follow the trail and understand
  //what's happening or at least what I tried to have happen :)


  //get first letter of each yes/no answer and compare against Y and N.
  //This will account for users that type yes, YES, Yes, y, and Y for yes.
  /*let lowCase = lowCaseAns.charAt(0);
  let upCase = upCaseAns.charAt(0);
  let numb = numericAns.charAt(0);
  let spChar = spCharAns.charAt(0);
*/
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

if (!(lowCaseAns) && !(upCaseAns)  && !(numericAns)  && !(spCharAns)) {
  alert("You must choose at least one type of non alpha character to include in your password.");
  return;
}
  //THEN a password is generated that matches the selected criteria
  //WHEN the password is generated

  //generate a random password that is the length of pwLen
  var newPassword = "";
  //start it out as empty. iterate through pwLen times
  //each cycle we will push one character based on the above inputs into the
  //string.
  //start adding possible characters to pile of possibilities
  let possibleChar = [];
  if (lowCaseAns) {
    possibleChar=possibleChar.concat(alphabetLower);
    console.log(possibleChar);

  }
  if (upCaseAns) {
    possibleChar=possibleChar.concat(alphabetUpper);
    console.log(possibleChar);

  }
  if (numericAns) {
    possibleChar=possibleChar.concat(nums);
    console.log(possibleChar);

  }
  if (spCharAns) {
    possibleChar=possibleChar.concat(spChar);
    console.log(possibleChar);

  }
  //THEN the password is either displayed in an alert or written to the page

  for (let i=0; i<pwLen; i++) {
    //randomly select letter from possible char and append to pw
    var randChar = possibleChar[Math.floor(Math.random() * possibleChar.length)];
    newPassword += randChar;


  }
console.log(newPassword);
return newPassword;

}










/*
// Get references to the #generate element


// Write password to the #password input

*/

// Add event listener to generate button
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
