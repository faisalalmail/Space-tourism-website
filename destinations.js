console.log("js loaded")

let destinations

fetch('data.JSON')
.then(res => res.json())
.then(data => {
    destinations = data.destinations

})

function load(reqPlanet){


    //update dom
    //1. change the list toggled active
   const planetsBtns =  document.getElementsByClassName("planet-btn")
   for (let btn of planetsBtns){
    btn.classList.remove("active");
   }
   document.getElementById(`dest-${reqPlanet}`).classList.add("active");
    //2. update planet name in H1
    document.getElementById("destination-name").innerText = destinations[reqPlanet].name
    //3. update the description text
    document.getElementById("destination-description").innerText = destinations[reqPlanet].description
    //4. update distance and travel time
    document.getElementById("distance").innerText = destinations[reqPlanet].distance
    document.getElementById("travel-time").innerText = destinations[reqPlanet].travel
    //5.update image
    document.getElementById("destination-img").src = destinations[reqPlanet].images.webp
    // How can the change of content happen with some transitioning?!
    

}