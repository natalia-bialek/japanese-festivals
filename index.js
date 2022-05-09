let mountain = document.querySelector("#mountain");
let flowers = document.querySelector("#flowers");
let text = document.querySelector("#text");
let container = document.querySelector(".parallax__container");




container.addEventListener("scroll", e => {
    let v = e.target.scrollTop;
    mountain.style.left = v * 0.25 + "px";
    flowers.style.top = v * 0.05 + "px";
    text.style.marginLeft = v * -0.15 + "%";
});