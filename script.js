// Assignment Code
var generateBtn = document.querySelector("#generate");

var length = 8<128;
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var lowerSplit = lowercase.split(" ");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperSplit = uppercase.split(" ");
var number = "0123456789";
var numberSplit = number.split(" ");
var special = "!@#$%^&*(){}[]=<>/,.|~?";
var specialSplit = special.split(" ");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
// Criteria prompts and confirm alerts will pop up when the 'generate password' button is clicked

generateBtn.addEventListener("click", writePassword); {
  function generatePassword(){
    var length = prompt ("How many characters would you like in your password? (8-128)");
    
    if (length <= 8 || length >= 128) {
      alert ("Password needs to be between 8 and 128 characters. Please try again :-)")
    } 
      
    else {
      var lowercase = confirm ("Would you like lowercase letters in your password?");
  
      var uppercase = confirm ("Would you like UPPERCASE letters in your password?");
  
      var numbers = confirm ("Would you like numbers in your password?");
  
      var special = confirm ("Would you like special characters (!$&) in your password?");

      if (!lowercase && !uppercase && !numbers && !special) {
        alert("You must choose atleast one criteria :-)");
      }
    }  
  }
}
if (true) {
var lowerrandom = lowercase[Math.floor(Math.random() * lowercase.length)];
var upperrandom = uppercase[Math.floor(Math.random() * uppercase.length)];
var numberrandom = number[Math.floor(Math.random() * number.length)];
var specialrandom = special[Math.floor(Math.random() * special.length)];
}
console.log (lowerrandom, upperrandom, numberrandom, specialrandom);



writePassword;






