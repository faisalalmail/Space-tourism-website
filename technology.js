let techData
const circles = document.getElementsByClassName("tech-circle")
let windowWidth = window.outerWidth;
console.log(windowWidth);
let currentTech = 0


window.addEventListener("resize", function (){
 windowWidth = window.outerWidth;

    if(windowWidth > 1439){
document.getElementById("tech-img").src = techData[currentTech].images.portrait
}
})

fetch(`data.json`)
.then(response => response.json())
.then(data => {
    techData = data.technology
    console.log(techData)
    if(windowWidth > 1439){
document.getElementById("tech-img").src = techData[currentTech].images.portrait
}
})




function loadTech(id){
    currentTech = id
     //popluate data

    
    if(windowWidth > 1439){
    document.getElementById("tech-img").src = techData[id].images.portrait}
    else {document.getElementById("tech-img").src = techData[id].images.landscape}
    document.getElementById("tech-name").textContent = techData[id].name
    document.getElementById("tech-desc").textContent = techData[id].description

     //change switcher
    for (let circle of circles){
        circle.classList.remove("active")
    }
    document.getElementById(id).classList.add("active")

}