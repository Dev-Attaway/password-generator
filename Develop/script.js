

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters 
// <include lowercase, uppercase, numeric, and/or special character 
// input should be validated and at least one character type should be selected

var generateBtn = document.querySelector("#generate");

const UPPERCASE_CHAR = arrayCharReader(65, 90);
const LOWERCASE_CHAR = arrayCharReader(97, 122);
const NUMBERS = arrayCharReader(48, 57);
const SPECIAL_CHAR = arrayCharReader(33, 47)
.concat(arrayCharReader(58,64)
.concat(arrayCharReader(91, 96)
.concat(arrayCharReader(91, 96)
    )
  )
);

function arrayCharReader (min, max)
{
  const array = [];
  for(let i = min; i <= max; i++ )
    array.push(i);
  
  return array;
}

function passwordLength()
{
      // Number cast, casts the datat entered by the user into a a data type: Number
      let length = Number(window.prompt("Please enter a length for your password (8-128)", ""));

      // check if the number entered is between 8 and 128
      // if aNumber is not between 8 and 128 then stay in the loop
  
      while ((length < 8 || length > 128)) 
      {
        length = Number(window.prompt("Sorry! \nThat length is not appropriate for this password. \nPlease enter an appropriate length. (8-128)", ""));
      }
  return length
}

function passwordLowerCase()
{
  let flag = false;
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
    {
      flag = !flag;
    }

    while (lower_case !== 'y' && lower_case !== 'n')
    {
      // in this case the user has not enter y/n or yes/no therefore code must ask user for a response to sasfity the question 
      // We repeat the code from when we orginally asked the user for y/n

      lower_case = String(window.prompt("Sorry! \nThat length is not appropriate for this password. \nDo you want lowercase within your password (y/n) ?", ""));
      lower_case = lower_case.toLowerCase()
      lower_case = lower_case.charAt(0)

      if(lower_case === 'y')
      {
        flag = !flag;
      }
    }
    return flag;
}

function passwordUppercase()
{
    // Follows the same code for lowercase however we are now interested in getting the upper case.
    let flag = false;

    let upper_case = String(window.prompt("Do you want uppercase within your password (y/n) ?", ""));
    upper_case = upper_case.toLowerCase();
    upper_case = upper_case.charAt(0);


    if(upper_case === 'y')
    {
      flag = !flag;
    }

    while (upper_case !== 'y' && upper_case !== 'n') 
    {
      upper_case = String(window.prompt("Sorry! \nThat anwser is not appropriate for this. \nDo you want uppercase within your password (y/n) ?", ""));
      upper_case = upper_case.toLowerCase();
      upper_case = upper_case.charAt(0);

      if(upper_case === 'y')
      {
        flag = !flag;
      }
    }
    return flag;
}

function passwordNumber()
{
    let flag = false;
    let include_num = String(window.prompt("Do you want numbers within your password (y/n) ?", ""));
    include_num = include_num.toLowerCase();
    include_num = include_num.charAt(0);

    if(include_num === 'y')
    {
      flag = !flag;
    }

    while (include_num !== 'y' && include_num !== 'n') 
    {
      include_num = String(window.prompt("Sorry! \nThat anwser is not appropriate for this. \nDo you want numbers within your password (y/n) ?", ""));
      include_num = include_num.toLowerCase();
      include_num = include_num.charAt(0); 

      if(include_num === 'y')
      {
        flag = !flag;
      }
    }
    return flag;
}

function passwordSpecialCharacter()
{
    let flag = false;
    let special_char = String(window.prompt("Do you want special characters within your password (y/n) ?", ""));
    special_char = special_char.toLowerCase();
    special_char = special_char.charAt(0);

      if(special_char === 'y')
      {
        flag = !flag;
      }

    while (special_char !== 'y' && special_char !== 'n') 
    {
      special_char = String(window.prompt("Sorry! \nThat anwser is not appropriate for this. \nDo you want special characters within your password (y/n) ?", ""));
      special_char = special_char.toLowerCase();
      special_char = special_char.charAt(0); 

      if(special_char === 'y')
      {
        flag = !flag;
      }
    }
    return flag;
}

  function generatePassword() 
  {

    //calls the function passwordLength to get the  
    let aNumber = passwordLength();
    let isLowerCase = passwordLowerCase();
    let isUpperCase = passwordUppercase();
    let isNum = passwordNumber();
    let isSpecial = passwordSpecialCharacter();

    let charCode = [];

    if(isLowerCase)
      charCode = charCode.concat(LOWERCASE_CHAR);

    if(isUpperCase)
      charCode = charCode.concat(UPPERCASE_CHAR);

    if(isNum)
      charCode = charCode.concat(NUMBERS);

    if(isSpecial)
      charCode = charCode.concat(SPECIAL_CHAR);

    const passwordArray = [];

    for(let i =0; i < aNumber; i++)
    {
      const passwordChar= charCode[Math.floor(Math.random() * charCode.length)];
      passwordArray.push(String.fromCharCode(passwordChar));
    }

    return passwordArray.join('');
  }  

    
// Write password to the #password input
function writePassword() 
{
  let passwordText = document.querySelector("password");
  let password = generatePassword();

  console.log(password);
  passwordText.text == password;

}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


