// Assignment code here

const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
const upperCaseLetters = lowerCaseLetters.toUpperCase();
const numbers = "0123456789";
const specialCharacters = "~!@#$%^&*()_+=-`<>?/{}[]"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var useLowerCase = false;
  var useUpperCase = false;
  var useNumbers = false;
  var useSpecialCharacters = false;
  var numCharacters = 0;
  var password = "";
  var passwordCriteria = [];
  // make sure at least on password criteria is chosen
  while(!(useLowerCase || useUpperCase || useNumbers|| useSpecialCharacters)){
    confirm("Please select your password criteria. You must select at least one.\nWould you like to continue?")
    useLowerCase = confirm("Would  you like to use lower case letters?");
    useUpperCase = confirm("Would  you like to use upper case letters?");
    useNumbers = confirm("Would  you like to use numbers?");
    useSpecialCharacters = confirm("Would  you like to use special characters?");
    if(!(useLowerCase || useUpperCase || useNumbers|| useSpecialCharacters)){
      confirm("You must select at least one criteria");
    }
  }
  // make sure the number of characters is between 8 and 128
  while(numCharacters<8 || numCharacters >128){
    numCharacters = prompt("Please input the number of characters needed in the password\n(it must be between 8 an 128)")
  }
  // create array of choices
  if(useLowerCase){
    passwordCriteria.push('lower');
    document.getElementById("lower-case").checked = true;
  }
  if(useUpperCase){
    passwordCriteria.push('upper');
    document.getElementById("upper-case").checked = true;
  }
  if(useNumbers){
    passwordCriteria.push('number');
    document.getElementById("numeric").checked = true;
  }
  if(useSpecialCharacters){
    passwordCriteria.push('sc');
    document.getElementById("special-char").checked = true;
  }
  // make sure each selection gets chosen at least once
  for(j=0;j<passwordCriteria.length;j++){
    switch (passwordCriteria[j]){
      case "lower":
        password += chooseRandom(lowerCaseLetters);
        break;
      case "upper":
        password += chooseRandom(upperCaseLetters);
        break;
      case "number":
        password += chooseRandom(numbers);
        break;
      case "sc":
        password += chooseRandom(specialCharacters);
        break;
    }
  }
  // choose random values from array for remaining characters
  for(i=1;i<=(numCharacters-passwordCriteria.length);i++){
    switch (chooseRandom(passwordCriteria)){
      case "lower":
        password += chooseRandom(lowerCaseLetters);
        break;
      case "upper":
        password += chooseRandom(upperCaseLetters);
        break;
      case "number":
        password += chooseRandom(numbers);
        break;
      case "sc":
        password += chooseRandom(specialCharacters);
        break;
    }

  }
  
  return password;
}

function chooseRandom(array){
  return array[Math.floor(Math.random() * array.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
