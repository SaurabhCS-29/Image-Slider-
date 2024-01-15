
const slides=document.querySelectorAll(".slide")
var counter = 0;

slides.forEach(
    (slide, index) =>{
    slide.style.left= `${index*100}%`
    }
)

// goPrev function for (<) prev button...
const goPrev = () =>{
    counter--
    slideImage()
}

// goNext function for (>) next button...
const goNext = () =>{
    counter++
    slideImage()
}

// slideImage function for change image after clicking next & prev buttons... 
const slideImage = () => {
    slides.forEach(
        (slide,index) =>{
            if(counter == slides.length){
                counter=0;
                index=0;
            }
            if(counter < 0){
                counter=slides.length-1;
                index=slides.length-1;
            }
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}
