var testString = "";

var inputText = document.getElementById("text-input");
var buttonCheck = document.getElementById("button-check");

function textChecker() {
  if (inputText.validity.valid && inputText.value !== "") {
    testString = inputText.value;
    reversal(testString);
    alphabits(testString);
    // palindrome(testString);
  };
}

function reversal(sentTestString) {
  document.getElementById("reversal").innerHTML = "<p>Your reversed string is: " + sentTestString.split("").reverse().join(""); + "</p>";
}

function alphabits(sentTestString) {
  document.getElementById("sort").innerHTML = "<p>Your sorted string is: " + sentTestString.split("").sort().join(""); + "</p>";
}

function palindrome() {

}

buttonCheck.addEventListener("click", textChecker);
inputText.addEventListener("keydown", function() {
  if (event.code === "Enter") {
    textChecker();
  };
});




