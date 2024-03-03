let slideBtnLeft = document.getElementById("slide-btn-left")
let slideBtnRight = document.getElementById("slide-btn-right")
let imgItem = document.querySelectorAll(".img-item")

console.log(imgItem.length-1)

let startslider = 0
let endSlider = (imgItem.length-1) * 100 // 700

slideBtnLeft.addEventListener("click",()=>{
    if(startSlider >= 0) {
        startSlider = startSlider + 100;
    }
    imgItem.forEach(element =>{
        element.style.transform = 'translateX(${startslider}%)';
    })
})
slideBtnRight.addEventListener("click",()=>{
    if(startslider >= -endSlider+100){
        startslider = startslider - 100;
    }
    imgItem.forEach(element =>{
        element.style.transform = 'translateX(${startslider}%)';
    })
})
