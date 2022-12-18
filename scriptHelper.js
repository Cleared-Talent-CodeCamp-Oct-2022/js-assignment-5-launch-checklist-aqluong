// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let div = document.getElementByID("missionTarget");
   div.innerHTML = `
   
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   `
}

function validateInput(testInput) {
    if (testInput === ""){
        return "Empty";
    }
        else if (isNaN(testInput)){
            return "Not a Number";
        }
        else{
            return "Is a Number"
        };
//    Take in a value (from one of the from inputs) and returns information about whether
//    The input is valid or not
//    If the value passed into this function is empty, we want to return "Empty"
//    Else if the value is not a number, we return "Not a Number"
//    Else if the value IS a number, we return "Is a Number"
//    isNaN(testInput) will return true if testInput is NOT a number
//    isNaN("1000") ---> false
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementByID("pilotStatus");
    let copilotStatus = document.getElementByID("copilotStatus");
    let launchStatus = document.getElementByID("launchStatus");
    let fuelStatus = document.getElementByID("fuelStatus");
    let cargoStatus = document.getElementByID("cargoStatus");
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
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) ==="Empty" || validateInput(cargoLevel) === "Empty"){
        alert("All fields required");
    }
        else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number"){
            alert("Pilot and Co-Pilot fields must be words!");
        }
        else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
            alert("Fuel Level and Cargo Level fields must be a Number!");
        }
        else{
            pilotStatus.innerHTML = `Pilot ${pilot} is ready`;
            copilotStatus.innerHTML = `CoPilot ${copilot} is ready`;
        }
        if (fuelLevel < 10000){
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Not enough fuel for journey 🔻🪫"
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
        }
        if(cargoLevel > 10000){
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Too much mass. Please lighten Cargo ";
            launchStatus.innerHTML = "Shuttle not ready for launch"
            launchStatus.style.color = "red";
        }
        if (fuelLevel > 10000 && cargoLevel < 10000){
            list.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle ready for Launch!!! 🚀🚀🚀 "
            launchStatus.style.color = "green";
            fuelLevel.innerHTML = "Fuel level good for Launch!";
            cargoLevel.innerHTML = "Cargo mass good for Launch";
        }
    // Else if none of the input values are empty, then we need to make sure that they are the correct type.
    // validateInput(pilot) returns "Is a Number", then the user has provided incorrect data. That means we need to send in an ALERT
    // but this time reminding to input valid data in all the fields.

    // You really want to think the code in this formSubmission functiona as one big if/else block
    // Order of operations:
    // if any of the fields are empty, send alert to the user that all field are required
    // else if any of the fields have the wrong type data in them, send an alert to the user to input vaild dat types
    // else, in the case that we pass both these validation steps, we can begin updating the Launch Information section

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
