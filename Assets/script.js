//UppercaseChars
//LowercaseChars
//Alphanumeric
//Symbols




// Assignment code here
function generatePassword() {
  //ask the user how many characters
  //ask the user if they want numbers
  //ask the user if they want special characters
  //ask the user if they want uppercase letters
  //ask the user if they want lower case letters
  //generate the password
  //return the password
}


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
