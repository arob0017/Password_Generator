// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

var length = 8 < 128;
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "01234567890";
var special = "!@#$%^&*(){}[]=<>/,.|~?";



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




var length = prompt ("How many characters would you like in your password? (8-128)");
alert(length);
console.log(length.prompt);

var lowercase = confirm ("Would you like lowercase letters in your password?");
alert(lowercase);

var uppercase = confirm ("Would you like UPPERCASE letters in your password?");
alert(uppercase);

var numbers = confirm ("Would you like numbers in your password?");
alert(numbers);

var special = confirm ("Would you like special characters (!$&) in your password?");
alert(special);

