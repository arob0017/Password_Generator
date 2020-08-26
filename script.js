// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var lowerSplit = lowercase.split("");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperSplit = uppercase.split("");
var number = "0123456789";
var numberSplit = number.split("");
var special = "!@#$%^&*(){}[]=<>/,.|~?";
var specialSplit = special.split("");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Criteria prompts and confirm alerts will pop up when the 'generate password' button is clicked
function generatePassword() {
  var length = prompt("How many characters would you like in your password? (8-128)");

  if (length < 8 || length > 128) {
    alert("Password needs to be between 8 and 128 characters. Please try again :-)")
  }

  else {
    var lowercase = confirm("Would you like lowercase letters in your password?");

    var uppercase = confirm("Would you like UPPERCASE letters in your password?");

    var numbers = confirm("Would you like numbers in your password?");

    var special = confirm("Would you like special characters (!$&) in your password?");

    if (!lowercase && !uppercase && !numbers && !special) {
      alert("You must choose atleast one criteria :-)");
    }
    // Stating that if criteria confirms are true, they will be added to totalChar array
    else {
      var totalChar = [];
      if (lowercase) {
        totalChar = totalChar.concat(lowerSplit);
      }
      if (uppercase) {
        totalChar = totalChar.concat(upperSplit);
      }
      if (numbers) {
        totalChar = totalChar.concat(numberSplit);
      }
      if (special) {
        totalChar = totalChar.concat(specialSplit);
      }
      console.log(totalChar);
      
      //Using the totalChar characters that have been chosen, pass will loop for the length that the user has chosen their password to be.
      var pass = '';
      for (i = 0; i < length; i++) {
        pass += totalChar[Math.floor(Math.random() * totalChar.length)];
      }

      return pass;
    }
  }
}