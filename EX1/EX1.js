let niveau = prompt("Choisissez un niveau de difficulté: \n1. Facile (3 tentatives, 1 à 10) \n2. Intermediaire (7 tentatives, 1 à 50) \n3. Difficile (10 tentatives, 1 à 100)");
let num 
let tentatives
if(niveau.toUpperCase()==="FACILE" || niveau==1){
    num =Math.floor( Math.random()*10 )
    tentatives=3
}
else if (niveau.toUpperCase()==="INTERMEDIAIRE" || niveau==2){
    num =Math.floor(Math.random() *50)
    tentatives=7

}
else if (niveau.toUpperCase()==="DIFFICILE" || niveau==3){
    num = Math.floor(Math.random() *100)
    tentatives=10
}
else {
    alert("il faut choisir un niveau de difficulté correct ! ")
    window.location.reload()
}


let i = 0 
let a = document.querySelector(".submit")
let b = document.querySelector(".number")
let u =document.querySelector(".pp")
b.focus()
a.addEventListener("click" , function(e){
    verifier()
})
b.addEventListener("keydown",function(e){
    if(e.key === "Enter"){
        verifier()
    }
})

function verifier(){
    i++
    b.value=""
    if(b.value == num && i<tentatives){
        let n1 = document.createElement("p")
        let n2 = document.createTextNode( "vous avez gagner !" )
        n1.append(n2)
        u.append(n1)
        
    }
    if(b.value !=num && i<tentatives){
        let n1 = document.createElement("p")
        let n2 = document.createTextNode( "Le numéro que vous avez entré est incorrect. Essayez encore !")
        n1.append(n2)
        u.append(n1)
    }
    if(i>=tentatives){
        let n1 = document.createElement("p")
        let n2 = document.createTextNode( "vous avez perdu !" )
        n1.append(n2)
        u.append(n1)
        b.value=""
        b.setAttribute("readonly", "true");
    }
}
let c = document.querySelector(".button")
c.addEventListener("click",function(e){
    window.location.reload()
})

