const megaContainer = document.querySelector(".mega-container")
const container = document. querySelector(".container")


megaContainer.addEventListener("mousemove", (e)=>{
    console.log(e.pageX , e.pageY)
    xAxis = (window.innerWidth - e.pageX)/20
    yAxis = (window.innerHeight - e.pageY)/20
    container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

megaContainer.addEventListener("mouseenter",(e)=>{
    container.style.transition = "none"
})

megaContainer.addEventListener("mouseleave",(e)=>{
    container.style.transition = "all 1s ease"
    container.style.transform = `rotateY(0) rotateX(0)`
})
