let b = Array.from(document.querySelector("ol").children)
console.log(b)
b.forEach(function(elem){
    elem.addEventListener("click" , function(e){
        elem.style.color = aleatoire()
    })
})

function aleatoire(){
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}
