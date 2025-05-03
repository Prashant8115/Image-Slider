let sliderContainer = document.querySelector(".sliderContainer");
let imageContainer = document.createElement("div");
imageContainer.classList.add("imageContainer");

let leftBtn = document.createElement("button");
leftBtn.classList.add("leftBtn");
leftBtn.innerHTML = "&#10094;";

let rightBtn = document.createElement("button");
rightBtn.classList.add("rightBtn");
rightBtn.innerHTML = "&#10095;";
sliderContainer.append(leftBtn, imageContainer, rightBtn);



let imageData = [
    "https://picsum.photos/id/237/500/300",
    "https://picsum.photos/id/1/500/300",
    "https://picsum.photos/id/10/500/300",
    "https://picsum.photos/id/20/500/300",
    "https://picsum.photos/id/200/500/300",
]

let currentImg = 0;
imageData.map((element, index) => {
    let image = document.createElement("img");
    image.setAttribute("src", element);
    imageContainer.append(image);

    leftBtn.addEventListener("click", () => {
        if (currentImg > 0) {
            currentImg--;
            updateSlider();
        }
    })
    rightBtn.addEventListener("click", () => {
        if (currentImg < index) {
            currentImg++;
            updateSlider();

        }
    })


})


updateSlider();
function updateSlider() {
    const width = imageContainer.children[0].clientWidth;
    imageContainer.style.transform = `translateX(-${currentImg * width}px)`;
}

