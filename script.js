// Write your JavaScript code here!
window.addEventListener("load", function(){
   this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
      const div = document.getElementById("missionTarget");
      div.innerHTML = `
      <h2>Mission Destination</h2>
      <ol>
         <li>Name: ${json[0].name}</li>
         <li>Diameter: ${json[0].diameter}</li>
         <li>Star: ${json[0].star}</li>
         <li>Distance from Earth: ${json[0].distance}</li>
         <li>Number of Moons: ${json[0].moons}</li>
      </ol>
      <img src="${json[0].image}">
      `;
   let form = document.querySelector("form");
      form.addEventListener("submit", function(e) {
         e.preventDefault();
         let pilot = document.querySelector("input[name=pilotName]");
         let copilot = document.querySelector("input[name=copilotName]");
         let fuel = document.querySelector("input[name=fuelLevel]");
         let cargo = document.querySelector("input[name=cargoMass]");
      if (pilot.value === "" || copilot.value === "" || fuel.value === "" || cargo.value === "") {
         alert("All fields must be filled out!");
      }else if (isNaN(fuel.value) || isNaN(cargo.value)){
         alert("Fuel and Cargo must be numbers!");
      }else if (fuel.value < 10000){
         const h2 = document.getElementById("launchStatus")
         h2.innerHTML = `<h2 id="launchStatus"><font color="red">Shuttle Not Ready for Launch</font></h2>`
         const div = document.getElementById("faultyItems");
         div.innerHTML = `
         <ol>
            <li id="pilotStatus">Pilot Ready</li>
            <li id="copilotStatus">Co-pilot Ready</li>
            <li id="fuelStatus">Not enough fuel for launch!</li>
            <li id="cargoStatus">Cargo mass low enough for launch.</li>
         </ol>
         `;
      }else if (cargo.value > 10000){
         const h2 = document.getElementById("launchStatus")
         h2.innerHTML = `<h2 id="launchStatus"><font color="red">Shuttle Not Ready for Launch</font></h2>`
         const div = document.getElementById("faultyItems");
         div.innerHTML = `
         <ol>
            <li id="pilotStatus">Pilot Ready</li>
            <li id="copilotStatus">Co-pilot Ready</li>
            <li id="fuelStatus">Fuel level high enough for launch.</li>
            <li id="cargoStatus">Cargo mass is too high for launch!</li>
         </ol>
         `;
      } else {
         const h2 = document.getElementById("launchStatus")
         h2.innerHTML = `<h2 id="launchStatus"><font color="green">Shuttle is ready for Launch!</font></h2>`
         const div = document.getElementById("faultyItems");
         div.innerHTML = `
         <ol>
            <li id="pilotStatus">Pilot Ready</li>
            <li id="copilotStatus">Co-pilot Ready</li>
            <li id="fuelStatus">Fuel level high enough for launch</li>
            <li id="cargoStatus">Cargo mass low enough for launch</li>
         </ol>
         `;
         }
      });
   });
});
});
   

