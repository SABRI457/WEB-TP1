let p1 = document.querySelector(".submit")
let p2 = document.querySelector(".text1")
let p4 = document.querySelector(".text2")
let p3 = document.querySelector(".tasks")

let t1 = localStorage.getItem("text");
let text =  t1 ? JSON.parse(t1) : [] ;

if(text){
    text.forEach(function(elem) {
        if(elem.trim()!=""){
            creartion(elem);
        }
    })
}

p1.addEventListener( "click" ,function() {
    ajouter()
}) ;
p2.addEventListener( "keydown" ,function(e) {
    if(e.key === "Enter"){
        ajouter()
    }
}) ;
p4.addEventListener( "keydown" ,function(e) {
    if(e.key === "Enter"){
        ajouter()
    }
}) ;



function ajouter (){
    let i1 = `${p2.value} ${p4.value}`
    if(p2.value.trim()!=="" && p4.value.trim()!==""){
    text.push(i1)
    localStorage.setItem("text", JSON.stringify(text));
    creartion(i1) ; p2.value = "" ; p2.focus() ; p4.value=""
    }
}
function creartion (x) {
    let y1 = document.createElement("div")
    let y2 = document.createElement("input")
    let y3 = document.createElement("span")
    y2.type = "text" ;   y2.value = x  ; 
    y1.className="aaa" ; y3.className="fa-solid fa-trash"
    y3.addEventListener("click",()=>{
        y1.remove()
        let supp = JSON.parse(localStorage.getItem("text"))
        text = supprimer(x,supp)
        localStorage.setItem("text", JSON.stringify(text))
    })
    y1.appendChild(y2)
    y1.appendChild(y3)
    p3.appendChild(y1)
}


function supprimer (x,supp){
    let a =  supp.filter(function(e){
        return e!==x
    })
    return a 
}
