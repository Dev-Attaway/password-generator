

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

    let password_char = "";


    // theses flags will signal the function to include specific characters and styles
    let isUpper_case = false;
    let isLower_case = false;
    let isInclude_num = false;
    let isSpecial_char = false;

    

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
    lower_case = lower_case.toLowerCase();

    //grabs the first letter of the string the user enters and sets it to lower_case 
    lower_case = lower_case.charAt(0);

    // isLower_case = !isLower_case; set Bool value to the opposite of it current value
    // Check if the string entered is between starts with "y" or "n"
    // If lower_case is not "y" or "n" then stay in the loop

    if(lower_case === 'y')
      isLower_case = !isLower_case;

    while (lower_case !== 'y' && lower_case !== 'n')
    {
      // in this case the user has not enter y/n or yes/no therefore code must ask user for a response to sasfity the question 
      // We repeat the code from when we orginally asked the user for y/n

      lower_case = String(window.prompt("Sorry! \nThat length is not appropriate for this password. \nDo you want lowercase within your password (y/n) ?", ""));
      lower_case = lower_case.toLowerCase()
      lower_case = lower_case.charAt(0)

      if(lower_case === 'y')
        isLower_case = !isLower_case;
    }

    // Follows the same code for lowercase however we are now interested in getting the upper case.
    let upper_case = String(window.prompt("Do you want uppercase within your password (y/n) ?", ""));
    upper_case = upper_case.toLowerCase();
    upper_case = upper_case.charAt(0);

    if(upper_case === 'y' )
     isUpper_case = !isUpper_case;

    while (upper_case !== 'y' && upper_case !== 'n') 
    {
      upper_case = String(window.prompt("Sorry! \nThat anwser is not appropriate for this. \nDo you want uppercase within your password (y/n) ?", ""));
      upper_case = upper_case.toLowerCase();
      upper_case = upper_case.charAt(0);

      if(upper_case === 'y')
        isUpper_case = !isUpper_case;
    }

    let include_num = String(window.prompt("Do you want numbers within your password (y/n) ?", ""));
    include_num = upper_case.toLowerCase();
    include_num = upper_case.charAt(0);

    if(include_num === 'y')
     isInclude_num == !isInclude_num;

    while (include_num !== 'y' && include_num !== 'n') 
    {
      include_num = String(window.prompt("Sorry! \nThat anwser is not appropriate for this. \nDo you want numbers within your password (y/n) ?", ""));
      include_num = upper_case.toLowerCase();
      include_num = upper_case.charAt(0); 

      if(include_num === 'y')
        isInclude_num == !isInclude_num;
    }

    let special_char = String(window.prompt("Do you want numbers within your password (y/n) ?", ""));
    special_char = special_char.toLowerCase();
    special_char = special_char.charAt(0);

    if(special_char === 'y')
      isSpecial_char == !isSpecial_char;

    while (special_char !== 'y' && special_char !== 'n') 
    {
      special_char = String(window.prompt("Sorry! \nThat anwser is not appropriate for this. \nDo you want numbers within your password (y/n) ?", ""));
      special_char = special_char.toLowerCase();
      special_char = special_char.charAt(0); 

      if(special_char === 'y')
        isSpecial_char == !isSpecial_char;
    }

    // populate a string now knowing the parameters that the password must have
    for(let i = 0; i <= aNumber; i++)
    {
      // Math.floor(Math.random() * (max - min) + min);
      // will give use numbers between 65 and 90 
      // that is the UFT-16 rep of A-Z
      password_char += String.fromCharCode(Math.floor(Math.random() * (25) +65));
    }

      console.log(password_char);

  }
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// console.log(writePassword.password);


