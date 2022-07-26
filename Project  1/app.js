const closedFace = document.querySelector(".closed")
const openFace = document.querySelector(".open")
const speakFace = document.querySelector(".speak")

closedFace.addEventListener("click", ()=>{
    if(openFace.classList.contains("open")){
        openFace.classList.add("active")
        closedFace.classList.remove('active')
        
    }
})

openFace.addEventListener("click", ()=>{
    if(speakFace.classList.contains('speak')){
        speakFace.classList.add("active")
        openFace.classList.remove('active')
        
    }
})

speakFace.addEventListener("click", ()=>{
    if(closedFace.classList.contains('closed')){
        closedFace.classList.add("active")
        speakFace.classList.remove('active')
        
    }
})