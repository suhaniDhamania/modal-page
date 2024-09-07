

const btns = document.querySelectorAll(".btn");
const contentDiv = document.querySelector(".content-div");
const crossimg = document.querySelectorAll(".image-2");
const opening = document.querySelector(".opening"); 

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        contentDiv.classList.toggle("content-div-show");
        opening.classList.toggle("opening-hide");
    });
});

crossimg.forEach(img => {
    img.addEventListener("click", () => {
        contentDiv.classList.remove("content-div-show");
        opening.classList.remove("opening-hide");
    });
});
