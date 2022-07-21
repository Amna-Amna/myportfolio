const megaContainer = document.querySelector(".mega-container")
const container = document. querySelector(".container")

megaContainer.addEventListener("mousemove", (e)=>{
    console.log(e.pageX , e.pageY)
    xAxis = (window.innerWidth)/30
    yAxis = (window.innerHeight)/30
    megaContainer.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`
})