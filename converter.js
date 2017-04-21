console.log("temp converter");

var input = document.getElementById("number");
var fahRadio = document.getElementById("fah");
var celRadio = document.getElementById("cel");
var outputDiv = document.getElementById("output");
var clear = document.getElementById("clear");


function toCelsius (num) {
	var output = (num-32)/1.8;
	return output;
}

function toFahrenheit (num) {
	var output = num * 1.8 +32;
	return output;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
  var outputNum;
  if(fahRadio.checked){
  		outputNum = toFahrenheit(input.value);
  		color(outputNum, 90, 32);
  } else if(celRadio.checked){
  		outputNum = toCelsius(input.value);
  		color(outputNum, 32, 0);
  }
  outputDiv.innerHTML = outputNum;
}


// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

clear.addEventListener("click", function(){
	fahRadio.checked = false;
	celRadio.checked = false;
	input.value = " ";
})

input.addEventListener("keypress", function(event){
	if(event.which === 13){
		determineConverter(event);
	}
})

function color (temp, hot, cold) {
	if(temp > hot){
		outputDiv.style.color = "red";
	} else if (temp < cold){
		outputDiv.style.color ="blue";
	} else{
		outputDiv.style.color ="green";
	}
}