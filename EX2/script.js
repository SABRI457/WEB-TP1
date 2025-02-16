const number = document.querySelector("#number");
const color = document.querySelector("#color");
const select = document.querySelector("#fonts");
const textarea = document.querySelector("#area");

number.addEventListener("input",function() {
    textarea.style.fontSize = number.value + 'px';
});
    
color.addEventListener("input", () => {
    textarea.style.color = color.value;
});

select.addEventListener("input", () => {
    textarea.style.fontFamily = select.value;
});
