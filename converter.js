var tempInput = document.getElementById("tempInput");
var clearBtn =  document.getElementById("clear");



// C=(F-32)/1.8
function toCelsius (convertToC) {
	var toCel = (convertToC - 32) * (5/9);
	output.innerHTML = toCel;
	return toCel;
}

// ℉=(℃*1.8)+32
function toFahrenheit (convertToF) {
	var toFah = (convertToF *(9/5)) + 32;
	output.innerHTML = toFah
	return toFah;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
