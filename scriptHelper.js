// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   // uncomment out and add corasponding variables associated with each listed item
   let missionTarget = document.getElementById('missionTarget');
   missionTarget.innerHTML = `
   <h2>Mission Destination</h2>
   <ol>
       <li>Name: ${name}</li>
       <li>Diameter: ${diameter} </li>
       <li>Star: ${star}</li>
       <li>Distance from Earth: ${distance}</li>
       <li>Number of Moons: ${moons}</li>
   </ol>
   <img src='${imageUrl}'>
   `
}

function validateInput(testInput) {
    if (testInput === ""){
        return 'Empty';
    }
        else if (isNaN(Number(testInput))){
            return 'Not a Number';
        }
        else{
            return 'Is a Number';
        };
};
//    Take in a value (from one of the from inputs) and returns information about whether
//    The input is valid or not
//    If the value passed into this function is empty, we want to return "Empty"
//    Else if the value is not a number, we return "Not a Number"
//    Else if the value IS a number, we return "Is a Number"
//    isNaN(testInput) will return true if testInput is NOT a number
//    isNaN("1000") ---> false


function formSubmission (document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //DOM elements
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let launchStatus = document.getElementById('launchStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    // So given that we have called the formSubmission function in script.js, let's assess what
    // we now would have access to in this function based on what we passed in
    // First we passed in the global docuemtn object, so we can now do things like document.getElementByid
    // and other DOM operations from within this function
    // We also passed in the value of all of the inputs after submitting the forms.
    // So that means we now have the abiltiy to validate that these values are what they are supposed to be
    // Which is exectly why we created the validateInput function.

    // What does it mean for the values of pilot, copilot, fuelLevel, cargoLevel to be valid?
    // None of them should be empty. If any of them are empty, then we need to ALERT the user that all field are required.
    // if validateInput(pilot) returns "Empty", or really if we pass in ANY of the values to validateInput and it returns "Empty",
    // that means we need to send an alert that all field are required.

    // For writing this if statement, think about it like this.
    // If pilot is empty OR if copilot is empty OR if fuelLevel is empty, or if cargoLevel is empty

// Updating Shuttle Requirements
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/forms/validation-with-javascript.html#javascript-validation

    if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty'){
        alert('All fields required');
    }
        else if (validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number'){
        alert('Fuel Level and Cargo Level fields must be a Number!');
        }
        else if (validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number'){
            alert('Pilot and Co-Pilot fields must be words!');
        }
        else{
            pilotStatus.innerHTML = `Pilot ${pilot} is ready 👨🏻‍✈️`;
            copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready 🛫`;
            list.style.visibility = 'hidden';
        }
        // list = faultyItems
        // If the user submits a fuel level that is lower than 10,000 liters change faultyItems(list) to
        // "visable" with an updated fuel status "Not enough fuel for journey"
        // h2 launchStatus should change to RED and say "Shuttle not ready for launch"
        if (Number(fuelLevel) < 10000){
            list.style.visibility = 'visible';
            fuelStatus.innerHTML = 'Not enough fuel for journey 🔻🪫';
            launchStatus.innerHTML = '🚫 Shuttle not ready for launch 🚫';
            launchStatus.style.color = 'red';
        }
        // If too larger > 10,000 change list to visible and update cargo status saying
        // "Too much mass for the shuttle to take off"
        // launchStatus should also change to "Shuttle not ready for launch" with color being red
        else if(Number(cargoLevel) > 10000){
            list.style.visibility = 'visible';
            fuelStatus.innerHTML = 'Too much mass. Please lighten Cargo ⚖️';
            launchStatus.innerHTML = '🛑 Shuttle not ready for launch 🛑';
            launchStatus.style.color = 'red';
        }
        // If everything is fine ie fule > 10,000 AND cargoLevel is < 10,000 
        // launchStatus is color green and says "Shuttle is ready for launch"
        else if (Number(fuelLevel) > 10000 && (Number(cargoLevel)) < 10000){
            list.style.visibility = 'visible';
            launchStatus.innerHTML = '🚀🚀🚀 Shuttle ready for Launch!!! 🚀🚀🚀 ';
            launchStatus.style.color = 'green';
            fuelStatus.innerHTML = 'Fuel level good for Launch! 🔋';
            cargoStatus.innerHTML = 'Cargo mass good for Launch 💯';
        }

// Adding Validation/Adding Alerts to see if the fuel levels are in range for launch as well as cargoLevels
// Pilot and copilot HAVE to be strings while others are Numbers

    // Else if none of the input values are empty, then we need to make sure that they are the correct type.
    // validateInput(pilot) returns "Is a Number", then the user has provided incorrect data. That means we need to send in an ALERT
    // but this time reminding to input valid data in all the fields.

    // You really want to think the code in this formSubmission functiona as one big if/else block
    // Order of operations:
    // if any of the fields are empty, send alert to the user that all field are required
    // else if any of the fields have the wrong type data in them, send an alert to the user to input vaild dat types
    // else, in the case that we pass both these validation steps, we can begin updating the Launch Information section

}
// Fetching Planetary Data

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()

        });

    return planetsReturned;
}

function pickPlanet(planets) {
    // using the below function to select a planet at "random"
    let indexPlanet = Math.floor(Math.random() * planets.length);
    return planets[indexPlanet];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
