
const slider = document.querySelector(".slider")
const carousel = document.querySelector(".carousel")

const prev = document.querySelector(".prev")
const next = document.querySelector(".next")

const mediaSmall = 100;
const mediaBig = 32

let direction =-1

prev.addEventListener("click", function(){
    clearInterval(callSlider)
   
    if (direction === -1){
        direction =1
        slider.appendChild(slider.firstElementChild)
        }
    direction = +1


    carousel.style.justifyContent = "flex-end" 
    if (window.innerWidth> 769){
        slider.style.transform = `translate(${mediaBig}%)`
    } else {
        slider.style.transform = `translate(${mediaSmall}%)`
    }



    callSlider = setInterval(sliderInfinity, 4000)
})


next.addEventListener("click", function(){
    clearInterval(callSlider)
    if (direction === 1){
        direction = -1
        slider.prepend(slider.lastElementChild)
    }

    direction = -1
    carousel.style.justifyContent = "flex-start";

    if (window.innerWidth> 769){
        slider.style.transform = `translate(-${mediaBig}%)`
    } else {
        slider.style.transform = `translate(-${mediaSmall}%)`
    }
    callSlider = setInterval(sliderInfinity, 4000)
})


slider.addEventListener("transitionend", function(){
    if (direction === -1){
        slider.appendChild(slider.firstElementChild)
    } else if ( direction === 1){
        slider.prepend(slider.lastElementChild)
    }
    slider.style.transition = "none"
    slider.style.transform = "translate(0)"

    setTimeout(function(){


        slider.style.transition = "all 0.7s"
    },)
})



let sliderInfinity =  function(){
 
        if (direction === 1){
            direction = -1
            slider.prepend(slider.lastElementChild)
        }
    
        direction = -1
        carousel.style.justifyContent = "flex-start";

        if (window.innerWidth> 769){
            slider.style.transform = `translate(-${mediaBig}%)`
        } else {
            slider.style.transform = `translate(-${mediaSmall}%)`
        }
        
    
        console.log(direction)
    
    }
    
  let callSlider = setInterval(sliderInfinity, 4000)
    





