// Write your JavaScript code here!

// const { addDestinationInfo } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");
// might have to get rid of this const statement

window.addEventListener("load", function() {
    // console.log("Loaded");
    // Alongside selecting all of the inputs from the form, we also want to select the faultyItems div
    // and pass it into the form
        
    const form = document.querySelector("form");
    form.addEventListener("submit", (event)=>{
        event.preventDefault();

        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById('faultyItems');


            formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

    //    let form = document.getElementById("launchForm");

    //    form.addEventListener("submit", function(event){
        // Any code in here will execute after the form submits
        // To make this file more organized, we are going to move any code we put in here into the formSubmission
        // function in scriptHelper.js
        // That way, we can call that formSubmission function back and reduce the amount of code in this file

        // We have to understand what needs to passed in to the formSubmission function
        // The document is just the document object, we need to pass it in to be able to use the document object
        // in the actual formSubmission function
        // As far as the pilot, copilot, fuelLevel, and the cargoMass, we need to select these inputs using the DOM
        // and pass in the values of these inputs into the formSubmission function
        // Whatever varbiable name you want let= (whatever)
        // let pilotInput = document.getElementById("pilotName");
        // Since the copilot input in our form doesn't have an id, you could either use a querySelector or 
        // you could add an id attribute yourself to the input so you can use getElementbyID
        // let copilotInput = document.getElementById("copilotName")

// varible names could change if you want your choice)
            let planet = pickPlanet(listedPlanets);
            let name = planet.name;
            let diameter = planet.diameter;
            let star = planet.star;
            let distance = planet.distance;
            let imageUrl = planet.image;
            let moons = planet.moons;
            addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);

             


        // formSubmission(document, list, pilotInput.value, copilotInput.value, fuelLevelInput.value, cargoMassInput.value)
    
   })
   
});