// Assignment code here
//Enter a series of prompts for user, that has criteria for the password.
//Create the criteria for the user password
//criterias are: length, type,lower/uppercase, number, and/or special characters
//when all prompts answered then the password is generated
//lastly the password is generated displayed on the screen

var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers =   ["1","2","3","4","5","6","7","8","9","0"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var special =   ["!","@","#","$","%","^","&","*","(",")","-","_","=","+"];

var all = [];
var charactersLength = 8;

var  greeting = window.alert("Welcome to the password Generator")

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



console.log();

// Write password to the #password input

function writePassword() {
  var password1 = theReply();
  var passwordText = document.querySelector("#password");

  

if (password1) {
  var randomPassword = generatePassword();
  passwordText.value = randomPassword;
}
else{
  passwordText.value = "";
}
}



var reply = window.prompt("Are you wanting to create a password?");


  if(reply === "yes" || reply === "YES") {
  window.alert("Great! lets get down to business");

 }

 else if( reply === "no" || reply === "NO"){
  window.alert("We'll see you next time!");
 
}  



function theReply () {  
    all= [];
    charactersLength = parseInt(prompt("How many characters would you like to have? ( =>8, <=128)"));{

if (isNaN(charactersLength) || charactersLength < 8 || charactersLength > 128){
  window.alert("Would need to be a number value between 8-128 character!");
  return false;
}

if (confirm("would you like to have numbers?")) {
  all = all.concat(numbers);
}

if (confirm("would you like to have uppercase?")) {
 all = all.concat(uppercase);
}

if (confirm("would  you like to have lowercase?")) {
  all = all.concat(lowercase);
}

if (confirm ("would you like to have special?")) {
  all = all.concat(special);
}
return true;
}
}

function generatePassword(){
  var response = "";
for(var i =0; i < charactersLength; i++) {
  var  randomizecharacters = Math.floor(Math.random() * all.length);
  response = response + all[randomizecharacters];
}
return response;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


















