function getRandomPassword() {
  var listofChar = [];
  var passwordPrompt = prompt("Choose Character Length Between 8 and 128");
  var numberOfTimes = parseInt(passwordPrompt);

    if (numberOfTimes < 8 || numberOfTimes > 128) {
        alert("Please Select A Number Between 8 and 128")


  }

  else {
    var password = "";

    var specialChar = confirm("Include Special Characters?");
        if (specialChar === true) {
            listofChar.push("@", "%", "+", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".");
            }
   
    var numChar = confirm("Include Numbers?");
        if (numChar === true) {
            listofChar.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
            }   


    var lowerCaseChar = confirm("Include LowerCase Letters?");
        if (lowerCaseChar === true) {
             listofChar.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
            }


    var upperCaseChar = confirm("Include UpperCase Letters?");
        if (upperCaseChar === true) {
            listofChar.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
            }

    console.log(listofChar);


    for (var i = 0; i < numberOfTimes; i++) {
      var passwordChar = getRandomChar();
      password = password + passwordChar;
        }

    console.log(password);

    return password;
  }

  function getRandomChar() {
    var randomIndex = Math.floor(Math.random() * listofChar.length);
    var randomNew = listofChar[randomIndex];

    return randomNew;
  }

}


var generatePassword = document.getElementById("generate");
 
    generatePassword.addEventListener("click", function () {
      var randomPassword = getRandomPassword();
      var userGenPass = document.getElementById("textpassword");
      userGenPass.value = randomPassword;
  
    });

var copyButton = document.getElementById("copyBtn");

    copyButton.addEventListener("click", function () {
        var copyPass = document.getElementById("textpassword");
        copyPass.select();
        copyPass.setSelectionRange(0,99999);
        document.execCommand("copy");
      
    })