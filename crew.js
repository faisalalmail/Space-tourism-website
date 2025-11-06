let crewData
const circles = document.getElementsByClassName("circle")

fetch(`data.json`)
.then(response => response.json())
.then(data => {
    crewData = data.crew
})


function loadCrew(id){

    //update DOM elements
    //Update name
    document.getElementById("crew-name").textContent = crewData[id].name
    //update bio
    document.getElementById("crew-bio").textContent = crewData[id].bio
    //update role
    document.getElementById("crew-role").textContent = crewData[id].role
    //update image
    document.getElementById("crew-dp").src = crewData[id].images.webp
    //Change the active circle
    for (let circle of circles){
        circle.classList.remove("active")
    }
    document.getElementById(id).classList.add("active")






}