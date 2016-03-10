var testString = "";

var inputText = document.getElementById("text-input");
var buttonCheck = document.getElementById("button-check");

function textChecker() {
  if (inputText.validity.valid && inputText.value !== "") {
    console.log("Is true!");
    // reversal(testString);
    // alphabits(testString);
    // palindrome(testString);
  };
}


function reversal() {

}

function alphabits() {

}

function palindrome() {

}

buttonCheck.addEventListener("click", textChecker);
inputText.addEventListener("keydown", function() {
  if (event.code === "Enter") {
    textChecker();
  };
});




