

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters 
// <include lowercase, uppercase, numeric, and/or special character 
// input should be validated and at least one character type should be selected


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() 
{
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() 
  {
    // Number cast, casts the datat entered by the user into a a data type: Number
    let aNumber = Number(window.prompt("Please enter a length for your password (8-128)", ""));


    // check if the number entered is between 8 and 128
    // if aNumber is not between 8 and 128 then stay in the loop

    while ((aNumber <= 8 || aNumber >= 128)) 
    {
      aNumber = Number(window.prompt("Sorry! \nThat length is not appropriate for this password. \nPlease enter an appropriate length. (8-128)", ""));
    }

    // Ask the user whether or not to include lowercase
    let lower_case = String(window.prompt("Do you want lowercase within your password (y/n) ?", ""));

    // sets string entered bu user to lowercase
    lower_case = lower_case.toLowerCase()

    //grabs the first letter of the string the user enters and sets it to lower_case 
    lower_case = lower_case.charAt(0)


    //Check if the string entered is between starts with "y" or "n"
    //If lower_case is not "y" or "n" then stay in the loop
    while ((lower_case !== 'y' && lower_case !== 'n')) 
    {
      lower_case = String(window.prompt("Sorry! \nThat length is not appropriate for this password. \nDo you want lowercase within your password (y/n) ?", ""));
    }

  }


}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// console.log(writePassword.password);


