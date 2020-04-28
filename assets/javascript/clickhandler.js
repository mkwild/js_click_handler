const color_box = document.querySelector("#color_box");

const gray_button = document.querySelector("#gray_button");
gray_button.addEventListener("click", function() {
    color_box.className = "gray";
})

const blue_button = document.querySelector("#blue_button");
blue_button.addEventListener("click", function() {
    color_box.className = "blue";
})

const pink_button = document.querySelector("#pink_button");
pink_button.addEventListener("click", function() {
    color_box.className = "pink";
})

let count = 0;
const countspan = document.querySelector("#countspan");
const counter_button = document.querySelector("#counter_button");
counter_button.addEventListener("click", function() {
    count += 1;
    countspan.innerHTML = count;
})

const even_or_odd_button = document.querySelector("#even_or_odd_button");
even_or_odd_button.addEventListener("click", function () {
    if(count%2 == 0)
        alert("The count is even!");
    else
        alert("The count is odd!");
})

const move_box = document.querySelector("#move_box");

const left_button = document.querySelector("#left_button");
left_button.addEventListener("click", function() {
    move_box_container.className = "left";
})

const center_button = document.querySelector("#center_button");
center_button.addEventListener("click", function() {
    move_box_container.className = "center";
})

const right_button = document.querySelector("#right_button");
right_button.addEventListener("click", function() {
    move_box_container.className = "right";
})