const megaContainer = document.querySelector(".mega-container")
const container = document. querySelector(".container")

megaContainer.addEventListener("mousemove", (e)=>{
    console.log(e.pageX , e.pageY)
    xAxis = (window.innerWidth - e.pageX)/25
    yAxis = (window.innerHeight - e.pageY)/25
    container.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`
})

megaContainer.addEventListener("mouseenter",(e)=>{
    container.style.transition = "none"
})

megaContainer.addEventListener("mouseleave",(e)=>{
    container.style.transition = "all 0.5s ease"
    container.style.transform = `rotateY(0) rotateX(0)`
})