//UppercaseChars
var UppercaseChars = [
  'A', 'B', 'C', 'D', 'E',
  'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O',
  'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y',
  'Z'
]

//LowercaseChars
var LowercaseChars = [
  'a', 'b', 'c', 'd', 'e',
  'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y',
  'z'
]

//Numbers
var Numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

//Special Characters
var SpecialChars = [
  '!', '@', '#', '$', '%',
  '^', '&', '*', '(', ')',
  '{', ' }', '[', ']', '~',
  '_', '-', '.', ';', ':',
  ',', '\\'
]

// Assignment code here
function PasswordChoices() {
  //ask the user how many characters they want in password
  var length = prompt("How many characters would you like in your password?");
  if (length === "" || length === null) {
    alert("You must provide a number between 8 and 128");
    return
  }
  else {
    length = parseInt(length);
    Number.isInteger(length);
    if (isNaN(length) || length < 8 || length > 128) {
      alert("You must provide a number between 8 and 128");
      return
    }
  }
  //ask the user if they want numbers
  var hasNumbers = confirm("Click OK if you want Numbers in your password");

  //ask the user if they want uppercase letters
  var hasUppercaseChars = confirm("Click OK if you want Uppercase Letters in your password");

  //ask the user if they want lower case letters
  var hasLowercaseChars = confirm("Click OK if you want Lowercase Letters in your password");

  //ask the user if they want special characters
  var hasSpecialChars = confirm("Click OK if you want Special Characters in your password");

  // check to see if user chose any characters to be added to password at all
  if (
    hasNumbers === false &&
    hasUppercaseChars === false &&
    hasLowercaseChars === false &&
    hasSpecialChars === false
  ) {
    alert("You must choose at least one type of character to add to generate a password");
    PasswordChoices();
  }

  //User length and character type choices
  var UserChoice = {
    length: length,
    Numbers: hasNumbers,
    UppercaseChars: hasUppercaseChars,
    LowercaseChars: hasLowercaseChars,
    SpecialChars: hasSpecialChars
  };
  return UserChoice;
}

//random character generator
function randomcharacter(array) {
  var randArray = Math.floor(Math.random() * array.length)
  return array[randArray];
}

//generate the password
function generatePassword() {
  var choices = PasswordChoices();
  //array of character choices to include in password
  var charchoices = [];

  //array for characters chosen by user to put in password
  var selectedchoices = [];

  //User choices to add to password
  if (choices.Numbers) {
    charchoices = charchoices + randomcharacter(Numbers);
    selectedchoices = selectedchoices.concat(Numbers);
  };

  if (choices.UppercaseChars) {
    charchoices = charchoices + randomcharacter(UppercaseChars);
    selectedchoices = selectedchoices.concat(UppercaseChars);
  };

  if (choices.LowercaseChars) {
    charchoices = charchoices + randomcharacter(LowercaseChars);
    selectedchoices = selectedchoices.concat(LowercaseChars);
  };

  if (choices.SpecialChars) {
    charchoices = charchoices + randomcharacter(SpecialChars);
    selectedchoices = selectedchoices.concat(SpecialChars);
  };

  var PassLength = choices.length - charchoices.length;
  for (var i = 0; i < PassLength; i++) {
    var password = charchoices += randomcharacter(selectedchoices);
  }
  //return the password
  return password;
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
