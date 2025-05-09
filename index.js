let sliderContainer = document.querySelector(".sliderContainer");
let imageContainer = document.createElement("div");
imageContainer.classList.add("imageContainer");

let leftBtn = document.createElement("button");
leftBtn.classList.add("leftBtn");
leftBtn.innerHTML = "&#10094;";

let rightBtn = document.createElement("button");
rightBtn.classList.add("rightBtn");
rightBtn.innerHTML = "&#10095;";
sliderContainer.append( imageContainer,leftBtn, rightBtn);



let imageData = [
    "https://picsum.photos/id/237/500/300",
    "https://picsum.photos/id/1/500/300",
    "https://picsum.photos/id/10/500/300",
    "https://picsum.photos/id/20/500/300",
    "https://picsum.photos/id/200/500/300",
]
let timeOut;
let currentImg = 1;

imageData.map((element) => {
    let image = document.createElement("img");
    image.setAttribute("src", element);
    imageContainer.append(image);
})
leftBtn.addEventListener("click", () => {
    if (currentImg >1) {
        currentImg--;
        clearTimeout(timeOut);
        updateSlider();
    }
})
rightBtn.addEventListener("click", () => {
    if (currentImg <imageData.length) {
        currentImg++;
        clearTimeout(timeOut);
        updateSlider();
    }
})

updateSlider();
function updateSlider() {
    if (currentImg>imageData.length) {
        currentImg=1;
        
    } else if(currentImg<1) {
        currentImg=imageData.length;
        
    }
    const width = imageContainer.children[0].clientWidth;
    imageContainer.style.transform = `translateX(-${(currentImg -1)* width}px)`;
    timeOut=setTimeout(()=>{
        currentImg++;
        updateSlider();
    },3000)
}
 

