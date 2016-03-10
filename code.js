var inputText = document.getElementById("text-input");
var buttonCheck = document.getElementById("button-check");
var testString = "";


// Checks to see if the input is valid based on the pattern info in the input DOM
function textChecker() {
  if (inputText.validity.valid && inputText.value !== "") {
    testString = inputText.value;
    reversal(testString);
    alphabits(testString);
    palindrome(testString);
  };
}

// This reverses the string text
function reversal(sentTestString) {
  document.getElementById("reversal").innerHTML = "<p>Your reversed string is: " + sentTestString.split("").reverse().join(""); + "</p>";
}

// This sorts the string text
function alphabits(sentTestString) {
  document.getElementById("sort").innerHTML = "<p>Your sorted string is: " + sentTestString.split("").sort().join(""); + "</p>";
}

// This checks to see if the string is a palindrome
function palindrome(sentTestString) {
  var sentTestStringArray = sentTestString.split("");
  var strLeng = sentTestStringArray.length;
  var isDrome = "";

// This loops through the string and compares the opposite characters to see if they match
  for (var i = 0; i < Math.floor(strLeng / 2); i++) {
    if (sentTestStringArray[i] !== sentTestStringArray[strLeng-(i+1)]) {
      var isDrome = "NOT "
      break;
    };
  };

  document.getElementById("palidrome").innerHTML = `<p>Your string is ${isDrome}a palidrome</p>`; 
}

buttonCheck.addEventListener("click", textChecker);

// This checks to see if the keydown event in the input box is the enter key
inputText.addEventListener("keydown", function() {
  if (event.code === "Enter") {
    textChecker();
  };
});




