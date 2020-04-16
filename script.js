// Write your JavaScript code here!
window.addEventListener("load", function(){
   this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
      let planet = json; //reference planet[i];
      
      missionTarget.innerHTML = `
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
   let pilot = document.querySelector("input[name=pilotName]");
   let copilot = document.querySelector("input[name=copilotName]");
   let fuel = document.querySelector("input[name=fuelLevel]");
   let cargo = document.querySelector("input[name=cargoMass]");
   let faultyItems = document.getElementById("faultyItems");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
      form.addEventListener("submit", function(e) {
         e.preventDefault();
         
      if (pilot.value === "" || copilot.value === "" || fuel.value === "" || cargo.value === "") {
         alert("All fields must be filled out!");
      }else if (isNaN(Number(fuel.value)) || isNaN(Number(cargo.value))){
         alert("Fuel and Cargo must be numbers!");
      }else {
         faultyItems.style.visibility="visible";
         pilotStatus.innerHTML = `Pilot ${pilot.value} is Ready!`;
         copilotStatus.innerHTML = `Co-pilot ${copilot.value} is Ready!`;

         if (Number(fuel.value <= 10000)){
            fuelStatus.innerHTML = `${fuel.value}(liters) is not enough fuel for launch!`;
         }else {
            fuelStatus.innerHTML = `${fuel.value}(liters) is high enough for launch!`;
         }
         if (Number(cargo.value >= 10000)){
            cargoStatus.innerHTML = `${cargo.value}(kilograms) is too high for launch!`;
         }else {
            cargoStatus.innerHTML = `${cargo.value}(kilograms) is low enough for launch!`;
         }
         if (Number(fuel.value <= 10000) || Number(cargo.value >= 10000)) {
            launchStatus.innerHTML = `<h2><font color="red">Shuttle not ready for launch!</font></h2>`;
         }else {
            launchStatus.innerHTML = `<h2><font color="green">Shuttle is ready for launch!</font></h2>`;
         }
      }
      });
   });
});
});
function myFunction() {
   document.getElementById("myDropdown").classList.toggle("show");
 }
 
 window.onclick = function(e) {
   if (!e.target.matches('.dropbtn')) {
   var myDropdown = document.getElementById("myDropdown");
     if (myDropdown.classList.contains('show')) {
       myDropdown.classList.remove('show');
     }
   }
 }